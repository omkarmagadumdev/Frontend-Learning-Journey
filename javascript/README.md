# Javascript  level 1

- javascript langauage:  code likhna skihna,main features.
- javacript dom: code likhkar chegien banna sikhna 
- var es5
- let es6

### console alert prompt

```js
console.log("hello");//log

console.warn("hello");//warn

console.error("hello");//error

alert("hello");//alert

prompt("name");//prompt
```
# js level 2
### variables and constants
```js
var discounts = 20;
discount = 50;

const discount = 20;
discount = 50;//cant change the constant value its fixed 
```

### compiler and interpreter

- these are the transaltors which will convert human readable code  to machine code

- compiler - direclty convert to  machine code(which is close to machine level)
- interpreted execute code line by line without converting entire code into machine code first
- byte code faster conversion and but slower while run
- js is interpreter based language
- java is compiler based
- jit compiler - its uses faster conversion of  byte code and faster run of machine code 

### window
- there are many features which are frequently used but they are not part of JS, because they are the part of JS the language but they are available in the browser and when we use them , they are called or used from the browser and Not the JS

# js level 3

### Data types

- omkar - string
- 12 - integer
- 12.3 - float
- ture - boolean
- a - character
- string - "56vnvhky57843"

- [] {} () - reference dt
- 12,12.4,omkar,a,null,undefined - primitive

```js
var arr =[1,2,3,4,5,6];
var b = arr;

b.pop();// it is taking reference of arr

var arr =[1,2,3,4,5,6];
var b = [...arr];// now its coping the aar value not referencing it.

b.pop();
```
### conditionals

###  There are three types of conditionals --
1 if else statement
2 ternary operator
3 switch case 


### truthy and falsy concept
- null undefined, NaN, 0, "" ,'', false, document.all, - falshy hongi
- baki sabh truthy

### if else
```js
if(12>13) console.log("harry");

else console.log("harry");
```

### if elseif
```js
if(12>10){
    
        
}
else if(11>10){

}
else {
    
}
```
### loops 
```js
for(start; end; change){
    
}


start;
while(end){
    change
}
```
# js Level 4

### functions

- es5 and es6
- es5 - function statement,function expression,anonymous function
- es6 - fat arrow function
1. basic fat arrow
2. fat arrow with one param
3. fat arrow with implicit return

```js
funtion abcd()//parameter{
    // your code
}
abcd();//argument

```
### parameters and agruments

```js
function abcd(val){
    console.log(12+val);
}
abcd(12);

output:24
```
### return
```js
function abcd(){
    return 12;
}

// console.log(abcd());
var a = abcd(); 
```

### for interview
```js
functon abcd(){
    //function statement
}

var abcd = function(){
    //function expression
}

function(){
    //anonymus function
}

//fat arrow
 var a = ()=>{
    return 12;
 }
 var b = a();

 // implicit return

 var a = ()=>12
 var b = a();
 ```

 # js level 5

 ### undefined, notdefined, null

 ```js
 var a;// value not given to a so it is undefined

console.log(a);// reference error because a is not declared


 ``` 
### arrays

- when you want to keep one or more than one value at same time

```js
var arr = [];
var users =["om","sidd","akash","akashy","harsh"];// we mix anything like function(){},[],'string',4 but not in java 
```

### loop in array
```js
var arr = [1,2,3,4,5];
arr.forEach (function(val){
    console.log(val + 1);

})
```

### objects
```js
var obj={};
//or
var obj2= new Object();
Example:
var battery={
    company:"cannon",
    price: 1200,
    for :"camera",
    isWroking:true,

};
battery.for 
```
### synchronous and asynchronous
- synchronous code run line by line
- async will not run line by line,all async code run at a time which ever c will answer  complet first .
