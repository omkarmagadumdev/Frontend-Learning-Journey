    var home = document.querySelector("#home");
    var about = document.querySelector("#about");
    var contacts = document.querySelector("#contacts");
  var h3 

    var hometext = document.querySelector("#hometext");
    var abouttexts = document.querySelector("#abouttexts");
    var contactstext= document.querySelector("#contactstext");

    home.addEventListener("click",function(){
        sarretexthato()
        hometext.style.display = "block";
        hometext.style.width= "50%";
        
    })

        about.addEventListener("click",function(){
            sarretexthato()
        abouttexts.style.display = "block";
        abouttexts.style.width= "50%";
        
    })
        contacts.addEventListener("click",function(){
            sarretexthato()
        contactstext.style.display = "block";
        contactstext.style.width= "50%";
        
    })


    function sarretexthato(){
        sarretexthato()
        h3 = document.querySelector("h3").foreach(function(h3){
      h3.style.display = "none"
        })

    }