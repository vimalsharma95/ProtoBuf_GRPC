const { expect } = require('chai');
const axios = require('axios');


const PROTO_PATH = path.resolve(__dirname, '../protos/banking.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [path.resolve(__dirname, '../../protos')],
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const userProto = protoDescriptor.banking;

describe("grpc-mock tests", () => {
 

 //Test case 1
  it("Creating user with valid data", () => {
    return CreateUser({
      first_name: 'vimal',
      last_name: 'sharma',
      email: 'vimals280@gmail.com',
      password: 'Password123',
      phone_number: '1234567890'
    })
      .then((res) => {
        assert(res.message === "user created successfully");
      })
      .catch(assert);
  });

  // Test case 2: Create user with invalid data
  it("responds with 'Wrong request' data", () => {
    return CreateUser({
      first_name: 'Test',
      last_name: 'User',
      password: 'strong_password',
      phone_number: '+9876543210',
    })
      .then(() => assert(false, "Shouldn't respond with payload"))
      .catch(({code, message, metadata})=>
        assert.deepEqual(
          { code, message, metadata: { code: metadata.get("code").pop() } },
          { code: 3, message: "3 INVALID_ARGUMENT: Wrong request", metadata: { code: "400" } }
        )
      );
  });

 
  
});
