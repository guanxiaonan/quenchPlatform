'use strict';

import Knex from 'knex';
import validate from 'validate';



import configs from '../configs/index';

const knex = Knex(configs.knexConfig);

export default class Individual{

  // //用户登录
  static async insert(ctx, next) {
    // 判断数据输入
    let new_data = ctx;
    //console.log(new_data)
    //输入数据的代码
    if(new_data.now_date !== ''){
      if(new_data.temperature !== ''){
        if(new_data.humidity !== ''){
          if(new_data.pressure !== ''){

            let insert_data = {};
            insert_data.time = new_data.now_date;
            insert_data.temperature = new_data.temperature;
            insert_data.humidity = new_data.humidity;
            insert_data.pressure = new_data.pressure;
            //插入数据
            let res = await knex('jiare').insert(insert_data);
              // console.log(res);
              if(res[0] != 0){
                return 'success';
              }else{
                return 'wrong';
              }
          }else{
            return 'pressureIsNull';
          }
        }else{
          return 'humidityIsNull';
        }
      }else{
        return 'temperatureIsNUll';
      }
    }else {
      return 'dateIsNull';
    }

}

}
