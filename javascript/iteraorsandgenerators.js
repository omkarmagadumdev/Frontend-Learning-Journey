// function customeiterator(arr){
//   let idx = 0;
//   function next(){
//     if(idx === arr.length){
//       return {value:undefined,Done:true}
//     }
//     let index = arr[idx];
//     idx++;
//     return {value:index,Done:false} 
//   }

//   return {next}
// }

// let automaticfetcher = customeiterator([2,3,4,5,6]);

// console.log(automaticfetcher.next());
// console.log("out");
// console.log(automaticfetcher.next());
// console.log(automaticfetcher.next());

// let arr = [2,3,4,5,6];

// iterator = arr[Symbol.iterator]()
// console.log(iterator.next())
// console.log("out");

// function* mygenerator (){
//   console.log("start");
//   yield 100;
//   yield 99;
//   yield 97;
//   yield -1;
//   yield 0;


// }

// i = mygenerator();
// console.log(i.next())
// console.log("out");

// console.log(i.next())
// console.log("out");
// console.log(i.next())
// console.log("out");




// function* iterator(){
//   let x = yield 10;
//   let y = yield 60;
//   let z = y + x;
//   yield z 


// }

// let i = iterator();

// console.log(i.next())
// console.log(i.next(30))
// console.log(i.next(70))



function* mygenerator(){
  yield 10;
  yield 20;

}

let it = mygenerator();

console.log(it.next());
console.log(it.next());
