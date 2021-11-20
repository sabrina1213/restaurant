import axios from 'axios'

const post = (url) => {
    // return (params) => {
    //     return new Promise((resolve, reject) => {
    //         if(process.env.NODE_ENV !== 'development'&&process.env.NODE_ENV=='production'){
    //             url = 'http://101.34.51.116:3000'+url;
    //         }
    //         axios.post(url,{
    //             params
    //         }
    //         ).then((res) => {
    //             // console.log(url, res)
    //             const data = res.data
    //             // console.log(data)
    //             if (data.err === false) {
    //                 resolve(data)
    //             } else {
    //                 // console.log(err)

    //             }
    //         }).catch((err) => {
    //             reject(err)
    //         })
    //     })

    // }
     
    if(process.env.NODE_ENV !== 'development'&& process.env.NODE_ENV=='production'){
        url = 'http://101.34.51.116:3000'+url;
        console.log('http://101.34.51.116:3000+url',url);
    }
    return function (params, callback) {
        axios.post(url, {
            params
        }).then((res) => {
            const data = res.data
            callback(data)
        }).catch((err) => {
            console.log('axios catch err',err);
        })
    }

}



export {
    post
}