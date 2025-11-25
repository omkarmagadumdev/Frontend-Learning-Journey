// const obj = {
// name:'om',
// greet:function(welcomemessage,prompt){
// console.log("this is my name from call object:",this.name,welcomemessage,prompt)
// }
// }
// obj.greet()//om

// const newobj ={name:'omkar'}
// obj.greet.call(newobj,["how are you","how are you?? "])//omkar


// const newobj = {name:"omkar from new obj"}

// obj.greet.call(newobj)

// const newobj ={name:'omkar'}
// obj.greet.call(newobj,["how are you","how are you?? "])//omkar


// var name = 'abcd'
//  let obj = {
//  name: 'om',
//  greet:function fn(){
//  console.log('hello',this.name)
//  }
//  }
//  obj.greet.call()//hello abcd


//  f = obj.greet.bind(newobj);
// f('hello','how are you?');