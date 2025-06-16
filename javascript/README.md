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

# All Advanced js concepts

```js
//global window
console.log(this);//this is in global scope


function abcd(){
    console.log(this);
}//this is in function scope
abcd();

//method - obj

var obj={
    name:function(){
        console.log(this);
    },
    age: 25,
    email:"kuchb bhi.com"
}
obj.name();

//function inside methos(es5)- window
var obj2 ={
    sayNmae:function(){
        console.log(this);
        function childfnc(){
            console.log(this);
        }
        childfnc();
    },
    age:25
    
}
obj2.sayName

// fnc inside method (es6) - object
var obj3 = {
    sayName: function(){
        const child =()=>{
            console.log(this);
        }
        child();
    }
}
obj3.sayName();

//constructer fnc main this ki value - new blanck object 
function add(){
    console.log(this);

}

const ans = new add();

//event listner mein this ki value - that element jis par event lis. laga ho
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})
```


# Js Practice Questions:

1. create a html page with a button,when the button is clicked, change the text of paragraph element.

```js

<button>click me </button>
    <p>Lorem ipsum dolor sit amet consectetur.</p>

var btn = document.querySelector("button");
var p = document.querySelector("p");

btn.addEventListener("click",function(){
    p.textContent = "hey";
    
})
```
2. create a page with two images and a button. when the button is clicked, swap the source attribute of the images.

```js

    <img id = "one"src="https://images.unsplash.com/photo-1744424945597-d695380d092a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8" alt="">
    <img id ="two"src="https://images.unsplash.com/photo-1744968776876-283d9ae15eb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" alt="">
    <button>swap image</button>

var img1=document.querySelector("#one");
var img2=document.querySelector("#two");

document.querySelector("button")
.addEventListener("click",function(){
    var src1=img1.src;
    var src2=img2.src;
   

    img1.src= src2;
    img2.src=src1;

})

```
3. create a form with input fields and a submit button. use js to validate the form and display an error message if the input is invalid.

```js
 <form>
        <h4 id = " error"></h4>
      <input id = "inp1"type="text">
      <input id="inp2"type="text">
       <input type="submit">
    </form>

var form = document.querySelector("form")
var inps= document.querySelectorAll('input[type="text"]')
var h4 = document.querySelector("h4");


form.addEventListener("submit",function(ev){
    ev.preventDefault();

// console.log(inps.length);

for(var i =0; i<inps.length;i++){
   if(inps[i].value.trim()===''){
      h4.textContent = "Error,some fields are blank";
      h4.style.color= "red";
      break;
   }
}
})
```

4. create a unorderd list.Allow users to add remove list items dynamically using buttons.

```js
    <ul>
      <li>apple</li>
    </ul>
<input type="text" placeholder="add new item">
<button id = "add">add</button>
<button id = "remove">remove</button>

var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector("ul");
var li;

add.addEventListener("click",function(){
    if(inp.value.trim() === ''){}
    else{
        li = document.createElement("li");
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ""
        }
})

remove.addEventListener("click",function(){
   ul.removeChild(li);
})

```
5. Build a countdown timer that starts when a button is clicked and update the display in real time.

```js
 <h3>0</h3>
    <button id="start" >start</button>
    <button id="stop" >stop</button>
    <script src="script.js"></script>

    var start = document.querySelector("#start");
var stop = document.querySelector("#stop")
var h3 = document.querySelector("h3")


var int;
start.addEventListener("click",function(){
    var count =0;
int= setInterval(function(){
        h3.textContent=count;
        count++;
    },1000)
})
stop.addEventListener("click",function(){
  clearInterval(int)
})

```
6. create a tabbed interface where clicking on tabs display different content sections without page relode.
```js


```


