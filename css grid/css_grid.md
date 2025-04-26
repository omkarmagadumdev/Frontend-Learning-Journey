# css grid layout:

**trick:** `.elem#elem$*3` 
will create
```css
        <div class="elem" id="elem1"></div>
        <div class="elem" id="elem2"></div>
        <div class="elem" id="elem3"></div>
```

* **Display flex** is a single dimensional property 
* **Display grid** is a two dimensional property so **x-axis main section** and **y-axis cross section** dono me kam kar sektheho **or** dono ko ek sath target kar sakthe ho
* thats why display grid is better then display flex
* to use display grid `display: grid;`it automatically adjust div
with widht and height.
* `grid-template-columns: 100px 100px 100px 100px;`- coloumn ke size
* `align-items: center; justify-items: center;`play with it.
* using #nav h1 for targeting perticular item.
```css
#nav h1{

}
```
 for **child** then `justify-self` & `align-self.`

