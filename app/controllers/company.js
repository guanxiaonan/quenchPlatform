'use strict';

import Company from '../models/company';

//main--hot
exports.main_hot = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/main_hot', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}

//diary--main_cuihuo
exports.main_cuihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/main_cuihuo', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}

//project--main_huihuo
exports.main_huihuo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/main_huihuo', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//publicMessage --main_lengque
exports.main_lengque = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/main_lengque', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//attendance--history
exports.history = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/history', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//assignment
exports.assignment = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/assignment', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//flowExamine
exports.flowExamine = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/flowExamine', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//plan--history
exports.plan = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/plan', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//folder
exports.folder = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/folder', {   //默认后缀名为html
     title: '公司信息',
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
    await ctx.render('pages/company/addressList', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//weibo
exports.weibo = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/weibo', {   //默认后缀名为html
     title: '公司信息',
     user: ctx.session.user
   })
  }
}
//aboutCompany
exports.aboutCompany = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/aboutCompany', {   //默认后缀名为html
     title: '公司信息',
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
  let chaxun = await knex.column('time', 'temperature', 'humidity','pressure').select().from('jiare'); //冲数据库中提取数据
  //console.log(chaxun);
  let result = await Individual.insert(hot_data);
  console.log(result);
  if(result === 'dateIsNull'){
    await ctx.render('pages/company/hot', {
      title: '加热炉输入数据',
      info: '未输入日期，请输入！'
    });
  }else if(result === 'temperatureIsNUll'){
    await ctx.render('pages/company/hot', {
      title: '加热炉输入数据',
      info: '未输入温度，请输入！'
    });
  }else if(result === 'humidityIsNull'){
    await ctx.render('pages/company/hot', {
      title: '加热炉输入数据',
      info: '未输入湿度，请输入！'
    });
}else if(result === 'pressureIsNull'){
  await ctx.render('pages/company/hot', {
    title: '加热炉输入数据',
    info: '未输入压强，请输入！'
  });
}else if(result === 'success') {        //输入成功
  console.log(hot_data)
  await ctx.render('pages/company/his_hot', {
    title: '查看数据',
    time: '2017/7/12',
    temperature: hot_data.temperature,
    humidity: hot_data.humidity,
    pressure: hot_data.pressure

  })
} else {
  await ctx.render('/company/hot', {
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
    await ctx.render('pages/company/cuihuo', {   //默认后缀名为html
     title: '个人信息',
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
    await ctx.render('pages/company/huihuo', {   //默认后缀名为html
     title: '个人信息',
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
    await ctx.render('pages/company/lengque', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}


//show_his_hot
exports.show_his_hot = async function(ctx, next){

  //判断用户是否登录
  if(!ctx.session.user) {
    await ctx.render('pages/user/login', {
      title: '用户登录',
      info: ''
    });
  } else {
    await ctx.render('pages/company/his_hot', {   //默认后缀名为html
     title: '数据历史查询',
     time:'',
     temperature:'',
     humidity:'',
     pressure:''
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
    await ctx.render('pages/company/his_cuihuo', {   //默认后缀名为html
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
    await ctx.render('pages/company/his_huihuo', {   //默认后缀名为html
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
    await ctx.render('pages/company/his_lengque', {   //默认后缀名为html
     title: '个人信息',
     user: ctx.session.user
   })
  }
}
