const Redis = require('ioredis');

// Connect to Redis at 127.0.0.1, port 6379.
const redisClient = new Redis({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
});

//    Load cache recipes 
const getRedisCache = async () => {

    // getting it back from redis: first get the keys ; then get all the data
    const keys = await redisClient.lrange('recipesList', 0, -1); // 0, -1 => all items

    if (keys.length !== 0) {
        let keysArr = []
        keys.map(res => {
            keysArr.push(JSON.parse(res));
        })

        return keysArr[0];
    }

}



module.exports = getRedisCache;