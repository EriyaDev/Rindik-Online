var elem = document.getElementById("rindik-container");
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


for(i = 0; i  < document.querySelectorAll(".rindik").length; i++){
    document.querySelectorAll(".rindik")[i].addEventListener("click", function (){
        
        const rindik = this.innerHTML;
        console.log(rindik);

        switch (rindik) {
            case 'a':
                var nada1 = new Audio('sounds/1.wav');
                nada1.play();   
                break;
            case 's':
                var nada2 = new Audio('sounds/2.wav');
                nada2.play();   
                break;
            case 'd':
                var nada3 = new Audio('sounds/3.wav');
                nada3.play();   
                break;
            case 'f':
                var nada4 = new Audio('sounds/4.wav');
                nada4.play();   
                break;
            case 'g':
                var nada5 = new Audio('sounds/5.wav');
                nada5.play();   
                break;
            case 'h':
                var nada6 = new Audio('sounds/6.wav');
                nada6.play();   
                break;
            case 'j':
                var nada7 = new Audio('sounds/7.wav');
                nada7.play();   
                break;
            case 'k':
                var nada8 = new Audio('sounds/8.wav');
                nada8.play();   
                break;
            case 'l':
                var nada9 = new Audio('sounds/9.wav');
                nada9.play();   
                break;
            case 'c':
                var nada10 = new Audio('sounds/10.wav');
                nada10.play();   
                break;
            case 'v':
                var nada11 = new Audio('sounds/11.wav');
                nada11.play();   
                break;
        
            default:
                var nada1 = new Audio('sounds/1.wav');
                nada1.play(); 
                break;
        }

    });

    document.querySelectorAll(".rindik")[i].addEventListener("keydown", function (event){

        const inputKey = event.key;
        console.log(inputKey);

        switch (inputKey) {
            case 'a':
                var nada1 = new Audio('sounds/1.wav');
                nada1.play();   
                break;
            case 's':
                var nada2 = new Audio('sounds/2.wav');
                nada2.play();   
                break;
            case 'd':
                var nada3 = new Audio('sounds/3.wav');
                nada3.play();   
                break;
            case 'f':
                var nada4 = new Audio('sounds/4.wav');
                nada4.play();   
                break;
            case 'g':
                var nada5 = new Audio('sounds/5.wav');
                nada5.play();   
                break;
            case 'h':
                var nada6 = new Audio('sounds/6.wav');
                nada6.play();   
                break;
            case 'j':
                var nada7 = new Audio('sounds/7.wav');
                nada7.play();   
                break;
            case 'k':
                var nada8 = new Audio('sounds/8.wav');
                nada8.play();   
                break;
            case 'l':
                var nada9 = new Audio('sounds/9.wav');
                nada9.play();   
                break;
            case 'c':
                var nada10 = new Audio('sounds/10.wav');
                nada10.play();   
                break;
            case 'v':
                var nada11 = new Audio('sounds/11.wav');
                nada11.play();   
                break;
        
            default:
                var nada1 = new Audio('sounds/1.wav');
                nada1.play(); 
                break;
        }

        event.preventDefault();
    });
}

