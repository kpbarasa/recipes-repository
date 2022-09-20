const Redis = require('ioredis');

// Connect to Redis at 127.0.0.1, port 6379.
const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

const redisCache = async (recipes) => {

    try {

        if (!recipes) throw "Error no recipe";

        // getting it back from redis: first geet the keys ; then get all the data
        const keys = await redisClient.lrange('recipesList', 0, -1); // 0, -1 => all items

        if (keys.length === 0) {

            // Push to redis
            await redisClient.rpush('recipesList', `${JSON.stringify(recipes)}`);

        }
        console.log(keys.length);

        // Disconnect from Redis.
        redisClient.quit();

    } catch (error) {

        console.log(error);

    }
};

module.exports = redisCache;