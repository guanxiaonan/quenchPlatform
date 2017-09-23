'use strict';

import Individual from '../models/individual';
'use strict';

import Knex from 'knex';
import validate from 'validate';



import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

//main--加热炉首页
exports.main_hot = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main_hot', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//diary--淬火炉首页
exports.main_cuihuo =  async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main_cuihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//project--回火炉首页
exports.main_huihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main_huihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//publicMessage--冷却炉首页
exports.main_lengque = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/main_lengque', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//plan--历史记录首页
exports.history = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/history', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//money
exports.money = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/money', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//addressList
exports.addressList = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/addressList', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//myMessage
exports.myMessage = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/myMessage', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}

//notion
exports.notion = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/notion', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//achievement
exports.achievement = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/achievement', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//hot
exports.hot = async function(ctx, next){
  //console.log(ctx.query)
  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/hot', {   //默认后缀名为html
     title: '加热炉输入数据',
     info:''
   })
  }
}

//post_hot
exports.ctlHot = async function(ctx, next){

  //console.log(ctx.request.body);   //在终端打印出数据
  let hot_data = ctx.request.body;   //获取页面传输的数据 将数据传输给 hot_data
  let result_data = await knex.column('id','time', 'temperature', 'humidity','pressure').select().from('jiare'); //冲数据库中提取数据
  // console.log(result_data);
  let result = await Individual.insert(hot_data);
  //console.log(result);
  if(result === 'dateIsNull'){
    await ctx.render('pages/individual/hot', {
      title: '加热炉输入数据',
      info: '未输入日期，请输入！'
    });
  }else if(result === 'temperatureIsNUll'){
    await ctx.render('pages/individual/hot', {
      title: '加热炉输入数据',
      info: '未输入温度，请输入！'
    });
  }else if(result === 'humidityIsNull'){
    await ctx.render('pages/individual/hot', {
      title: '加热炉输入数据',
      info: '未输入湿度，请输入！'
    });
}else if(result === 'pressureIsNull'){
  await ctx.render('pages/individual/hot', {
    title: '加热炉输入数据',
    info: '未输入压强，请输入！'
  });
}else if(result === 'success') {        //输入成功
  //console.log(result_data)
  await ctx.render('pages/individual/his_hot', {
    title: '查看数据',
    time: hot_data.time,
    temperature: hot_data.temperature,
    humidity: hot_data.humidity,
    pressure: hot_data.pressure,
    result:result_data

  })
} else {
  await ctx.render('/individual/hot', {
    title: '加热炉输入数据',
    info: '请重新输入'
  });
}
}
//淬火
exports.cuihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuihuo', {   //默认后缀名为html
     title: '个人信息',
     info:'',
     user: ctx.session.user
   })
  }
}
//回火
exports.huihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/huihuo', {   //默认后缀名为html
     title: '个人信息',
     info:'',
     user: ctx.session.user
   })
  }
}
//冷却
exports.lengque = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/lengque', {   //默认后缀名为html
     title: '个人信息',
     info:'',
     user: ctx.session.user
   })
  }
}


//show_his_hot
exports.show_his_hot = async function(ctx, next){
let result_data = await knex.column('id','time', 'temperature', 'humidity','pressure').select().from('jiare'); //冲数据库中提取数据
  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/his_hot', {   //默认后缀名为html
     title: '数据历史查询',
     time:'',
     temperature:'',
     humidity:'',
     pressure:'',
     result:result_data
   })
  }
}
//his_淬火
exports.his_cuihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/his_cuihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//his_回火
exports.his_huihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/his_huihuo', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//his_冷却
exports.his_lengque = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/his_lengque', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//淬火数据添加
exports.ctlcuihuo1 = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuihuo1', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//淬火——数据管理
exports.cuiguan = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuiguan', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
//淬火——数据添加
exports.cuijia = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/individual/cuijia', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
