        let listHTML = document.getElementById("pro-list-html")
        let listJava = document.getElementById("pro-list-java")
        
        let hideFunc = (e) => {
            e.currentTarget.nextElementSibling.hidden = !e.currentTarget.nextElementSibling.hidden
            
           }
           listHTML.addEventListener('click',hideFunc)
          
           listJava.addEventListener('click',hideFunc)
          