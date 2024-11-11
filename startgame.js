
const image1 = document.getElementById("div-1-img-1");
// rock
const image2 = document.getElementById("div-1-img-2");
// paper
const image3 = document.getElementById("div-1-img-3");
// cissor
const butn = document.getElementById("next");



const image11 = document.getElementById("div-02-img-1");
// rock
const image22 = document.getElementById("div-02-img-2");
// paper
const image33 = document.getElementById("div-02-img-3");
// coissor
var reslt = document.getElementById('result');
// show result
var result_container= document.getElementById('result-container');

var tim = setTimeout(refreshPage,3000);
// Variable for refresh the page

var num = [1,2,3];
butn.addEventListener("click", () => {
    let n1 = Math.floor(Math.random() * num.length)+1;
    let n2 = Math.floor(Math.random() * num.length)+1;
    if (n1 == n2) {
      var tim = setTimeout(refreshPage,3000);
      console.log(tim.value);
       if(n1 == 1 && n2 == 1){
          console.log(n1,n2);
          image1.style.display = "block";
          image11.style.display = "block";
         //  alert("Draw");
         reslt.innerText = "Draw!";

         }
         else if(n1 == 2 && n2 == 2){
            console.log(n1,n2);
            image2.style.display = "block";
            image22.style.display = "block";
            // alert("Draw");
            reslt.innerText = "Draw!";

         }
         else{
            console.log(n1,n2);
            image3.style.display = "block";
            image33.style.display = "block";
            // alert("Draw");
            reslt.innerText = "Draw!";
            
         }
         // setTimeout(refreshPage,2000);
         result_container.style.background = "lightpink";
         reslt.style.color = "blue";
    }
    else if(n1 != n2){
        if(n1 == 1,2,3 && n1 == 1,2,3 ) 
           {
            if(n1 == 1 && n2 == 2){
                console.log(n1, n2);
               image1.style.display = "block";
               image22.style.display = "block";
               // alert("player 2 win");
               reslt.innerText = "player 2 win !";
               result_container.style.background = "magenta";
               reslt.style.color = "black";

           }else if(n2 == 2 && n1 == 1){
                console.log(n1,n2);
               image22.style.display = "block";
               image1.style.display = "block";
               // alert("player 1 win");
               reslt.innerText = "player 1 win";
               result_container.style.background = "green";
               reslt.style.color = "black";

           }
           else if(n1 == 1 && n2 == 3){
                console.log(n1,n2);
               image1.style.display = "block";
               image33.style.display = "block";
               // alert("player 1 win");
               reslt.innerText = "Player 1 win !";
               result_container.style.background = "green";
               reslt.style.color = "black";

           }else if(n2 == 3 && n1 == 1){
                console.log(n1,n2);
               image33.style.display = "block";
               image1.style.display = "block";
               // alert("player 2 win");
               reslt.innerText = "Player 2 win";
               result_container.style.background = "magenta";
               reslt.style.color = "black";

           }else if(n1 == 2 && n2 == 3){
                console.log(n1,n2);
               image2.style.display = "block";
               image33.style.display = "block";
               // alert("player 2 win");
               reslt.innerText = "player 2 win!";
               result_container.style.background = "magenta";
               reslt.style.color = "black";

           }else if(n2 == 3 && n1 == 2){
                console.log(n1,n2);
               image33.style.display = "block";
               image2.style.display = "block ";
               // alert("player 1 win");
               reslt.innerText = "Player 1 win !";
               result_container.style.background = "green";
               reslt.style.color = "black";

           }
         }
         // setTimeout(refreshPage,2000);
     
      }
   }
);
function refreshPage(){
   window.location.reload();
}

setTimeout(refreshPage,4000);



