import dotenv from 'dotenv';
dotenv.config()

const _config = {
PORT : process.env.PORT,
MONGO_URI : process.env.MONGO_URI,
JWT_SCERET :process.env.JWT_SCERET,
NODE_ENV :process.env.NODE_ENV
}
 export default  Object.freeze(_config)