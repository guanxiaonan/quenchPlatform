'use strict';

import Router from 'koa-router';

import User from '../controllers/user';
import Individual from '../controllers/individual';
import Company from '../controllers/company';
import Official from '../controllers/official';

const router = new Router();

router
  .get('/', User.index)                 //主页面
  .get('/login', User.showLogin)        //登录页面
  .get('/register', User.showRegister)  //注册页面
  .get('/logout', User.logout)          //用户退出登录
  .post('/login', User.login)           //用户登录操作
  .post('/register', User.register)     //用户注册操作

  //个人--操作人员
  // .get('/individual/hot', Individual.hot)//hot界面
  .post('/individual/hot',Individual.ctlHot) //处理hot界面数据
  .get('/individual/main_hot', Individual.main_hot)   //个人主页面
  //个人用户路由——操作人员
  .get('/individual/main_cuihuo', Individual.main_cuihuo) //日程管理
  .get('/individual/main_huihuo', Individual.main_huihuo) //项目
  .get('/individual/main_lengque', Individual.main_lengque) //信息发布
  .get('/individual/history', Individual.history) //规划计划
  .get('/individual/money', Individual.money) //个人财务
  .get('/individual/addressList', Individual.addressList) //通讯录
  .get('/individual/myMessage', Individual.myMessage) //我的信息
  .get('/individual/notion', Individual.notion) //通知公告
  .get('/individual/achievement', Individual.achievement) //我的成果
  .get('/individual/hot', Individual.hot) //加热炉
  .get('/individual/cuihuo', Individual.cuihuo)//淬火炉
  .get('/individual/huihuo', Individual.huihuo)//回火炉
  .get('/individual/lengque', Individual.lengque)//冷却炉

  .get('/individual/his_hot', Individual.show_his_hot)//历史记录加热炉
  .get('/individual/his_cuihuo', Individual.his_cuihuo)//历史记录淬火炉
  .get('/individual/his_huihuo', Individual.his_huihuo)//历史记录回火炉
  .get('/individual/his_lengque', Individual.his_lengque)//历史记录冷却炉

// 企业--管理人员
  .get('/company/main_hot', Company.main_hot)         //企业主页面
  //企业人员路由--管理人员
  .get('/company/main_cuihuo', Company.main_cuihuo)   //日程管理

  .get('/company/main_huihuo', Company.main_huihuo)   //项目
  .get('/company/main_lengque', Company.main_lengque) //信息发布
  .get('/company/history', Company.history)//attendance 考勤管理
  .get('/company/assignment', Company.assignment)//assignment 任务分配
  .get('/company/flowExamine', Company.flowExamine)//flowExamine 流程审批
  .get('/company/plan', Company.plan)//plan 规划计划
  .get('/company/folder', Company.folder)//folder 文件归档
  .get('/company/addressList', Company.addressList)//addressList 通讯录
  .get('/company/weibo', Company.weibo)//weibo 微博
  .get('/company/aboutCompany', Company.aboutCompany)//aboutCompany 关于公司
  //之后添加的一些路由  --by gyn
  .get('/company/hot', Individual.hot) //加热炉
  .get('/company/cuihuo', Individual.cuihuo)//淬火炉
  .get('/company/huihuo', Individual.huihuo)//回火炉
  .get('/company/lengque', Individual.lengque)//冷却炉

  .get('/company/his_hot', Individual.show_his_hot)//历史记录加热炉
  .get('/company/his_cuihuo', Individual.his_cuihuo)//历史记录淬火炉
  .get('/company/his_huihuo', Individual.his_huihuo)//历史记录回火炉
  .get('/company/his_lengque', Individual.his_lengque)//历史记录冷却炉
  //政府人员路由
  .get('/official/main', Official.main)       //政府工作人员主页面
  .get('/official/diary', Official.diary)  //办公
  .get('/official/project', Official.project) //项目
  .get('/official/publicMessage', Official.publicMessage) //信息发布
  .get('/official/govPurshase', Official.govPurshase) //政府采购
  .get('/official/plan', Official.plan) //规划计划
  .get('/official/flowExamine', Official.flowExamine) //流程审批
  .get('/official/person', Official.person)  //人事信息
  .get('/official/money', Official.money)  //财务信息
  .get('/official/rules', Official.rules) //法律公文
  .get('/official/personWill', Official.personWill) //民意征集
export default router;
