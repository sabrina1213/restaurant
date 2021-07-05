import axios from 'axios'

const post = (url) => {
    // let server = process.env.NODE_ENV ! == 'development' ? 'http://api.lccbjc.com' : ''
    return (params) => {
        return new Promise((resolve, reject) => {
            axios.post(url, { 
                params
            }).then((res) => {
                console.log(url, res, 'request.js')
                const data = res.data
                
                if (data.err === false) {
                    resolve(data)
                } else {
                    // console.log(err)
                   
                }
            }).catch((err) => {
                reject(err)
            })
        })

    }
}

export {
    post
}