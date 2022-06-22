var enelm = document.getElementById("codepen");
var faelm = document.getElementById("facebook");
var twelm = document.getElementById("twitter");
var gielm = document.getElementById("github");
var lielm = document.getElementById("linkedin");
var stelm = document.getElementById("stack");

var opac = 0.1;
var opacup=true;
renderLoop();

      function renderLoop() {
        setTimeout(function() {
          if(opacup==true)
             {opac+=0.1;
              if(opac>=1)opacup=false;
             }
         if(opacup==false)
             {opac-=0.1;
              if(opac<=0.3) opacup=true;
             }
        enelm.style.opacity = opac;
        faelm.style.opacity = opac;
        twelm.style.opacity = opac;
        gielm.style.opacity = opac;
        lielm.style.opacity = opac;
        stelm.style.opacity = opac;
     
          
        window.requestAnimationFrame(renderLoop); 
        },300);
      }