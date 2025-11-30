// function calltimer(time,timerId){

//     // console.log(`starting the timer with ${timerId}`);

//     setTimeout(()=>{
//         console.log(`${timerId} is exicuted`);
        
//     },time)
//     // console.log("timer is completed");
    
    

// }

// calltimer(2000,1);
// calltimer(0,2);
// console.log("start");
// let x = 0
// for(let i =0;i<1000000;i++){
//     x = x + i
// }
// console.log("finished");


function downloadinf(url,cb){
    setTimeout(()=>{
        console.log("downloaded");
        let downloading = "something"
        cb(downloading)
    },2000)

}

downloadinf("google.com",()=>{
    //do something 
})

function writefile(file,cb){
    console.log("writing file");
    setTimeout(()=>{
        let something = "writing";
        cb(wrinthing)
    },2000)

}

writefile("filemain",()=>{
    //write it 
})