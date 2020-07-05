var bars = document.querySelector(".header .nav-bar .bars"),
    myList = document.querySelector(".header .nav-bar ul"), 
    myListItems = document.querySelectorAll(".header .nav-bar ul li"),
    dropList =   document.querySelector(".header .nav-bar ul").childNodes[7],
    hiddenDrops = document.querySelectorAll(".nav-bar .list .hidden");
    // open the bars 
   bars.onclick = function (e) {
e.stopPropagation();
       myList.classList.toggle("height");
   }

   // click on any part of the screen to close the bars 

   document.addEventListener("click", e => {
      if (e.target.className !== "bars") {
        if (myList.classList.contains("height")) {
            myList.classList.remove("height");
        }
      }
   });

   

    // move to any section form the menu 

    myListItems.forEach(item => {
        item.addEventListener("click", e => {
            if (e.target.dataset.scroll !== "") {
            document.querySelector(e.target.dataset.scroll).scrollIntoView({
                behavior : "smooth"
            });
        }
        });
    });


// animate header 

    window.onload = function () {
        
        let defImage = document.querySelector(".main .img-box");
        let headingB = document.querySelector(".header");
        
            document.querySelector(".definition").style.opacity = "1";
            document.querySelector(".definition").style.left = "0";
            defImage.style.opacity = "1";;
            defImage.style.right = "0";
     
    }

    // animate about us 
    window.onscroll = function () {
    let info = document.querySelector(".about-us .info");
    let infoImg = document.querySelector(".about-us .info-img");
    if (window.pageYOffset > (info.offsetTop + info.offsetHeight - window.innerHeight )) {
        
        infoImg.style.opacity = "1";
        infoImg.style.left = "0"; 
      }
      let features = document.querySelector(".about-us .features");
        let featuresImg = document.querySelector(".about-us .features-img ");
        if (window.pageYOffset > (features.offsetTop + features.offsetHeight - window.innerHeight - 150)) {
            
            featuresImg.style.opacity = "1";
            featuresImg.style.right = "0"; 
          }
     }

    

     

 // open the questions by headers 



var questionHeaders = document.querySelectorAll(".freq-ques .questions .question-box  h3"),
     questionContainer = document.querySelectorAll(".freq-ques .questions .question-box .ques-con");

        questionHeaders.forEach(headerB => {
            headerB.addEventListener("click", function(e) {
                e.target.parentElement.parentElement.querySelectorAll(".open-container").forEach(element => {
                    element.classList.remove("open-container"); 
                });
                e.target.parentNode.childNodes[7].classList.add("open-container");
                e.target.parentElement.parentElement.querySelectorAll(".rotate").forEach(element => {
                    element.classList.remove("rotate"); 
                });
               
                  e.target.nextElementSibling.classList.add("rotate");
                 
                
            });
        });

    
    



