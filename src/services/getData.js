import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://ssl.6xq.cn/web/wllz/public/plugin'
axios.defaults.method = 'post'
// axios.defaults.timeout = 5000

async function getData(config) {
    const {
        url,
        baseURL,
        method,
        data,
        params,
        headers,
        timeout,
    } = config
    const userdata = await axios({
        url,
        baseURL,
        method,
        data,
        params,
        headers,
        timeout,
        cancelToken: source.token
    }).then(res => res)
    return userdata
}
axios.interceptors.request.use(request => {
    if (!request.url) {
        source.cancel('已取消请求，刷新页面重新请求')
        return Promise.reject('缺失url');
    } else {
        return request
    }
}, (error) => {
    return Promise.reject(error);
})

axios.interceptors.response.use(response => {
    // console.log(response.status )
    // if (response.status == '200') {
    //     console.log(1)
    //     return 1
    // }

    // console.log(response)
    if (response.data.code === 200 || response.status == '200') {
        const data = response.data;
        return data
    } else if (response.data.code !== 200) {
        (response) => {
            console.log(response)
            return Promise.reject(response);
        }
    } else if (response.data.code === 403) {
        Promise.reject(response)
        throw new Error('服务器拒绝请求')
    } else if (response.data.code === 503) {
        Promise.reject(response)
        throw new Error('服务器超时')
    } else if (response.data.code === 404) {
        Promise.reject(response)
        throw new Error('请求的网页不存在')
    } else if (response.data.status === 'error') {
        console.log(response)
        Promise.reject(response)

        throw new Error('请求错误，请检查路径是否正确，请重新输入')
    }
}, err => { // 失败
    return Promise.reject(err)
})


const CancelToken = axios.CancelToken;
let source = CancelToken.source()



Vue.prototype.getData = getData
export {
    getData
}