this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/edit.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container edit" id="' +
((__t = ( id )) == null ? '' : __t) +
'">\n  <div class="row">\n    <div class="minimap col-sm-12 col-md-12 col-lg-6 map-padding">\n      <label class="main-label">Click on the map to add your location</label>\n      <div id="minimap" style="position:relative;top:0px;height:400px;" ></div>\n    </div>\n    <div class="col-sm-12 col-md-12 col-lg-6 form-padding">\n      <div class=\'notify\' id="message-box">\n        <p id="notify-message"></p>\n      </div>\n      <label class="main-label">Manage your device </label>\n      <form>\n        <div class="form-group">\n          <label for="latitude">Latitude</label>\n          <input type="text" name="latitude" placeholder="0.0" id="latitude">\n        </div>\n        <div class="form-group">\n          <label for="longitude">Longitude</label>\n          <input type="text" name="longitude" placeholder="0.0" id="longitude">\n        </div>\n        <div class="form-group">\n          <label for="sensor_name">Sensor Name</label>\n          <input type="text" name="sensor_name" placeholder="Enter the name of your device" id="sensor_name">\n        </div>\n        <div class="form-group">\n          <label for="description">Description</label>\n          <input type="text" name="description" placeholder="Enter a description of your device" id="description">\n        </div>\n        <div class="form-group">\n          <label for="email">Email</label>\n          <input type="email" name="email" id="email" placeholder="Enter your email here" />\n        </div>\n        <div class="form-group">\n          <label for="arduino">Arduino Token</label>\n          <input type="text" name="arduino" placeholder="Enter Arduino Token" id="arduino">\n        </div>\n        <input type="submit" class="edit-submit" value="Submit">\n      </form>\n    </div>\n  </div>\n</div>';

}
return __p
};

this["JST"]["app/scripts/templates/overview.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div class="container">\n    <div class="row">\n        <div class="col-lg-6 col-lg-offset-4 content-block">\n            <p id="section-join">' +
((__t = ( overview )) == null ? '' : __t) +
'</p>\n        </div>\n    </div>\n</div>\n\n<div class="banner">\n    <div class="banner-img" role="presentation" style="background: url(' +
((__t = ( banner )) == null ? '' : __t) +
') no-repeat center center; background-size: cover;"></div>\n    <div class="container overlay">\n        <div class="row">\n            <div class="col-lg-6 col-lg-offset-3 inverted" style="opacity: .85">\n                <p class="main-image"><strong>' +
((__t = ( tagline )) == null ? '' : __t) +
'</strong> ' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class="container">\n    <div class="row">\n        <div class="col-lg-6 col-lg-offset-4 content-block2">\n            <p>Particulate matter (PM) is an air pollution term for a mixture of solid particles and liquid droplets found in the air. The pollutant comes in a variety of sizes and can be composed of many types of materials and chemicals. Particles that are small enough to be inhaled have the potential to cause health effects. Of particular concern is a class of particles known as fine particulate matter or PM2.5 that gets deep into the lung.</p>\n            <p>Inhalable particles, particularly fine particles, have the greatest demonstrated impact on human health. Their small size allows them to get deep into the lungs and from there they can reach or trigger inflammation in the lung, blood vessels or the heart, and perhaps other organs. Studies have linked PM exposure to health problems, including some cancers.</p>\n            <p>For more on particulate matter health concerns, see the <a href="http://whqlibdoc.who.int/hq/2006/WHO_SDE_PHE_OEH_06.02_eng.pdf?ua=1">WHO report</a>.</p>\n        </div>\n    </div>\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/report.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="container report">\n    <div class="row align-bottom-container">\n        <div class="col-sm-12 col-lg-10 col-lg-offset-1 pop-chart">\n            <h3 class="sensor-number tooltip-sensor-name">' +
((__t = ( sensor_name )) == null ? '' : __t) +
'</h3>\n\n            ';
 if (description) { ;
__p += '\n            <p class="sensor-location"><strong>Location: </strong>' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n            ';
 } ;
__p += '\n\n            ';
 if (!geocoded) { ;
__p += '\n            <p><strong>Warning: </strong>Location data is missing for this sensor.</p>\n            ';
 } ;
__p += '\n\n            <div class="mask" id="report-chart"></div>\n        </div>\n    </div>\n\n    <div class="row" style="margin-top: 1em;">\n        <div class="co-sm-12 col-lg-10 col-lg-offset-1">\n            <div id="report-table"></div>\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/search.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="container main-input" id="' +
((__t = ( id )) == null ? '' : __t) +
'">\n    <div class="row">\n        <div class="col-sm-12 col-md-12 col-lg-5 col-lg-offset-7">\n            <label>Search for a sensor by name or ID, or locate it on the map</label>\n            <form>\n                <input type="text" class="search-input">\n                <input type="submit" class="search-submit" value="search"></input>\n            </form>\n        </div>\n    </div>\n</div>\n<div class="half-map" id="search-map"></div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/table.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<table class="table-full">\n    <thead><tr>\n        ';
 _.each(headers, function(hed) { ;
__p += '\n            <td>' +
__e( hed ) +
'</td>\n        ';
 }); ;
__p += '\n    </tr></thead>\n    <tbody>\n\n        ';
 _.each(rows, function(row) { ;
__p += '\n        <tr>\n            ';
 _.each(row, function(cell) { ;
__p += '\n                <td>' +
((__t = ( cell )) == null ? '' : __t) +
'</td>\n            ';
 }); ;
__p += '\n        </tr>\n        ';
 }); ;
__p += '\n    </tbody>\n</table>\n';

}
return __p
};

