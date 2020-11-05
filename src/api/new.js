
import axios from '@/libs/api.request'

export const write = () => {
  return axios.request({
    url: '/api/excel/write',
    method: 'post',
    responseType: 'blob'
  })
}

