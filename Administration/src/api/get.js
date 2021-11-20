import axios from 'axios'


const get = (url) => {
    // const router = useRouter()
    // let server = process.env.NODE_ENV !== 'development' ? 'http://api.lccbjc.com/' : ''
    // let session = localStorage.getItem('session', '')
    // if (session == '') {
    //     router.push('/login')
    //     return
    // }

    
    if(process.env.NODE_ENV !== 'development'&& process.env.NODE_ENV=='production'){
        url = 'http://101.34.51.116:3000'+url;
        console.log('http://101.34.51.116:3000+url',url);
    }

        return function(params,callback){
           
            axios.get(url,{
                params
            }
            ).then((res) => {
                const data = res.data
               callback(data)
            }).catch((err) => {
                console.log('axios catch err',err);
            })
        }

    // }

}



export{
    get
}