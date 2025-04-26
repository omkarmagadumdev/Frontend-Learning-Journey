# pseudo elements:

* har element ke paas ek possibiliy hoti hei ki wo chaahe tho inactive do after and before  naam ki  properties ko active kar sakhta hei.

**Note:** to link HTML ko CSS `link (emmit abrivation) css`
inside the head 

* double colon use karo `::` and write after or before `content:'',color:'';`

## Before and After,First line,first letter,selection:

### syntax:

```css
p::before{
    content: '>';
}

p::after{
    content: '<';
}

P::first-line{
      color: red;
}

P::first-letter{
    font-size: 120px;

}

p::selection{
    color: green;
}
//whenever you select on page it will turn in to green.

```
# psudo classes:

* use `:` sibgle colon here.

## hover,active,focus,nth-child:

### syntax:
```css

h3::hover{
    color: red ;
}

button:active{
    background-color: red;
}//use button tag in html

input:focus{
    background-color: red;
}

p:nth-child(3){
    color: red;

}//3 rd paragraph become red if you write 3n har thisra handle karega



```

# colors science:

* aisa samjho hamari screen mainly 3 colors(rgb) dikha sakti hei,
kehne ka matlab hei screen bani khoob sari led se and har led 3 color dikha sakti hei
unka comibnartion bhi 
* css mein har color ki min value 0 hai and maximum value 255 hei
* example red ki heighest darkness(full intensity)hogi 255 
r-255
g-255
b-255

* teeno full intensity - white `background-color: rgb(255,255,255);`

* teeno low intensity - black `background-color: rgb(0,0, 0);`

* aur combination bhi try kar sakhte ho by changing value

## hexadecimal notation:

* search on google color palate websites thare choose which color you want paste in with `#` `background-color: #F875AA;` 
`F8` r ka color
`75` g ka color
`AA` b ka color 

* rgba `background-color: rgb(255,255,255,0);` 0 is tranparent 1 is not transparent


