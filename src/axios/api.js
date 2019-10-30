import axios from 'axios'
const api = axios.create({
  timeout:30000
})

api.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

api.interceptors.response.use(response => {
  return response
}, err => {
  return Promise.reject(err)
})

api.post = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
};

api.get = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params:params
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

api.delete = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      data:data
    }).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

api.patch = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

api.put = function (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(res => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}

export default api
