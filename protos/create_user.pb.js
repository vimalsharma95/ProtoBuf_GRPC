/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.banking = (function() {

    /**
     * Namespace banking.
     * @exports banking
     * @namespace
     */
    var banking = {};

    banking.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof banking
         * @interface ICreateUserRequest
         * @property {string|null} [firstName] CreateUserRequest firstName
         * @property {string|null} [lastName] CreateUserRequest lastName
         * @property {string|null} [email] CreateUserRequest email
         * @property {string|null} [password] CreateUserRequest password
         * @property {string|null} [phoneNumber] CreateUserRequest phoneNumber
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof banking
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {banking.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest firstName.
         * @member {string} firstName
         * @memberof banking.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.firstName = "";

        /**
         * CreateUserRequest lastName.
         * @member {string} lastName
         * @memberof banking.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.lastName = "";

        /**
         * CreateUserRequest email.
         * @member {string} email
         * @memberof banking.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.email = "";

        /**
         * CreateUserRequest password.
         * @member {string} password
         * @memberof banking.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.password = "";

        /**
         * CreateUserRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof banking.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.phoneNumber = "";

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @function create
         * @memberof banking.CreateUserRequest
         * @static
         * @param {banking.ICreateUserRequest=} [properties] Properties to set
         * @returns {banking.CreateUserRequest} CreateUserRequest instance
         */
        CreateUserRequest.create = function create(properties) {
            return new CreateUserRequest(properties);
        };

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link banking.CreateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof banking.CreateUserRequest
         * @static
         * @param {banking.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
            if (message.lastName != null && Object.hasOwnProperty.call(message, "lastName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.password);
            if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phoneNumber);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link banking.CreateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.CreateUserRequest
         * @static
         * @param {banking.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof banking.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.CreateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.firstName = reader.string();
                        break;
                    }
                case 2: {
                        message.lastName = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.password = reader.string();
                        break;
                    }
                case 5: {
                        message.phoneNumber = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequest message.
         * @function verify
         * @memberof banking.CreateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            return null;
        };

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.CreateUserRequest)
                return object;
            var message = new $root.banking.CreateUserRequest();
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.email != null)
                message.email = String(object.email);
            if (object.password != null)
                message.password = String(object.password);
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.CreateUserRequest
         * @static
         * @param {banking.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.firstName = "";
                object.lastName = "";
                object.email = "";
                object.password = "";
                object.phoneNumber = "";
            }
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            return object;
        };

        /**
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof banking.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateUserRequest
         * @function getTypeUrl
         * @memberof banking.CreateUserRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateUserRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.CreateUserRequest";
        };

        return CreateUserRequest;
    })();

    banking.CreateUserResponse = (function() {

        /**
         * Properties of a CreateUserResponse.
         * @memberof banking
         * @interface ICreateUserResponse
         * @property {boolean|null} [success] CreateUserResponse success
         * @property {string|null} [message] CreateUserResponse message
         */

        /**
         * Constructs a new CreateUserResponse.
         * @memberof banking
         * @classdesc Represents a CreateUserResponse.
         * @implements ICreateUserResponse
         * @constructor
         * @param {banking.ICreateUserResponse=} [properties] Properties to set
         */
        function CreateUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserResponse success.
         * @member {boolean} success
         * @memberof banking.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.success = false;

        /**
         * CreateUserResponse message.
         * @member {string} message
         * @memberof banking.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.message = "";

        /**
         * Creates a new CreateUserResponse instance using the specified properties.
         * @function create
         * @memberof banking.CreateUserResponse
         * @static
         * @param {banking.ICreateUserResponse=} [properties] Properties to set
         * @returns {banking.CreateUserResponse} CreateUserResponse instance
         */
        CreateUserResponse.create = function create(properties) {
            return new CreateUserResponse(properties);
        };

        /**
         * Encodes the specified CreateUserResponse message. Does not implicitly {@link banking.CreateUserResponse.verify|verify} messages.
         * @function encode
         * @memberof banking.CreateUserResponse
         * @static
         * @param {banking.ICreateUserResponse} message CreateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            return writer;
        };

        /**
         * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link banking.CreateUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.CreateUserResponse
         * @static
         * @param {banking.ICreateUserResponse} message CreateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof banking.CreateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.CreateUserResponse} CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.CreateUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.success = reader.bool();
                        break;
                    }
                case 2: {
                        message.message = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.CreateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.CreateUserResponse} CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserResponse message.
         * @function verify
         * @memberof banking.CreateUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            return null;
        };

        /**
         * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.CreateUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.CreateUserResponse} CreateUserResponse
         */
        CreateUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.CreateUserResponse)
                return object;
            var message = new $root.banking.CreateUserResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.CreateUserResponse
         * @static
         * @param {banking.CreateUserResponse} message CreateUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            return object;
        };

        /**
         * Converts this CreateUserResponse to JSON.
         * @function toJSON
         * @memberof banking.CreateUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CreateUserResponse
         * @function getTypeUrl
         * @memberof banking.CreateUserResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CreateUserResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.CreateUserResponse";
        };

        return CreateUserResponse;
    })();

    banking.UserService = (function() {

        /**
         * Constructs a new UserService service.
         * @memberof banking
         * @classdesc Represents a UserService
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function UserService(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (UserService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = UserService;

        /**
         * Creates new UserService service using the specified rpc implementation.
         * @function create
         * @memberof banking.UserService
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {UserService} RPC service. Useful where requests and/or responses are streamed.
         */
        UserService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link banking.UserService#createUser}.
         * @memberof banking.UserService
         * @typedef CreateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {banking.CreateUserResponse} [response] CreateUserResponse
         */

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof banking.UserService
         * @instance
         * @param {banking.ICreateUserRequest} request CreateUserRequest message or plain object
         * @param {banking.UserService.CreateUserCallback} callback Node-style callback called with the error, if any, and CreateUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.createUser = function createUser(request, callback) {
            return this.rpcCall(createUser, $root.banking.CreateUserRequest, $root.banking.CreateUserResponse, request, callback);
        }, "name", { value: "CreateUser" });

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof banking.UserService
         * @instance
         * @param {banking.ICreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Promise<banking.CreateUserResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    return banking;
})();

module.exports = $root;
