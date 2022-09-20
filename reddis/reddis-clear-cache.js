const Redis = require('ioredis');

// Connect to Redis at 127.0.0.1, port 6379.
const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

// Load cache recipes 
const clearCache = async () => {

    redisClient.flushdb(); // Clear cache

}

module.exports = clearCache;