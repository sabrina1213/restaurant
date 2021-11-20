import axios from 'axios'


import {
    useRouter
} from 'vue-router'

const get = (url) => {
    if(process.env.NODE_ENV !== 'development'&&process.env.NODE_ENV=='production'){
        url = 'http://101.34.51.116:3000'+url;
    }
    return (params) => {
        return new Promise((resolve, reject) => {
            
            axios.get(url, { 
                params
            }).then((res) => {
                // console.log(url, res, 'request.js')
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



export{
    get
}