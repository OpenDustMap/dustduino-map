/*global L*/
Air.Views = Air.Views || {};
(function () {
  'use strict';
  // just something to switch around our header selection
  Air.Views.Edit = Backbone.View.extend({
    events: {
      'submit form': 'submit'
    },

    initialize: function() {
      // Initialize map
      L.mapbox.accessToken = 'pk.eyJ1Ijoia2FtaWN1dCIsImEiOiJMVzF2NThZIn0.WO0ArcIIzYVioen3HpfugQ';
      var map = L.mapbox.map('minimap', 'devseed.j586d1hp');

      var marker;

      var $lat = this.$('#latitude');
      var $lon = this.$('#longitude');

      // Map onload
      map.on('load', function() {
        var c = map.getCenter();
        marker = L.marker(c).addTo(map);
        $lat.val(c.lat);
        $lon.val(c.lng);
      }.bind(this));

      // Map onclick
      map.on('click', function(e) {
        $lat.val(e.latlng.lat);
        $lon.val(e.latlng.lng);
        marker.setLatLng(e.latlng);
        map.panTo(e.latlng);
      }.bind(this));

      // Cache id fields
      this.fields = ['longitude', 'latitude', 'sensor_name', 'description', 'email', 'arduino'];
      this.fields.forEach(function(field) {
        this['$' + field] = this.$('input[name="' + field + '"]');
      }.bind(this));


      // Add event listeners to latitude/longitude fields
      $lon.keyup($.debounce(function() {
        var latlng = [$lat.val(), $lon.val()];
        map.panTo(latlng);
        marker.setLatLng(latlng);
      }, 300));

      $lat.keyup($.debounce(function() {
        var latlng = [$lat.val(), $lon.val()];
        map.panTo(latlng);
        marker.setLatLng(latlng);
      }, 300));
    },

    notify: function(err) {
      var classToAdd = '';
      if (err) {
        //Red notification
        $('#message-box p').text(err);
        classToAdd = 'notify-fail';
      } else {
        // Green notification
        $('#message-box p').text('Update was successful!');
        classToAdd = 'notify-success';
      }
      $('#message-box').addClass(classToAdd);
      setTimeout(function (){
         $('#message-box').removeClass(classToAdd);
      }, 3000);
    },


    submit: function(e) {
      e.preventDefault();

      //Validate input
      var valid = true;
      this.fields.forEach(function(field) {
        valid = this['$' + field].val().length > 0 && valid;
      }.bind(this));
      // If valid, send a PUT request
      if (valid) {
        var data = {};
        this.fields.forEach(function(field) {
          data[field] = this['$' + field].val();
        }.bind(this));
        data.lat = data.latitude;
        data.lon = data.longitude;
        $.ajax({
          url: Air.api + '/sensors/update/',
          type: 'PUT',
          contentType: 'application/json',
          data: JSON.stringify(data),
          headers: {
            'Authorization':'Token ' + data.arduino
          },
          success: function() {
            this.notify();
            console.log('success!');
          }.bind(this),
          error: function() {
            this.notify('Error updating sensor');
          }.bind(this)
        });
      } else {
        this.notify('Fields not valid');
      }
    },
  });
})();
