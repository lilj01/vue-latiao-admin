import axios from 'axios'
import {
  ElMessage
} from 'element-plus'

/* 封装http请求 */
class Http {
  service

  /* 构造器 */
  constructor() {
    this.service = axios.create({
      baseURL: process.env.VUE_APP_BASE_API,
      timeout: 5000
    })

    // 响应拦截器
    this.service.interceptors.response.use(
      response => {
        const {
          success,
          message,
          data
        } = response.data
        //   要根据success的成功与否决定下面的操作
        if (success) {
          return data
        } else {
          // 业务错误
          ElMessage.error(message) // 提示错误消息
          return Promise.reject(new Error(message))
        }
      },
      error => {
        // 处理 token 超时问题
        if (
          error.response &&
          error.response.data &&
          error.response.data.code === 401
        ) {
          // token超时
          // store.dispatch('user/logout')
        }
        ElMessage.error(error.message) // 提示错误信息
        return Promise.reject(error)
      }
    )
  }

  /**
   * @param {string} url
   * @param {string} method
   * @param {object} data
   * @param {object} params
   */
  request({
    url,
    method = 'get',
    data = {},
    params = {}
  }) {
    return this.service({
      method,
      url,
      data,
      params
    })
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} params
   */
  post(url, data = {}, params = {}) {
    return this.request({
      method: 'post',
      url,
      data,
      params
    })
  }

  /**
   * @param {string} url
   * @param {object} params
   */
  get(url, params = {}) {
    return this.request({
      method: 'get',
      url,
      params
    })
  }

  /**
   * @param {string} url
   * @param {object} data
   * @param {object} params
   */
  put(url, data = {}, params = {}) {
    return this.request({
      method: 'put',
      url,
      params,
      data
    })
  }

  /**
   * @param {string} url
   * @param {object} params
   */
  delete(url, params = {}) {
    return this.request({
      method: 'delete',
      url,
      params
    })
  }
}

const http = new Http()
export {
  http,
  Http
}
