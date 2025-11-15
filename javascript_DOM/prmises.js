const p = new Promise((resolve,reject)=>{
    let a = 1 + 1;
    if(a == 3){
            resolve("success")
    }
    else{
        reject("failed")
    }
})

p.then((message)=>{
    console.log("resolved"+ " " +message)
})
.catch((message)=>{
    console.log("rejects"+ " " + message)
})