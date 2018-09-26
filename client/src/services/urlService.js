import axios from 'axios'
const DEFAULT_URL = 'http://localhost:3001/dUrl'
const CURR_URL = 'http://localhost:3001/url'


function getDefaultUrl() {
    return axios.get(DEFAULT_URL)
        .then(res => {
            console.log('default url:', res.data[0].url);
            return res.data[0].url
        })
}

function getUrl(url) {
    console.log('service client');    
    return axios.get(CURR_URL, url)
        .then(res => {
            return res
        })
}
export default {
    getDefaultUrl,
    getUrl
}
