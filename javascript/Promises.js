// let p = new Promise((res,rej)=>{
//     console.log("Exicuter callback triggered by promise constructor")
//     let random = Math.floor(Math.random()*100);
//     if(random %2 === 0){
//         res()
//     }
//     else{
//         rej()
//     }
// })

// console.log("created the promise Object");
// console.log(p);
let p = new Promise((res,rej)=>{
    console.log("Exicuter callback triggered by promise constructor")
   setTimeout(()=>{
     let random = Math.floor(Math.random()*100);
    console.log(random);
    
    if(random %2 === 0){
        res()
    }
    else{
        rej()
    }
   },2000)
})

console.log("created the promise Object");
console.log(p);
