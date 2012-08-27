Observable = require "./shared/Observable"
sock = require 'socket.io'

net = require "net"
class WebSocketServer extends Observable
  constructor:()->
    super
    @handlers = []
    @io = sock.listen(@server)
    #@io.disable('log')
    @connect @io.sockets, 'connection', @browserConnected
  
  browserConnected: (socket)->
    console.log "Browser Connected"
    
  createHandler: (klass)->
    console.log "creating Handler #{klass}"
    new klass io: @io, sockets: @io.sockets
    
global.exports = module.exports = WebSocketServer