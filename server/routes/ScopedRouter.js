// Generated by IcedCoffeeScript 1.3.3d
var Observable, ScopedRouter,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Observable = require("../utils/shared/Observable");

ScopedRouter = (function(_super) {

  __extends(ScopedRouter, _super);

  function ScopedRouter() {
    return ScopedRouter.__super__.constructor.apply(this, arguments);
  }

  ScopedRouter.prototype.bindroute = function(path, method, handler) {
    var _this = this;
    return this.app[method](path, function() {
      return handler.apply(_this, arguments);
    });
  };

  return ScopedRouter;

})(Observable);

module.exports = ScopedRouter;