this["JST"]["app/scripts/templates/tooltip.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<div class="map-pop">\n    <div class="row">\n        <div class="col-sm-12 pop-chart">\n            <h3 class="sensor-number">' +
((__t = ( sensor_name )) == null ? '' : __t) +
'</h3>\n\n            <p><a href="#/report/' +
__e( id ) +
'">Generate report</a></p>\n\n            ';
 if (description) { ;
__p += '\n            <p><strong>Location: </strong> ' +
((__t = ( description )) == null ? '' : __t) +
'</p>\n            ';
 } ;
__p += '\n\n            ';
 if (!geocoded) { ;
__p += '\n            <p><strong>Warning: </strong>Location data is missing for this sensor.</p>\n            ';
 } ;
__p += '\n\n            ';
 if (has_last) { ;
__p += '\n            <table class="map-pop-data">\n                <thead>\n                    <tr>\n                        <td>PM 2.5</td>\n                        <td>PM 2.5 count</td>\n                        <td>PM 10</td>\n                        <td>PM 10 count</td>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>' +
((__t = ( last_reading.pm25 )) == null ? '' : __t) +
'</td>\n                        <td>' +
((__t = ( last_reading.pm25count )) == null ? '' : __t) +
'</td>\n                        <td>' +
((__t = ( last_reading.pm10 )) == null ? '' : __t) +
'</td>\n                        <td>' +
((__t = ( last_reading.pm10count )) == null ? '' : __t) +
'</td>\n                    </tr>\n                </tbody>\n            </table>\n\n            ';
 } else { ;
__p += '\n            <p><strong>Warning: </strong>Data from the last hour does not exist. Please ensure sensor is functioning.</p>\n            ';
 } ;
__p += '\n\n        </div>\n    </div>\n</div>\n';

}
return __p
};
/*global Air, $*/
'use strict';

(function() {
  window.Air = {
    api: 'http://opendustmap.herokuapp.com/api/v1',
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {

      $('#header-join').leanModal({ top : 200, overlay : 0.5, closeButton: '.modal-close' });
      $('#signup-btn').on('click', function(e) {
        e.preventDefault();
        var email = $('#signup-email').val();
        if (email.length > 0) { //semi-valid
          $.ajax({
            url: Air.api + '/register/',
            type: 'POST',
            data: 'email=' + email,
              success: function() {
                this.notify();
                console.log('success!');
              }.bind(this),
              error: function(err) {
                this.notify(err);
              }.bind(this)
            });
          }
        }.bind(this));

      $('.modal-close').on('click', function(e) {
        e.preventDefault();
        return false;
      });

      Air.header = new Air.Views.Header({ el: $('#header-options') });

      Air.router = new Air.Routers.App();
      Air.router.$container = $('#air');
      Backbone.history.start();
      },

      notify: function(err) {
        console.log('here');
        var classToAdd = '';
        var messageBoxId = '#notify-message';
        if (err) {
          //Red notification
          $(messageBoxId + ' p').text(JSON.parse(err.responseText).error);
          classToAdd = 'notify-message-fail';
        } else {
          // Green notification
          $(messageBoxId + ' p').text('An email was sent to your address.');
          classToAdd = 'notify-message-success';
        }
        $('#signup-btn').hide();
        $(messageBoxId).addClass(classToAdd);
        setTimeout(function (){
          $(messageBoxId).removeClass(classToAdd);
          $('#signup-btn').show();
        }, 2000);
      },
    };
  })();

  $(document).ready(function () {

    // Throttle the window.resize event to fire after resize is finished.
    var $window = $(window);
    $window.resize(function() {
      if (this.resizeTo) { clearTimeout(this.resizeTo); }        // end of resize; trigger resize event
      this.resizeTo = setTimeout(function() {
        $window.trigger('resizeEnd');
        // also close map popup
        // Air.map.closePopup();
      }, 300);
    });

    Air._getSize = function() {
      var width = $window.width();
      return width > 1400 ? '2400.jpg' :
        width > 600 ? '1200.jpg' : '480.jpg';
    };

    // text object for copy
    var t = {
      en: {
        overview: 'The OpenDustMap project connects makers and electronics hackers with civic-minded citizens and journalists to create better data on air quality. Scroll down to see how &#x261F;.',
        tagline: 'Better data makes better policy.',
        description: 'When citizens create data about their environment, they are better equipped to advocate for more health-conscious emissions policies.',

      },
      sp: {},
    };

    // relative image paths
    var img = {
      path: 'images/',
      overview: 'banner/dustduino_',
    };

    // TODO replace with correct language based on browser location
    Air.t = t.en;
    Air.img = img;

    Air.init();

  });

