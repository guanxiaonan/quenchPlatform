'use strict';

import Koa from 'koa';
import views from 'koa-views';
import serve from 'koa-static';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session';
import redisStore from 'koa-redis';

import config from './app/configs/index';
import router from './app/routes/index';

const app = new Koa();


//session配置
app.keys = ['managePlatform', 305];
const CONFIG = {
  key: 'managePlatform',
  maxAge: 3600000,
  overwrite: true,
  httpOnly: true,
  signed: true
  // store: redisStore(config.redisConfig)
}

// 注册中间件
app
  .use(views(__dirname + '/app/views', {  //模板引擎设置
    map: { html: 'ejs' }
  }))
  .use(serve(__dirname + '/app/public'))  //静态文静目录设置
  .use(session(CONFIG, app))
  .use(bodyParser())                      //http协议解析
  .use(router.routes());                  //路由设置



app.listen(config.portConfig, (err) => {
  if (err) console.log(err);
  console.log("Server starting at " + config.portConfig)
});
