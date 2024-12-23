import request from '@/utils/request'
// import { get } from 'core-js/core/dict'

export function getTodayTip(){
  return request({
    url:'/tip/today',
    method:'get'
  })

}