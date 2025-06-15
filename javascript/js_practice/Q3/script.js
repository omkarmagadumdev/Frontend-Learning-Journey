var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");
var h3 = document.querySelector("h3")

form.addEventListener("submit",function(ev){
  ev.preventDefault()
  console.log(inps.length)
  for(var i=0;i<inps.length;i++){
    if(inps[i].value.trim()===''){
        h4.textContent = "error,blank"
        h4.style.color = "red"
    }

  }
})