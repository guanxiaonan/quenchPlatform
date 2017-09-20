'use strict';

//const  env = [process.env.NODE_ENV || 'development'];

// 用来挂载development下面配置文件

//console.log(require('./development/port').port)
module.exports = {
  portConfig: require('./development/port').port,
  knexConfig: require('./development/knex')
//  redisConfig: require('./development/redis')
}
