const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const grpcMock = require('grpc-mock');

const PROTO_PATH = path.resolve(__dirname, '../protos/banking.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.resolve(__dirname, '../protos')],
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.banking;

const users = [];

const createUser = (call, callback) => {
  const user = {
    id: users.length + 1,
    first_name: call.request.first_name,
    last_name: call.request.last_name,
    email: call.request.email,
    password: call.request.password,
    phone_number: call.request.phone_number,
  };

  if (user.first_name.length < 1 && user.last_name.length < 1) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: "first name and last name must have at least 1 character",
    });
  }

  if (user.phone_number.length !== 10) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: "phone number must be exactly 10 characters",
    });
  }

  if (user.password.length < 6) {
    return callback({
      code: grpc.status.INVALID_ARGUMENT,
      message: "password should have at least 6 characters",
    });
  }

  users.push(user);
  callback(null, { success: true, message: 'User created successfully' });
};

const mockServer = new grpcMock.createMockServer({
  protoPath: PROTO_PATH,
  packageName: 'banking',
  serviceName: 'UserService',
  rules: [
    { method: "CreateUser", input: {
      first_name: 'vimal',
      last_name: 'sharma',
      email: 'vimals280@gmail.com',
      password: 'Password123',
      phone_number: '1234567890'
    }, output: {
      success: true,
      message: 'user created successfully',
      
    } },
    {
      method: 'CreateUser',
      streamType: 'unary',
      input: {
        first_name: 'test',
        last_name: 'user',
        password: 'strong_password',
        phone_number: '+9876543210',
      },
      error: {
        code: 400,
        message: 'Email address is required',
      },
    }],
  options: {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  },
});

mockServer.listen("0.0.0.0:50051");


