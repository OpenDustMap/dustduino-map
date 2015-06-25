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
            var headers = ['Created <span title="Coordinated Universal Time" class="table-unit">(UTC)</span>', 'PM10 <span title="micrograms per cubic meter" class="table-unit">&#181;g/m<sup>3</sup></span>', 'PM10 Count <span title="particles per 0.01 cubic feet" class="table-unit">pt/cf</span>', 'PM2.5 <span title="micrograms per cubic meter" class="table-unit">&#181;g/m<sup>3</sup></span>', 'PM2.5 Count <span title="particles per 0.01 cubic feet" class="table-unit">pt/cf</span>'];

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
