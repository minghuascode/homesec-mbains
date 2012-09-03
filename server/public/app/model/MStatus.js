// Generated by IcedCoffeeScript 1.3.3d

Ext.define("HomeSec.model.MStatus", {
  extend: "Ext.data.Model",
  config: {
    fields: [
      {
        name: "sensorValue",
        type: "int"
      }, {
        name: "sensorName",
        type: "string"
      }, {
        name: "sensorDescription",
        type: "string"
      }, {
        name: "lastTripped",
        type: "string",
        convert: function(value, record) {
          var d;
          if (value != null) {
            d = new Date(value);
            return Ext.Date.format(d, 'M-d, D h:i A');
          } else {
            return null;
          }
        }
      }
    ]
  }
});