/*global Air, Backbone, L*/

Air.Routers = Air.Routers || {};
(function () {
    'use strict';

    // array of views to remove
    var views = [];
    function clean() {
        _.each(views, function(view) {
            view.remove();
        });
        views = [];
    }

    Air.Routers.App = Backbone.Router.extend({
        routes: {
            'overview'                          : 'overview',
            'search'                            : 'search',
            'report/:sensor'                    : 'report',
            'manage'                            : 'edit',

            // default route
            '*action'                           : 'reroute'
        },

        // before calling each route's callback,
        // clean up it's views
        execute: function(callback, args) {
            clean();
            this.$container.empty();
            if (callback) {callback.apply(this, args);}
        },

        overview: function() {
            Air.header.select('overview');

            var html = _.template(JST['app/scripts/templates/overview.ejs']({
                name: 'sensor',
                overview: Air.t.overview,
                banner: Air.img.path + Air.img.overview + Air._getSize(),
                tagline: Air.t.tagline,
                description: Air.t.description,
            }));
            this.$container.html(html);
        },


        search: function() {
            Air.header.select('search');

            // Init search and map views, so we show something
            // while the data queries.

            var id = 'sensor-search';
            var html = _.template(JST['app/scripts/templates/search.ejs']({
                id: id
            }));
            this.$container.html(html);

            var sensors = new Air.Collections.Sensors();

            var search = new Air.Views.Search({
                id: id,
                el: $('#' + id),
                collection: sensors
            });

            var map = new Air.Views.Map({
                id: 'search-map',
                collection: sensors
            });

            sensors.fetch({
                reset: true,
                success: function(collection) {
                    console.log(collection);
                }
            });

            views.push(search);
            views.push(map);
        },

        edit: function() {
            // TODO should execute on success of fetch on sensor list
            var id = 'sensor-edit';
            var html = _.template(JST['app/scripts/templates/edit.ejs']({
                id: id
            }));
            this.$container.html(html);

            views.push(new Air.Views.Edit({
                id: id,
                el: $('#' + id)
            }));
        },

        // generate an report for a single sensor's data
        report: function(id) {
            // if no argument, show all sensors for now
            if (id == undefined || isNaN(id))  { this.reroute(); }

            var sensors = new Air.Collections.Sensors();
            sensors.url += id;
            sensors.fetch({
                success: function(collection, resp) {

                    var model = collection.at(0);
                    var html = _.template(JST['app/scripts/templates/report.ejs'](model.attributes));
                    this.$container.html(html);

                    var readings = new Air.Collections.Readings({ id: id });
                    views.push(new Air.Views.Table({
                        el: $('#report-table'),
                        collection: readings
                    }));
                    views.push(new Air.Views.Chart({
                        el: $('#report-chart'),
                        collection: readings,
                        height: 176,
                        resize: true,
                        id: 'report-chart'
                    }));
                    readings.fetch({ reset: true });
                }.bind(this)
            });
        },

        // default catch-all route
        reroute: function() {
            this.navigate('overview', {trigger:true});
        },
    });

})();

/*global Air, Backbone*/

Air.Models = Air.Models || {};

