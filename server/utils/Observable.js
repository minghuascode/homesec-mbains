// Generated by IcedCoffeeScript 1.3.3d
(function() {
  var Observable;

  Observable = (function() {

    function Observable() {}

    Observable.prototype.connect = function(onObj, signal, fn) {
      var extraArgs,
        _this = this;
      extraArgs = [].splice.call(arguments, 3);
      return onObj.on(signal, function() {
        var argsList;
        argsList = [].splice.call(arguments, 0);
        argsList = argsList.concat(extraArgs);
        return fn.apply(_this, argsList);
      });
    };

    return Observable;

  })();

  global.exports = module.exports = Observable;

}).call(this);
