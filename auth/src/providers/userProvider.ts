const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")
import { resolve } from 'path'

const PROTO_PATH = resolve('../user/user.proto')

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

const UserService = grpc.loadPackageDefinition(packageDefinition).UserService;
const client = new UserService(
    "localhost:30043",
    grpc.credentials.createInsecure()
)

export default client