(function () {
    'use strict';
    Air.Models.Reading = Backbone.Model.extend({
        defaults: {
            created: null,
            owner: null,
            pm10: null,
            pm10_reading: null,
            pm25: null,
            pm25_reading: null
        },
    });
})();

/*global Air, Backbone*/

Air.Models = Air.Models || {};

(function () {
    'use strict';


    // collection for multiple sensors
    Air.Models.Sensor = Backbone.Model.extend({
        initialize: function() {

            // If lat/lon are missing, set a sensible default so we can map it,
            // but make sure to point out that it's lacking geo data.
            if (!this.attributes.lat || !this.attributes.lon) {
                this.set('lat', this.defaults.lat)
                this.set('lon', this.defaults.lon)
                this.set('geocoded', false);
            }

            // Similar to location, if there's no last reading then
            // set the defaults to n/a for display, and show that it has no reading.
            if (!this.attributes.last_reading) {
                this.set('last_reading', this.defaults.last_reading);
                this.set('has_last', false);
            }
        },


        defaults: {
            id: null,
            sensor_name: '',

            // Default is the center of Sao Paulo
            lat: -23.6824124,
            lon: -46.5952992,

            address: '',
            serial: null,
            account: null,
            last_reading: {
                pm10: 'n/a',
                pm10count: 'n/a',
                pm25: 'n/a',
                pm25count: 'n/a'
            },

            geocoded: true,
            has_last: true
        }
    });
})();

/*global Air, Backbone*/

Air.Collections = Air.Collections || {};

(function () {
    'use strict';

    // collection for multiple sensors
    Air.Collections.Sensors = Backbone.Collection.extend({
        model: Air.Models.Sensor,
        url: Air.api + '/sensors/',
        parse: function(resp) {
            if (resp.results) {
                return resp.results;
            }
            else return resp
        }
    });

})();

/*global Air, Backbone*/

Air.Collections = Air.Collections || {};

(function () {
    'use strict';

    // collection for multiple sensors
    Air.Collections.Readings = Backbone.Collection.extend({
        model: Air.Models.Reading,
        url:  Air.api + '/readings',
        initialize: function(options) {
            if (options.id) {
                this.url += ('/?sensor_id=' + options.id);
            }
        },
        parse: function(resp) {
            if (resp.results) {
                return resp.results;
            } else return resp;
        }
    });

})();

/*global Air, Backbone, JST*/

Air.Views = Air.Views || {};

(function () {
    'use strict';

    Air.Views.Table = Backbone.View.extend({

        initialize: function(options) {
            this.listenToOnce(this.collection, 'reset', this.render);
        },

        template: JST['app/scripts/templates/table.ejs'],

        render: function() {

            var properties = ['hour_code', 'pm10', 'pm10count', 'pm25', 'pm25count'];
            var headers = ['Created', 'PM 10 reading', 'PM 10 count', 'PM 2.5 reading', 'PM 2.5 count'];

            // fix our headers to show properly formatted dates
            var input = d3.time.format('%Y%m%d%H');
            var output = d3.time.format('%H:00 %d/%m/%y');

            var table = this.collection.map(function(model) {
                return _.map(properties, function(p, i) {
                    if (i === 0) {
                        return output(input.parse(model.get(p)));
                    }
                    return round(model.get(p), 2);
                });
            });

            this.$el.html(this.template({
                headers: headers,
                rows: table
            }));
        },
    });
})();

function round (value, decimals) {
    return isNaN(value) || value === null ? null : Number(Math.round(value+'e'+decimals)+'e-'+decimals);
};

Air.Views = Air.Views || {};
(function () {
    'use strict';
    // just something to switch around our header selection
    Air.Views.Search = Backbone.View.extend({
        events: {
            'submit form': 'submit'
        },

        initialize: function() {
            this.$input = this.$('input[type="text"]');
        },

        submit: function(e) {

        },
    });
})();

/*global Air, Backbone, JST*/

Air.Views = Air.Views || {};

