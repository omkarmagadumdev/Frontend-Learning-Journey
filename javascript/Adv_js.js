// console.log(this);

// function abcd(){
//     console.log(this);
// }
// abcd();

//method - obj

// var obj={
//     name:function(){
//         console.log(this);
//     },
//     age: 25,
//     email:"kuchb bhi.com"
// }
// obj.name();

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
obj2.sayNmae();

// constructer fnc main this ki value - new blanck object 
function add(){
    console.log(this);

}

const ans = new add();
//event listner mein this ki value - that element jis par event lis. laga ho
document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})