import axios from 'axios'

const post = (url) => {
    

    return (params) => {
        return new Promise((resolve, reject) => {
            axios.post(url,{
                params
            }
            ).then((res) => {
                console.log(url, res)
                const data = res.data
                console.log(data)
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