/**
 * @fileoverview gRPC-Web generated client stub for com.example.services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.example = {};
proto.com.example.services = require('./Greeting_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.services.MyServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.com.example.services.MyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.example.services.GreetingRequest,
 *   !proto.com.example.services.GreetingResponse>}
 */
const methodDescriptor_MyService_greeting = new grpc.web.MethodDescriptor(
  '/com.example.services.MyService/greeting',
  grpc.web.MethodType.UNARY,
  proto.com.example.services.GreetingRequest,
  proto.com.example.services.GreetingResponse,
  /**
   * @param {!proto.com.example.services.GreetingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.example.services.GreetingResponse.deserializeBinary
);


/**
 * @param {!proto.com.example.services.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.com.example.services.GreetingResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.example.services.GreetingResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.example.services.MyServiceClient.prototype.greeting =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.example.services.MyService/greeting',
      request,
      metadata || {},
      methodDescriptor_MyService_greeting,
      callback);
};


/**
 * @param {!proto.com.example.services.GreetingRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.example.services.GreetingResponse>}
 *     Promise that resolves to the response
 */
proto.com.example.services.MyServicePromiseClient.prototype.greeting =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.example.services.MyService/greeting',
      request,
      metadata || {},
      methodDescriptor_MyService_greeting);
};


module.exports = proto.com.example.services;

