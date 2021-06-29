import axios from 'axios'

const post = (url) => {
    

    return (params) => {
        return new Promise((resolve, reject) => {
            axios.post(url,{
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
    post
}