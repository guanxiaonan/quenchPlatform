'use strict';

module.exports = {
  client: 'mysql',                //数据库类型
  connection: {
    host: 'localhost',            //数据库地址
    user: 'root',                  //数据库用户名
    password: '123',          //数据库密码
    database: 'manage_platform',  //数据库名字
    port: 3306                    //端口号
  },
  pool: { //设置数据库连接池数量
    min: 0,
    max: 10
  }
}
