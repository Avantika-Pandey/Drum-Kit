//alert("hi");
var i;
for(i=0; i<7; i++)
{
    //alert("Hi2");
    //var butt=
    document.querySelectorAll("button")[i].addEventListener("click",func);

    function func()
    {
        
       // alert("hi");
       var buttonHTML = this.innerHTML;
       sounds(buttonHTML);
       animation(buttonHTML);
    }
}


document.addEventListener("keydown",function(event)
{
     var j= event.key;
     sounds(j);
     animation(j);
})


function sounds(text)
{
    switch (text) {
        case "w":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
             break;

        case "s":
            var tom3 = new Audio('tom-3.mp3');
            tom3.play();
             break;

         case "d":
             var tom4 = new Audio('tom-4.mp3');
             tom4.play();
             break;

        case "j":
            var crash = new Audio('crash.mp3');
            crash.play();
            break;
            

        case "k":
            
            var snare = new Audio('snare.mp3');
            snare.play();
            break;

        case "l":
            var kick = new Audio('kick-bass.mp3');
            kick.play();
            break;


        default: 
        alert("Wrong input")

   }
}
function animation(text){
    var activeButton = document.querySelector("."+text);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}