import axios from 'axios'

axios.defaults.withCredentials = true
var gLocation = window.location.href,
  gRe = /^(http:\/\/|https:\/\/)|([^\/]*\/)/g,
  gArr = gLocation.match(gRe),
  gUrl = gArr[0] + gArr[1]
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = process.env.VUE_APP_H5_URL
} else {
  axios.defaults.baseURL = gUrl + 'rwx/rwkweb/'
}

export default async function request(url, method = 'POST', data = {}) {
  let reqUrl = `${url}`

  try {
    const response = await axios({
      method,
      url: reqUrl,
      data,
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.data.error) {
      throw Error(response.data.data)
    }

    return response.data
  } catch (e) {
    console.log(`请求错误: ${e.message}`)
    console.log(e)
    const data = {
      result: 1,
      msg: e.message
    }
    //return data
  }
}
