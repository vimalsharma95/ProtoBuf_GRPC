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

    banking.DepositRequest = (function() {

        /**
         * Properties of a DepositRequest.
         * @memberof banking
         * @interface IDepositRequest
         * @property {string|null} [userId] DepositRequest userId
         * @property {number|null} [amount] DepositRequest amount
         */

        /**
         * Constructs a new DepositRequest.
         * @memberof banking
         * @classdesc Represents a DepositRequest.
         * @implements IDepositRequest
         * @constructor
         * @param {banking.IDepositRequest=} [properties] Properties to set
         */
        function DepositRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DepositRequest userId.
         * @member {string} userId
         * @memberof banking.DepositRequest
         * @instance
         */
        DepositRequest.prototype.userId = "";

        /**
         * DepositRequest amount.
         * @member {number} amount
         * @memberof banking.DepositRequest
         * @instance
         */
        DepositRequest.prototype.amount = 0;

        /**
         * Creates a new DepositRequest instance using the specified properties.
         * @function create
         * @memberof banking.DepositRequest
         * @static
         * @param {banking.IDepositRequest=} [properties] Properties to set
         * @returns {banking.DepositRequest} DepositRequest instance
         */
        DepositRequest.create = function create(properties) {
            return new DepositRequest(properties);
        };

        /**
         * Encodes the specified DepositRequest message. Does not implicitly {@link banking.DepositRequest.verify|verify} messages.
         * @function encode
         * @memberof banking.DepositRequest
         * @static
         * @param {banking.IDepositRequest} message DepositRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified DepositRequest message, length delimited. Does not implicitly {@link banking.DepositRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.DepositRequest
         * @static
         * @param {banking.IDepositRequest} message DepositRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DepositRequest message from the specified reader or buffer.
         * @function decode
         * @memberof banking.DepositRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.DepositRequest} DepositRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.DepositRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.double();
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
         * Decodes a DepositRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.DepositRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.DepositRequest} DepositRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DepositRequest message.
         * @function verify
         * @memberof banking.DepositRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepositRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a DepositRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.DepositRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.DepositRequest} DepositRequest
         */
        DepositRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.DepositRequest)
                return object;
            var message = new $root.banking.DepositRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a DepositRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.DepositRequest
         * @static
         * @param {banking.DepositRequest} message DepositRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepositRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this DepositRequest to JSON.
         * @function toJSON
         * @memberof banking.DepositRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepositRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DepositRequest
         * @function getTypeUrl
         * @memberof banking.DepositRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DepositRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.DepositRequest";
        };

        return DepositRequest;
    })();

    banking.DepositResponse = (function() {

        /**
         * Properties of a DepositResponse.
         * @memberof banking
         * @interface IDepositResponse
         * @property {boolean|null} [success] DepositResponse success
         * @property {string|null} [message] DepositResponse message
         * @property {number|null} [newBalance] DepositResponse newBalance
         */

        /**
         * Constructs a new DepositResponse.
         * @memberof banking
         * @classdesc Represents a DepositResponse.
         * @implements IDepositResponse
         * @constructor
         * @param {banking.IDepositResponse=} [properties] Properties to set
         */
        function DepositResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DepositResponse success.
         * @member {boolean} success
         * @memberof banking.DepositResponse
         * @instance
         */
        DepositResponse.prototype.success = false;

        /**
         * DepositResponse message.
         * @member {string} message
         * @memberof banking.DepositResponse
         * @instance
         */
        DepositResponse.prototype.message = "";

        /**
         * DepositResponse newBalance.
         * @member {number} newBalance
         * @memberof banking.DepositResponse
         * @instance
         */
        DepositResponse.prototype.newBalance = 0;

        /**
         * Creates a new DepositResponse instance using the specified properties.
         * @function create
         * @memberof banking.DepositResponse
         * @static
         * @param {banking.IDepositResponse=} [properties] Properties to set
         * @returns {banking.DepositResponse} DepositResponse instance
         */
        DepositResponse.create = function create(properties) {
            return new DepositResponse(properties);
        };

        /**
         * Encodes the specified DepositResponse message. Does not implicitly {@link banking.DepositResponse.verify|verify} messages.
         * @function encode
         * @memberof banking.DepositResponse
         * @static
         * @param {banking.IDepositResponse} message DepositResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.newBalance != null && Object.hasOwnProperty.call(message, "newBalance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.newBalance);
            return writer;
        };

        /**
         * Encodes the specified DepositResponse message, length delimited. Does not implicitly {@link banking.DepositResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.DepositResponse
         * @static
         * @param {banking.IDepositResponse} message DepositResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DepositResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DepositResponse message from the specified reader or buffer.
         * @function decode
         * @memberof banking.DepositResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.DepositResponse} DepositResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.DepositResponse();
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
                case 3: {
                        message.newBalance = reader.double();
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
         * Decodes a DepositResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.DepositResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.DepositResponse} DepositResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DepositResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DepositResponse message.
         * @function verify
         * @memberof banking.DepositResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DepositResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                if (typeof message.newBalance !== "number")
                    return "newBalance: number expected";
            return null;
        };

        /**
         * Creates a DepositResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.DepositResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.DepositResponse} DepositResponse
         */
        DepositResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.DepositResponse)
                return object;
            var message = new $root.banking.DepositResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.newBalance != null)
                message.newBalance = Number(object.newBalance);
            return message;
        };

        /**
         * Creates a plain object from a DepositResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.DepositResponse
         * @static
         * @param {banking.DepositResponse} message DepositResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DepositResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.newBalance = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                object.newBalance = options.json && !isFinite(message.newBalance) ? String(message.newBalance) : message.newBalance;
            return object;
        };

        /**
         * Converts this DepositResponse to JSON.
         * @function toJSON
         * @memberof banking.DepositResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DepositResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DepositResponse
         * @function getTypeUrl
         * @memberof banking.DepositResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DepositResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.DepositResponse";
        };

        return DepositResponse;
    })();

    banking.WithdrawRequest = (function() {

        /**
         * Properties of a WithdrawRequest.
         * @memberof banking
         * @interface IWithdrawRequest
         * @property {string|null} [userId] WithdrawRequest userId
         * @property {number|null} [amount] WithdrawRequest amount
         */

        /**
         * Constructs a new WithdrawRequest.
         * @memberof banking
         * @classdesc Represents a WithdrawRequest.
         * @implements IWithdrawRequest
         * @constructor
         * @param {banking.IWithdrawRequest=} [properties] Properties to set
         */
        function WithdrawRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WithdrawRequest userId.
         * @member {string} userId
         * @memberof banking.WithdrawRequest
         * @instance
         */
        WithdrawRequest.prototype.userId = "";

        /**
         * WithdrawRequest amount.
         * @member {number} amount
         * @memberof banking.WithdrawRequest
         * @instance
         */
        WithdrawRequest.prototype.amount = 0;

        /**
         * Creates a new WithdrawRequest instance using the specified properties.
         * @function create
         * @memberof banking.WithdrawRequest
         * @static
         * @param {banking.IWithdrawRequest=} [properties] Properties to set
         * @returns {banking.WithdrawRequest} WithdrawRequest instance
         */
        WithdrawRequest.create = function create(properties) {
            return new WithdrawRequest(properties);
        };

        /**
         * Encodes the specified WithdrawRequest message. Does not implicitly {@link banking.WithdrawRequest.verify|verify} messages.
         * @function encode
         * @memberof banking.WithdrawRequest
         * @static
         * @param {banking.IWithdrawRequest} message WithdrawRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified WithdrawRequest message, length delimited. Does not implicitly {@link banking.WithdrawRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.WithdrawRequest
         * @static
         * @param {banking.IWithdrawRequest} message WithdrawRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WithdrawRequest message from the specified reader or buffer.
         * @function decode
         * @memberof banking.WithdrawRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.WithdrawRequest} WithdrawRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.WithdrawRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
                        break;
                    }
                case 2: {
                        message.amount = reader.double();
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
         * Decodes a WithdrawRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.WithdrawRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.WithdrawRequest} WithdrawRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WithdrawRequest message.
         * @function verify
         * @memberof banking.WithdrawRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WithdrawRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a WithdrawRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.WithdrawRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.WithdrawRequest} WithdrawRequest
         */
        WithdrawRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.WithdrawRequest)
                return object;
            var message = new $root.banking.WithdrawRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a WithdrawRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.WithdrawRequest
         * @static
         * @param {banking.WithdrawRequest} message WithdrawRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WithdrawRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                object.amount = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this WithdrawRequest to JSON.
         * @function toJSON
         * @memberof banking.WithdrawRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WithdrawRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WithdrawRequest
         * @function getTypeUrl
         * @memberof banking.WithdrawRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WithdrawRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.WithdrawRequest";
        };

        return WithdrawRequest;
    })();

    banking.WithdrawResponse = (function() {

        /**
         * Properties of a WithdrawResponse.
         * @memberof banking
         * @interface IWithdrawResponse
         * @property {boolean|null} [success] WithdrawResponse success
         * @property {string|null} [message] WithdrawResponse message
         * @property {number|null} [newBalance] WithdrawResponse newBalance
         */

        /**
         * Constructs a new WithdrawResponse.
         * @memberof banking
         * @classdesc Represents a WithdrawResponse.
         * @implements IWithdrawResponse
         * @constructor
         * @param {banking.IWithdrawResponse=} [properties] Properties to set
         */
        function WithdrawResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * WithdrawResponse success.
         * @member {boolean} success
         * @memberof banking.WithdrawResponse
         * @instance
         */
        WithdrawResponse.prototype.success = false;

        /**
         * WithdrawResponse message.
         * @member {string} message
         * @memberof banking.WithdrawResponse
         * @instance
         */
        WithdrawResponse.prototype.message = "";

        /**
         * WithdrawResponse newBalance.
         * @member {number} newBalance
         * @memberof banking.WithdrawResponse
         * @instance
         */
        WithdrawResponse.prototype.newBalance = 0;

        /**
         * Creates a new WithdrawResponse instance using the specified properties.
         * @function create
         * @memberof banking.WithdrawResponse
         * @static
         * @param {banking.IWithdrawResponse=} [properties] Properties to set
         * @returns {banking.WithdrawResponse} WithdrawResponse instance
         */
        WithdrawResponse.create = function create(properties) {
            return new WithdrawResponse(properties);
        };

        /**
         * Encodes the specified WithdrawResponse message. Does not implicitly {@link banking.WithdrawResponse.verify|verify} messages.
         * @function encode
         * @memberof banking.WithdrawResponse
         * @static
         * @param {banking.IWithdrawResponse} message WithdrawResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.newBalance != null && Object.hasOwnProperty.call(message, "newBalance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.newBalance);
            return writer;
        };

        /**
         * Encodes the specified WithdrawResponse message, length delimited. Does not implicitly {@link banking.WithdrawResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.WithdrawResponse
         * @static
         * @param {banking.IWithdrawResponse} message WithdrawResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        WithdrawResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a WithdrawResponse message from the specified reader or buffer.
         * @function decode
         * @memberof banking.WithdrawResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.WithdrawResponse} WithdrawResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.WithdrawResponse();
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
                case 3: {
                        message.newBalance = reader.double();
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
         * Decodes a WithdrawResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.WithdrawResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.WithdrawResponse} WithdrawResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        WithdrawResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a WithdrawResponse message.
         * @function verify
         * @memberof banking.WithdrawResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        WithdrawResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                if (typeof message.newBalance !== "number")
                    return "newBalance: number expected";
            return null;
        };

        /**
         * Creates a WithdrawResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.WithdrawResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.WithdrawResponse} WithdrawResponse
         */
        WithdrawResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.WithdrawResponse)
                return object;
            var message = new $root.banking.WithdrawResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.newBalance != null)
                message.newBalance = Number(object.newBalance);
            return message;
        };

        /**
         * Creates a plain object from a WithdrawResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.WithdrawResponse
         * @static
         * @param {banking.WithdrawResponse} message WithdrawResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        WithdrawResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.newBalance = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.newBalance != null && message.hasOwnProperty("newBalance"))
                object.newBalance = options.json && !isFinite(message.newBalance) ? String(message.newBalance) : message.newBalance;
            return object;
        };

        /**
         * Converts this WithdrawResponse to JSON.
         * @function toJSON
         * @memberof banking.WithdrawResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        WithdrawResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for WithdrawResponse
         * @function getTypeUrl
         * @memberof banking.WithdrawResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        WithdrawResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.WithdrawResponse";
        };

        return WithdrawResponse;
    })();

    banking.GetBalanceRequest = (function() {

        /**
         * Properties of a GetBalanceRequest.
         * @memberof banking
         * @interface IGetBalanceRequest
         * @property {string|null} [userId] GetBalanceRequest userId
         */

        /**
         * Constructs a new GetBalanceRequest.
         * @memberof banking
         * @classdesc Represents a GetBalanceRequest.
         * @implements IGetBalanceRequest
         * @constructor
         * @param {banking.IGetBalanceRequest=} [properties] Properties to set
         */
        function GetBalanceRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBalanceRequest userId.
         * @member {string} userId
         * @memberof banking.GetBalanceRequest
         * @instance
         */
        GetBalanceRequest.prototype.userId = "";

        /**
         * Creates a new GetBalanceRequest instance using the specified properties.
         * @function create
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {banking.IGetBalanceRequest=} [properties] Properties to set
         * @returns {banking.GetBalanceRequest} GetBalanceRequest instance
         */
        GetBalanceRequest.create = function create(properties) {
            return new GetBalanceRequest(properties);
        };

        /**
         * Encodes the specified GetBalanceRequest message. Does not implicitly {@link banking.GetBalanceRequest.verify|verify} messages.
         * @function encode
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {banking.IGetBalanceRequest} message GetBalanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified GetBalanceRequest message, length delimited. Does not implicitly {@link banking.GetBalanceRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {banking.IGetBalanceRequest} message GetBalanceRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalanceRequest message from the specified reader or buffer.
         * @function decode
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.GetBalanceRequest} GetBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.GetBalanceRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.userId = reader.string();
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
         * Decodes a GetBalanceRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.GetBalanceRequest} GetBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalanceRequest message.
         * @function verify
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalanceRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a GetBalanceRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.GetBalanceRequest} GetBalanceRequest
         */
        GetBalanceRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.GetBalanceRequest)
                return object;
            var message = new $root.banking.GetBalanceRequest();
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a GetBalanceRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {banking.GetBalanceRequest} message GetBalanceRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalanceRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userId = "";
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this GetBalanceRequest to JSON.
         * @function toJSON
         * @memberof banking.GetBalanceRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalanceRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetBalanceRequest
         * @function getTypeUrl
         * @memberof banking.GetBalanceRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetBalanceRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.GetBalanceRequest";
        };

        return GetBalanceRequest;
    })();

    banking.GetBalanceResponse = (function() {

        /**
         * Properties of a GetBalanceResponse.
         * @memberof banking
         * @interface IGetBalanceResponse
         * @property {boolean|null} [success] GetBalanceResponse success
         * @property {string|null} [message] GetBalanceResponse message
         * @property {number|null} [balance] GetBalanceResponse balance
         */

        /**
         * Constructs a new GetBalanceResponse.
         * @memberof banking
         * @classdesc Represents a GetBalanceResponse.
         * @implements IGetBalanceResponse
         * @constructor
         * @param {banking.IGetBalanceResponse=} [properties] Properties to set
         */
        function GetBalanceResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetBalanceResponse success.
         * @member {boolean} success
         * @memberof banking.GetBalanceResponse
         * @instance
         */
        GetBalanceResponse.prototype.success = false;

        /**
         * GetBalanceResponse message.
         * @member {string} message
         * @memberof banking.GetBalanceResponse
         * @instance
         */
        GetBalanceResponse.prototype.message = "";

        /**
         * GetBalanceResponse balance.
         * @member {number} balance
         * @memberof banking.GetBalanceResponse
         * @instance
         */
        GetBalanceResponse.prototype.balance = 0;

        /**
         * Creates a new GetBalanceResponse instance using the specified properties.
         * @function create
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {banking.IGetBalanceResponse=} [properties] Properties to set
         * @returns {banking.GetBalanceResponse} GetBalanceResponse instance
         */
        GetBalanceResponse.create = function create(properties) {
            return new GetBalanceResponse(properties);
        };

        /**
         * Encodes the specified GetBalanceResponse message. Does not implicitly {@link banking.GetBalanceResponse.verify|verify} messages.
         * @function encode
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {banking.IGetBalanceResponse} message GetBalanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.balance);
            return writer;
        };

        /**
         * Encodes the specified GetBalanceResponse message, length delimited. Does not implicitly {@link banking.GetBalanceResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {banking.IGetBalanceResponse} message GetBalanceResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetBalanceResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetBalanceResponse message from the specified reader or buffer.
         * @function decode
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.GetBalanceResponse} GetBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.GetBalanceResponse();
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
                case 3: {
                        message.balance = reader.double();
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
         * Decodes a GetBalanceResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.GetBalanceResponse} GetBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetBalanceResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetBalanceResponse message.
         * @function verify
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetBalanceResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.balance != null && message.hasOwnProperty("balance"))
                if (typeof message.balance !== "number")
                    return "balance: number expected";
            return null;
        };

        /**
         * Creates a GetBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.GetBalanceResponse} GetBalanceResponse
         */
        GetBalanceResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.GetBalanceResponse)
                return object;
            var message = new $root.banking.GetBalanceResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.balance != null)
                message.balance = Number(object.balance);
            return message;
        };

        /**
         * Creates a plain object from a GetBalanceResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {banking.GetBalanceResponse} message GetBalanceResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetBalanceResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.balance = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.balance != null && message.hasOwnProperty("balance"))
                object.balance = options.json && !isFinite(message.balance) ? String(message.balance) : message.balance;
            return object;
        };

        /**
         * Converts this GetBalanceResponse to JSON.
         * @function toJSON
         * @memberof banking.GetBalanceResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetBalanceResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for GetBalanceResponse
         * @function getTypeUrl
         * @memberof banking.GetBalanceResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        GetBalanceResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.GetBalanceResponse";
        };

        return GetBalanceResponse;
    })();

    banking.SendRequest = (function() {

        /**
         * Properties of a SendRequest.
         * @memberof banking
         * @interface ISendRequest
         * @property {string|null} [fromUserId] SendRequest fromUserId
         * @property {string|null} [toUserId] SendRequest toUserId
         * @property {number|null} [amount] SendRequest amount
         */

        /**
         * Constructs a new SendRequest.
         * @memberof banking
         * @classdesc Represents a SendRequest.
         * @implements ISendRequest
         * @constructor
         * @param {banking.ISendRequest=} [properties] Properties to set
         */
        function SendRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendRequest fromUserId.
         * @member {string} fromUserId
         * @memberof banking.SendRequest
         * @instance
         */
        SendRequest.prototype.fromUserId = "";

        /**
         * SendRequest toUserId.
         * @member {string} toUserId
         * @memberof banking.SendRequest
         * @instance
         */
        SendRequest.prototype.toUserId = "";

        /**
         * SendRequest amount.
         * @member {number} amount
         * @memberof banking.SendRequest
         * @instance
         */
        SendRequest.prototype.amount = 0;

        /**
         * Creates a new SendRequest instance using the specified properties.
         * @function create
         * @memberof banking.SendRequest
         * @static
         * @param {banking.ISendRequest=} [properties] Properties to set
         * @returns {banking.SendRequest} SendRequest instance
         */
        SendRequest.create = function create(properties) {
            return new SendRequest(properties);
        };

        /**
         * Encodes the specified SendRequest message. Does not implicitly {@link banking.SendRequest.verify|verify} messages.
         * @function encode
         * @memberof banking.SendRequest
         * @static
         * @param {banking.ISendRequest} message SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.fromUserId != null && Object.hasOwnProperty.call(message, "fromUserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.fromUserId);
            if (message.toUserId != null && Object.hasOwnProperty.call(message, "toUserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.toUserId);
            if (message.amount != null && Object.hasOwnProperty.call(message, "amount"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.amount);
            return writer;
        };

        /**
         * Encodes the specified SendRequest message, length delimited. Does not implicitly {@link banking.SendRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.SendRequest
         * @static
         * @param {banking.ISendRequest} message SendRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendRequest message from the specified reader or buffer.
         * @function decode
         * @memberof banking.SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.SendRequest} SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.SendRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.fromUserId = reader.string();
                        break;
                    }
                case 2: {
                        message.toUserId = reader.string();
                        break;
                    }
                case 3: {
                        message.amount = reader.double();
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
         * Decodes a SendRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.SendRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.SendRequest} SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendRequest message.
         * @function verify
         * @memberof banking.SendRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                if (!$util.isString(message.fromUserId))
                    return "fromUserId: string expected";
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                if (!$util.isString(message.toUserId))
                    return "toUserId: string expected";
            if (message.amount != null && message.hasOwnProperty("amount"))
                if (typeof message.amount !== "number")
                    return "amount: number expected";
            return null;
        };

        /**
         * Creates a SendRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.SendRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.SendRequest} SendRequest
         */
        SendRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.SendRequest)
                return object;
            var message = new $root.banking.SendRequest();
            if (object.fromUserId != null)
                message.fromUserId = String(object.fromUserId);
            if (object.toUserId != null)
                message.toUserId = String(object.toUserId);
            if (object.amount != null)
                message.amount = Number(object.amount);
            return message;
        };

        /**
         * Creates a plain object from a SendRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.SendRequest
         * @static
         * @param {banking.SendRequest} message SendRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.fromUserId = "";
                object.toUserId = "";
                object.amount = 0;
            }
            if (message.fromUserId != null && message.hasOwnProperty("fromUserId"))
                object.fromUserId = message.fromUserId;
            if (message.toUserId != null && message.hasOwnProperty("toUserId"))
                object.toUserId = message.toUserId;
            if (message.amount != null && message.hasOwnProperty("amount"))
                object.amount = options.json && !isFinite(message.amount) ? String(message.amount) : message.amount;
            return object;
        };

        /**
         * Converts this SendRequest to JSON.
         * @function toJSON
         * @memberof banking.SendRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendRequest
         * @function getTypeUrl
         * @memberof banking.SendRequest
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.SendRequest";
        };

        return SendRequest;
    })();

    banking.SendResponse = (function() {

        /**
         * Properties of a SendResponse.
         * @memberof banking
         * @interface ISendResponse
         * @property {boolean|null} [success] SendResponse success
         * @property {string|null} [message] SendResponse message
         * @property {number|null} [fromUserNewBalance] SendResponse fromUserNewBalance
         * @property {number|null} [toUserNewBalance] SendResponse toUserNewBalance
         */

        /**
         * Constructs a new SendResponse.
         * @memberof banking
         * @classdesc Represents a SendResponse.
         * @implements ISendResponse
         * @constructor
         * @param {banking.ISendResponse=} [properties] Properties to set
         */
        function SendResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendResponse success.
         * @member {boolean} success
         * @memberof banking.SendResponse
         * @instance
         */
        SendResponse.prototype.success = false;

        /**
         * SendResponse message.
         * @member {string} message
         * @memberof banking.SendResponse
         * @instance
         */
        SendResponse.prototype.message = "";

        /**
         * SendResponse fromUserNewBalance.
         * @member {number} fromUserNewBalance
         * @memberof banking.SendResponse
         * @instance
         */
        SendResponse.prototype.fromUserNewBalance = 0;

        /**
         * SendResponse toUserNewBalance.
         * @member {number} toUserNewBalance
         * @memberof banking.SendResponse
         * @instance
         */
        SendResponse.prototype.toUserNewBalance = 0;

        /**
         * Creates a new SendResponse instance using the specified properties.
         * @function create
         * @memberof banking.SendResponse
         * @static
         * @param {banking.ISendResponse=} [properties] Properties to set
         * @returns {banking.SendResponse} SendResponse instance
         */
        SendResponse.create = function create(properties) {
            return new SendResponse(properties);
        };

        /**
         * Encodes the specified SendResponse message. Does not implicitly {@link banking.SendResponse.verify|verify} messages.
         * @function encode
         * @memberof banking.SendResponse
         * @static
         * @param {banking.ISendResponse} message SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            if (message.fromUserNewBalance != null && Object.hasOwnProperty.call(message, "fromUserNewBalance"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.fromUserNewBalance);
            if (message.toUserNewBalance != null && Object.hasOwnProperty.call(message, "toUserNewBalance"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.toUserNewBalance);
            return writer;
        };

        /**
         * Encodes the specified SendResponse message, length delimited. Does not implicitly {@link banking.SendResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof banking.SendResponse
         * @static
         * @param {banking.ISendResponse} message SendResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendResponse message from the specified reader or buffer.
         * @function decode
         * @memberof banking.SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {banking.SendResponse} SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.banking.SendResponse();
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
                case 3: {
                        message.fromUserNewBalance = reader.double();
                        break;
                    }
                case 4: {
                        message.toUserNewBalance = reader.double();
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
         * Decodes a SendResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof banking.SendResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {banking.SendResponse} SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendResponse message.
         * @function verify
         * @memberof banking.SendResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            if (message.message != null && message.hasOwnProperty("message"))
                if (!$util.isString(message.message))
                    return "message: string expected";
            if (message.fromUserNewBalance != null && message.hasOwnProperty("fromUserNewBalance"))
                if (typeof message.fromUserNewBalance !== "number")
                    return "fromUserNewBalance: number expected";
            if (message.toUserNewBalance != null && message.hasOwnProperty("toUserNewBalance"))
                if (typeof message.toUserNewBalance !== "number")
                    return "toUserNewBalance: number expected";
            return null;
        };

        /**
         * Creates a SendResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof banking.SendResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {banking.SendResponse} SendResponse
         */
        SendResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.banking.SendResponse)
                return object;
            var message = new $root.banking.SendResponse();
            if (object.success != null)
                message.success = Boolean(object.success);
            if (object.message != null)
                message.message = String(object.message);
            if (object.fromUserNewBalance != null)
                message.fromUserNewBalance = Number(object.fromUserNewBalance);
            if (object.toUserNewBalance != null)
                message.toUserNewBalance = Number(object.toUserNewBalance);
            return message;
        };

        /**
         * Creates a plain object from a SendResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof banking.SendResponse
         * @static
         * @param {banking.SendResponse} message SendResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.success = false;
                object.message = "";
                object.fromUserNewBalance = 0;
                object.toUserNewBalance = 0;
            }
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.fromUserNewBalance != null && message.hasOwnProperty("fromUserNewBalance"))
                object.fromUserNewBalance = options.json && !isFinite(message.fromUserNewBalance) ? String(message.fromUserNewBalance) : message.fromUserNewBalance;
            if (message.toUserNewBalance != null && message.hasOwnProperty("toUserNewBalance"))
                object.toUserNewBalance = options.json && !isFinite(message.toUserNewBalance) ? String(message.toUserNewBalance) : message.toUserNewBalance;
            return object;
        };

        /**
         * Converts this SendResponse to JSON.
         * @function toJSON
         * @memberof banking.SendResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SendResponse
         * @function getTypeUrl
         * @memberof banking.SendResponse
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SendResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/banking.SendResponse";
        };

        return SendResponse;
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

        /**
         * Callback as used by {@link banking.UserService#deposit}.
         * @memberof banking.UserService
         * @typedef DepositCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {banking.DepositResponse} [response] DepositResponse
         */

        /**
         * Calls Deposit.
         * @function deposit
         * @memberof banking.UserService
         * @instance
         * @param {banking.IDepositRequest} request DepositRequest message or plain object
         * @param {banking.UserService.DepositCallback} callback Node-style callback called with the error, if any, and DepositResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.deposit = function deposit(request, callback) {
            return this.rpcCall(deposit, $root.banking.DepositRequest, $root.banking.DepositResponse, request, callback);
        }, "name", { value: "Deposit" });

        /**
         * Calls Deposit.
         * @function deposit
         * @memberof banking.UserService
         * @instance
         * @param {banking.IDepositRequest} request DepositRequest message or plain object
         * @returns {Promise<banking.DepositResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link banking.UserService#withdraw}.
         * @memberof banking.UserService
         * @typedef WithdrawCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {banking.WithdrawResponse} [response] WithdrawResponse
         */

        /**
         * Calls Withdraw.
         * @function withdraw
         * @memberof banking.UserService
         * @instance
         * @param {banking.IWithdrawRequest} request WithdrawRequest message or plain object
         * @param {banking.UserService.WithdrawCallback} callback Node-style callback called with the error, if any, and WithdrawResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.withdraw = function withdraw(request, callback) {
            return this.rpcCall(withdraw, $root.banking.WithdrawRequest, $root.banking.WithdrawResponse, request, callback);
        }, "name", { value: "Withdraw" });

        /**
         * Calls Withdraw.
         * @function withdraw
         * @memberof banking.UserService
         * @instance
         * @param {banking.IWithdrawRequest} request WithdrawRequest message or plain object
         * @returns {Promise<banking.WithdrawResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link banking.UserService#getBalance}.
         * @memberof banking.UserService
         * @typedef GetBalanceCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {banking.GetBalanceResponse} [response] GetBalanceResponse
         */

        /**
         * Calls GetBalance.
         * @function getBalance
         * @memberof banking.UserService
         * @instance
         * @param {banking.IGetBalanceRequest} request GetBalanceRequest message or plain object
         * @param {banking.UserService.GetBalanceCallback} callback Node-style callback called with the error, if any, and GetBalanceResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.getBalance = function getBalance(request, callback) {
            return this.rpcCall(getBalance, $root.banking.GetBalanceRequest, $root.banking.GetBalanceResponse, request, callback);
        }, "name", { value: "GetBalance" });

        /**
         * Calls GetBalance.
         * @function getBalance
         * @memberof banking.UserService
         * @instance
         * @param {banking.IGetBalanceRequest} request GetBalanceRequest message or plain object
         * @returns {Promise<banking.GetBalanceResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link banking.UserService#send}.
         * @memberof banking.UserService
         * @typedef SendCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {banking.SendResponse} [response] SendResponse
         */

        /**
         * Calls Send.
         * @function send
         * @memberof banking.UserService
         * @instance
         * @param {banking.ISendRequest} request SendRequest message or plain object
         * @param {banking.UserService.SendCallback} callback Node-style callback called with the error, if any, and SendResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(UserService.prototype.send = function send(request, callback) {
            return this.rpcCall(send, $root.banking.SendRequest, $root.banking.SendResponse, request, callback);
        }, "name", { value: "Send" });

        /**
         * Calls Send.
         * @function send
         * @memberof banking.UserService
         * @instance
         * @param {banking.ISendRequest} request SendRequest message or plain object
         * @returns {Promise<banking.SendResponse>} Promise
         * @variation 2
         */

        return UserService;
    })();

    return banking;
})();

module.exports = $root;
