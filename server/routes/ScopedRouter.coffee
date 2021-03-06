Observable = require "../utils/shared/Observable"

class ScopedRouter extends Observable
  
  bindroute: (path, method, handler) ->
    @app[method] path, ()=>
      handler.apply @, arguments
      
module.exports = ScopedRouter
