// Generated by IcedCoffeeScript 1.3.3d

Ext.define("HomeSec.profile.Tablet", {
  extend: "Ext.app.Profile",
  config: {
    views: ['MainView'],
    controllers: ['Dispatcher']
  },
  launch: function() {
    Ext.create("HomeSec.view.tablet.MainView");
    console.log("Tablet Profile Launch");
    return this.callParent(arguments);
  },
  isActive: function() {
    return true;
  }
});
