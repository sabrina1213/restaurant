let sessionFun = function(methods,value){
    
    let bill = JSON.parse(sessionStorage.getItem("bill"));
   
    let isfirst = sessionStorage.getItem("isFirst")
    if(methods == 'init' && isfirst == 'true'){
        bill = value;
        sessionStorage.setItem("isFirst",'false');
    }

    if (methods == 'add'){

        let isExist = false;
        bill.forEach(item => {
            if(item.name == value.name){
                item.count++;
                isExist = true;
                // console.log('session add success',item);
            }            
        });
        if(!isExist){
            value.count = 1;
            bill.push(value);
            // console.log('session add success',value);
        }
        // sessionStorage.setItem("bill",JSON.stringify(bill));
        // return;
    }
    if(methods == 'sub'){
        for (let i=0 ;i<bill.length;i++){
            if(bill[i].name == value.name){
                bill[i].count--;
                if(bill[i].count == 0){
                    bill.splice(i,1);
                }
            }   
        }
        // sessionStorage.setItem("bill",JSON.stringify(bill));
        // return;
    }
    sessionStorage.setItem("bill",JSON.stringify(bill));
    return;
}

export default sessionFun;