(function () {
    'use strict';

    Air.Views.Map = Backbone.View.extend({

        initialize: function (options) {
            // Listen for server response.
            this.listenToOnce(this.collection, 'reset', this.render);

            // Set internal $
            this.setElement($('#' + options.id));

            // Layer group and map; add layer to map.
            this.layer = L.featureGroup().on('click', this.click.bind(this));
            this.map = L.mapbox.map(options.id, 'devseed.j586d1hp');
            this.layer.addTo(this.map);

            // Cache popup and the graphs that we will draw in them.
            this.popup = L.popup();
            this.popupContent = JST['app/scripts/templates/tooltip.ejs'];
        },

        // TODO currently all markers are one color, unless they have no value,
        // in which case they are deactivated gray.
        //
        // If we want to create some sort of color scale that goes with the
        // pollution value, that would go here.
        color: function(model) {
            if (model.get('has_last')) {
                return '';
            }
            return 'null';
        },

        render: function() {
            // Roughly the default center of Sao Paulo, used as a default.
            var center = {
                lat: -23.6824124,
                lon: -46.5952992
            };

            var getColor = this.color;
            var markers = this.collection.map(function(model) {
                return {
                    id: model.get('id'),
                    lat: model.get('lat') || center.lat,
                    lon: model.get('lon') || center.lon,
                    last: model.get('last_reading').pm25,
                    colorClass: getColor(model)
                }
            });

            var layer = this.layer;
            _.each(markers, function(marker) {
                var iconMarker = L.marker([marker.lat, marker.lon], {
                    icon: L.divIcon({
                        className: 'circle-marker ' + marker.colorClass,
                        html: marker.last,
                        iconSize: [48, 48]
                    })
                });
                iconMarker._code = marker.id;
                iconMarker.addTo(layer);
            });

            this.map.fitBounds(_.map(markers, function(marker) {
                return [marker.lat, marker.lon]
            }));

            return this;
        },

        click: function(e) {
            var id = e.layer._code;
            var model = this.collection.find(function(model) {
                return model.get('id') === id;
            });
            if (!model) {
                return false;
            }
            this.popup.setLatLng([model.get('lat'), model.get('lon')])
                .setContent(this.popupContent(model.attributes))
                .openOn(this.map);
        }
    });
})();

/*global Air, Backbone, JST*/

Air.Views = Air.Views || {};

