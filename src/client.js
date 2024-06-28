const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

// Load the protobuf file
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

if (!userProto || !userProto.UserService) {
  console.error("Failed to load UserService. Please check your proto file and path.");
  process.exit(1);
}

const client = new userProto.UserService('localhost:50051', grpc.credentials.createInsecure());

const user = {
  first_name: 'John',
  last_name: 'Doe',
  email: 'john.doe@example.com',
  password: 'securepassword',
  phone_number: '1234567890'
};

client.CreateUser(user, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', response);
  }
});
