import { request } from './request'

export function GetLoadById (id) {
  return request({
    url: '/api/Loads/' + id
  })
}

// export function GetLoadById (id) {
//   return request({
//     url: '/api/Loads',
//     params: {
//       id
//     }
//   })
// }
