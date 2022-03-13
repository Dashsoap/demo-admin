import request from '@/utils/request'

export const getLoginInfo = () => {
  return request({
    method: 'GET',
    url: '/login/info'
  })
}
