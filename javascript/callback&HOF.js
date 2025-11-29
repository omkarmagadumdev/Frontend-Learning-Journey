const arr = [2,3,4,5,6];

function calculate(arr,fn){
    let result = []
    for(let i =0;i<arr.length;i++){
        result.push(fn(arr[i]))
    }

    return result

}

let s = calculate(arr,function g(ele){
    return ele*ele
})

// console.log(s);

let c = calculate(arr,function (ele){
    return ele * ele * ele
})

console.log(c);
