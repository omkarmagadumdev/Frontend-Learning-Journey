# DOM manipulation
sandwich 

- selection
- change
- event

## Accessing Elements:
```js
//select and save
var btn = document.querySelector('button');

//selections types


//id
var abcd = document.querySelector('#abcd');

//class
var classabcd = document.querySelector('.abcd');

//tag
var h1 = document.querySelector('h1');
```
- in js if multiple h3 it will only select first h3
```js
var h3 = document.querySelector("h3");// first h3
var allh3 = document.querySelectorAll("m3");//for all h3's

var btn = document.querySelector('button');
btn.textContent = "Starting...";   // you can use btn variable to change anything
btn.textContent += "Starting...";   // to add html tag text to script text
btn.innerHTML = "<i>hello</i>";    // textcontent will print <i>hello</i> and innerHTML will print hello
```
## creating and Deleting Elements
### createElement(),appendChild(),removerChild()
```js
//to connect to html 
var h1 = document.createElement('h1');
h1.textContent= 'hey';
h1.classList.add("makeitred");

document.querySelector("body").appendChild(h1)//append child


//another example:
var img = document.createElement('img');
img.src ="https://images.unsplash.com/photo-1726607288637-a646ddd3814a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

document.querySelector('body').appendChild(img)
//removeChild()
document.querySelector('body').removeChild(img)
```


## Event Handling

```js
var btn = document.querySelector('button');
btn.addEventListener('click',function() {
    alert();//event
    btn.textContent = "make new card";//event
    btn.style.backgroundColor="red";//event
    
})
```
