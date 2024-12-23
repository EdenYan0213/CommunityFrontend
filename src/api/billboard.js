import request from '@/utils/request'
// import { get } from 'core-js/core/dict'

export function getBillboard(){
  return request({
    url:'/billboard/show',
    method:'get'
  })

}