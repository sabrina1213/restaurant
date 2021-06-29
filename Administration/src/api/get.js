import axios from 'axios'


import {
    useRouter
} from 'vue-router'

const get = (url) => {
    // const router = useRouter()
    // let server = process.env.NODE_ENV !== 'development' ? 'http://api.lccbjc.com/' : ''
    // let session = localStorage.getItem('session', '')
    // if (session == '') {
    //     router.push('/login')
    //     return
    // }

    return (params) => {
        return new Promise((resolve, reject) => {
            axios.get(url,{
                params
            }
            ).then((res) => {
                console.log(url, res, 'request.js')
                const data = res.data
                console.log(data, 'request.jsdata')
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



export{
    get
}