import dotenv from 'dotenv';
dotenv.config()

const _config = {
PORT : process.env.PORT,
MONGO_URI : process.env.MONGO_URI,
JWT_SCERET :process.env.JWT_SCERET,
NODE_ENV :process.env.NODE_ENV,
REDIS_HOST :process.env.REDIS_HOST,
REDIS_PORT :process.env.REDIS_PORT,
REDIS_PASSWORD :process.env.REDIS_PASSWORD,
}
 export default  Object.freeze(_config)