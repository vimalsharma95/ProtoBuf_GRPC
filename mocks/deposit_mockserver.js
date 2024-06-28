const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, '../protos/banking.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.resolve(__dirname, '../protos')]
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

const server = new grpc.Server();
server.addService(userProto.UserService.service, { CreateUser: createUser });
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Mock Server for CreateUser running at http://0.0.0.0:50051');
  server.start();
});