(function () {
    'use strict';

    // simple bar chart taking two sets of variables
    Air.Views.Chart = Backbone.View.extend({

        events: {},
        initialize: function (options) {

            this.height = options.height || 120;

            if (options.resize) {
                $(window).bind('resizeEnd', $.proxy(this.resizeHandler, this));
            }

            if (options.handleErrors) {
                this.listenTo(this.collection, 'error', this.errorHandler);
            }

            this.listenToOnce(this.collection, 'reset', this.render);
        },

        render: function () {

            var hours = this.collection.length,
                days = hours / 24,
                margin = this.margin = [10, 15, 45, 15],
                width = this.width = this.$el.width() * days - margin[1] - margin[3],
                height = this.height - margin[0] - margin[2];

            var input = d3.time.format('%Y%m%d%H');
            var output = d3.time.format('%H:00 %d/%m/%y');

            this.$el.css('height', height + margin[0] + margin[2]);

            //*********** drag **************
            this.pos = 0;
            this.nextpos = 0;
            this.limit = -width / days * (days - 1) - 50;
            var drag = d3.behavior.drag()
                .on('drag', this.dragmove.bind(this))
                .on('dragend', this.dragend.bind(this));

            //*********** init **************
            var base = this.base = d3.select('#' + this.id).append('svg:svg')
                .attr('width', width + margin[1] + margin[3])
                .attr('height', height + margin[0] + margin[2])
                .attr('class', 'slider drag')
                .call(drag);

            var svg = base.append('g')
                .attr('class', 'bar-chart')
                .attr('transform', 'translate(' + margin[3] + ',' + margin[0] + ')')

            var valid = this.collection.pluck('pm10').concat(this.collection.pluck('pm25'));

            var max = d3.max(valid);

            var x = this.x = d3.scale.linear()
                .domain([0, hours])
                .range([width, 0]);

            var y = d3.scale.linear()
                .range([height, 0])
                .domain([0, max]);

            var dblWidth = x(0) - x(1),
                barWidth = Math.floor(dblWidth / 2) - 2;

            if (barWidth < 0) barWidth = Math.floor(dblWidth / 2) || 1;

            //*********** axis **************

            var ticks = [];
            this.collection.each(function(model, i) {
                var hour = model.get('hour_code');
                if (hour.slice(8) % 6 === 0) {
                    ticks.push({hour: output(input.parse(hour)) , index: i});
                }
            });

            this.xAxis = base.append('g')
                .attr('class', 'x axis')
                .attr('transform', 'translate(' + margin[3] + ',' + (height + margin[0]) + ')')
                .selectAll('.tick')
                .data(ticks)
              .enter().append('g')
                .attr('transform', function(d) {
                    return 'translate(' + x(d.index) + ',32)'
                })

            this.xAxis.append('text')
                .attr('class', 'tick')
                .attr('text-anchor', 'middle')
                .text(function(d) { return d.hour });

            this.xAxis.append('line')
                .attr('x1', 0)
                .attr('x2', 0)
                .attr('y1', -25)
                .attr('y2', -15)
                .style('stroke-width', 1)
                .style('stroke', '#666');

            /*
            $('#hourly-max').html(Math.ceil(max) + ' &ndash;');
            $('#hourly-mid').html(Math.ceil(max / 2) + ' &ndash;');
            $('#hourly-min').html('0 &ndash;');
            */

            //*********** tips **************

            var template = _.template('<h3><%= date %></h3><p>PM 2.5: <%= pm25 %><br />PM 10: <%= pm10 %></p>');

            var tip = d3.tip()
                .attr('class', 'd3-tip')
                .html(function(model) {
                    return template({
                        date: output(input.parse(model.get('hour_code'))),
                        pm25: d3.round(model.get('pm25'), 2),
                        pm10: d3.round(model.get('pm10'), 2),
                    });
                });

            svg.call(tip);

            //*********** bars **************

            var pm25 = svg.selectAll('.pm25')
                .data(this.collection.models)
              .enter().append('rect')
                .attr('class', 'pm25')
                .attr('x', function(d, i) { return x(i) - barWidth })
                .attr('y', height)
                .attr('width', barWidth)
                .attr('height', 0)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);

            var pm10 = svg.selectAll('.pm10')
                .data(this.collection.models)
              .enter().append('rect')
                .attr('class', 'pm10')
                .attr('x', function(d, i) { return x(i) })
                .attr('y', height)
                .attr('width', barWidth)
                .attr('height', 0)
                .on('mouseover', tip.show)
                .on('mouseout', tip.hide);

            pm25.transition()
                .duration(200)
                .delay(function(d, i) { return (hours - i) * 10 })
                .attr('y', function(d) { return y(d.get('pm25'))})
                .attr('height', function(d) { return height - y(d.get('pm25'))});

            pm10.transition()
                .duration(200)
                .delay(function(d, i) { return (hours - i) * 10 })
                .attr('y', function(d) { return y(d.get('pm10'))})
                .attr('height', function(d) { return height - y(d.get('pm10'))});

            this.bars = [pm25, pm10];
        },

        dragmove: function() {
            this.pos -= d3.event.dx;
            if (this.pos < this.limit || this.pos > 20) {
                this.bounceBack = true;
            }
            else {
                this.lastpos = this.pos;
            }
            this.base.style('right', this.pos + 'px');
        },

        dragend: function() {
            if (this.bounceBack) {
                this.bounceBack = false;
                this.pos = this.lastpos;
                this.base.transition()
                    .duration(200)
                    .style('right', this.pos + 'px')
            }
        },

        resizeHandler: function() {
            this.$el.fadeOut(150, function() {
                this.resize();
                this.$el.fadeIn(250);
            }.bind(this));
        },

        errorHandler: function(collection, response, options) {
            console.log('model error', collection, response, options);
        },

        resize: function() {

            // if it's not showing, don't bother
            if (this.$el.is(':visible')) return;

            var days = this.collection.length / 24,
                width = this.$el.width() * days;

            this.x.range([0, width]);

            var x = this.x,
                dblWidth = x(2) - x(1),
                barWidth = Math.floor(dblWidth / 2) - 2;

            if (barWidth < 0) barWidth = Math.floor(dblWidth / 2) || 1;

            this.base//.transition()
                //.delay(100)
                .attr('width', width);

            this.bars[0]//.transition()
                //.duration(100)
                .attr('x', function(d, i) { return x(i) - barWidth })
                .attr('width', barWidth);

            this.bars[1]//.transition()
                //.duration(100)
                .attr('x', function (d, i) { return x(i) })
                .attr('width', barWidth);

            this.xAxis
                .attr('transform', function(d) {
                    return 'translate(' + x(d.index) + ',32)'
                })

            // calculate roughly where we were before
            this.pos = width * this.pos / this.width;
            this.base.style('right', this.pos + 'px');

            this.limit = -width / days * (days - 1) - 50;
            this.width = width;
        },

    });

})();

Air.Views = Air.Views || {};
(function () {
    'use strict';
    // just something to switch around our header selection
    Air.Views.Header = Backbone.View.extend({
        select: function(id) {
            this.$('.active').removeClass('active');
            this.$('#header-' + id).addClass('active');
        },
    });
})();

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
