# DOM manipulation
sandwich 

- selection
- change
- event

### Accessing Elements:
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

