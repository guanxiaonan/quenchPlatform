'use strict';

import Knex from 'knex';
import validate from 'validate';
import md5 from 'md5';


import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class User{

  // //用户登录
  static async insert(ctx, next) {
    // 判断数据输入
    let new_data = ctx;
    //console.log(new_data)

    //判断用户名和密码是否为空;
    if(new_data.username !== '') {    //判断用户名是否为空
      if(new_data.password !== '') {  //判断密码是否为空
        let login_data = {};

        //判断用户是否已被锁定
        let user_data = await knex('core_account')
                    .select('salt', 'status')
                    .where('username', new_data.username);

        //console.log(user_data)
        user_data = user_data[0];
        if(user_data.status === 0) {
          return 'userIsLocked';
        }

				login_data.username = new_data.username;
				login_data.password =await md5(md5(new_data.password) + user_data.salt);

        if( new_data.optionsRadios === 'option1') {

          login_data.type = 1;
        } else if( new_data.optionsRadios === 'option2'){

          login_data.type = 2;
        } else if( new_data.optionsRadios === 'option3'){

          login_data.type = 3;
        }
        //console.log(login_data);

        let result = await knex('core_account')
                          .where({'username': login_data.username,
                                  'password': login_data.password,
                                  'type': login_data.type});

        if(result.length > 0) {
          return 'success';
        } else {
          return 'passwordIsWrong';
        }

      } else {
        return 'passwordIsNull';
      }
    } else {
      return 'usernameIsNull';
    }
  }

  //用户注册
  static async register(ctx, next) {
    // 判断数据输入
    let new_data = ctx;

    //密码加盐
    let salt_data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 's', 'y', 'z'];

    //判断用户名和密码是否为空;
    if(new_data.username !== '') {    //判断用户名是否为空
      if(new_data.password !== '') {  //判断密码是否为空
        let insert_data = {};

        // 判断用户是否已被注册
        let check_result = await knex('core_account')
                        .select('username')
                        .where('username', new_data.username);

        //当该用户名已被注册时
        if(check_result.length > 0) {
          return 'usernameIsExist';
        }

        //密码开始加盐
        let salt = '';
				for(let m = 0; m < 5; m++){
					salt  += await salt_data[Math.floor(Math.random()*36)];
				}

        insert_data.username= new_data.username;
				insert_data.salt = salt;
				insert_data.password =await md5(md5(new_data.password) + salt);
        insert_data.status = 1;

        if( new_data.optionsRadios === 'option1') {
          insert_data.type = 1;
        } else if( new_data.optionsRadios === 'option2'){
          insert_data.type = 2;
        } else if( new_data.optionsRadios === 'option3'){
          insert_data.type = 3;
        }

        let result = await knex('core_account')
                            .insert(insert_data);

        if(result[0] !== 0 ) {
          return 'success';
        } else {
          return 'wrong';
        }
      } else {
        return 'passwordIsNull';
      }
    } else {
      return 'usernameIsNull';
    }

  }
}
