const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


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

const users = []; // Dummy database

const createUser = (call, callback) => {
  const user = {
    id: users.length+1,
    first_name: call.request.first_name,
    last_name: call.request.last_name,
    email: call.request.email,
    password: call.request.password,
    phone_number: call.request.phone_number,
  };

  // Simulate saving user to database
  users.push(user);

  callback(null, { success: true,  id: user.id, message: 'User created successfully' });
};

function deposit(call, callback) {
  const userId = call.request.user_id;
  const amount = call.request.amount;

  // Simulate deposit logic (add to balance)
  // In a real application, this would update a database record
  // Here, we assume userId is valid and increment the balance
  const user = users.find(u => u.id === userId);
  if (!user) {
    return callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
  }

  user.balance = user.balance ? user.balance + amount : amount;

  callback(null, { success: true, message: 'Deposit successful', user });
}

// Function to withdraw
function withdraw(call, callback) {
  const userId = call.request.user_id;
  const amount = call.request.amount;

  
  const user = users.find(u => u.id === userId);
  if (!user) {
    return callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
  }

  if (!user.balance || user.balance < amount) {
    return callback({ code: grpc.status.FAILED_PRECONDITION, message: 'Insufficient balance' });
  }

  user.balance -= amount;

  callback(null, { success: true, message: 'Withdrawal successful', user });
}

// Function to get balance
function getBalance(call, callback) {
  const userId = call.request.user_id;

  // Retrieve balance for userId
  const user = users.find(u => u.id === userId);
  if (!user) {
    return callback({ code: grpc.status.NOT_FOUND, message: 'User not found' });
  }

  const balance = user.balance || 0;

  callback(null, { success: true, message: 'Balance retrieved successfully', balance });
}

// gRPC server
const server = new grpc.Server();
server.addService(bankingProto.UserService.service, {
  CreateUser: createUser,
  Deposit: deposit,
  Withdraw: withdraw,
  GetBalance: getBalance,
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Server bind failed:', err);
    process.exit(1);
  }
  console.log(`Server running at http://0.0.0.0:${port}`);
  server.start();
});
