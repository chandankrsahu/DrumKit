var x=document.querySelectorAll(".drum").length;
document.addEventListener("keydown",f2);
// console.log(x);
for(var i=0;i<x;i++){
document.querySelectorAll("button")[i].addEventListener("click",f1);


}
function f1()
{
	var y=this.innerHTML;
	switch(y){
		case 'w':
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			break;
		case 'a':
			var audio = new Audio('sounds/kick-bass.mp3');
			audio.play();
			break;
			case 's':
			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			break;
			case 'd':
			var audio = new Audio('sounds/tom-1.mp3');
			audio.play();
			break;
			case 'j':
			var audio = new Audio('sounds/tom-2.mp3');
			audio.play();
			break;
			case 'k':
			var audio = new Audio('sounds/tom-3.mp3');
			audio.play();
			break;
			case 'l':
			var audio = new Audio('sounds/tom-4.mp3');
			audio.play();
			break;
			default:
			break

			}
			pressbut(y);
			// setTimeout(function(){ document.querySelector("."+x).classList.remove("pressed"); }, 100);
}
function f2(x)
{
	switch(x.key){
		case 'w':
			var audio = new Audio('sounds/crash.mp3');
			audio.play();
			break;
		case 'a':
			var audio = new Audio('sounds/kick-bass.mp3');
			audio.play();
			break;
			case 's':
			var audio = new Audio('sounds/snare.mp3');
			audio.play();
			break;
			case 'd':
			var audio = new Audio('sounds/tom-1.mp3');
			audio.play();
			break;
			case 'j':
			var audio = new Audio('sounds/tom-2.mp3');
			audio.play();
			break;
			case 'k':
			var audio = new Audio('sounds/tom-3.mp3');
			audio.play();
			break;
			case 'l':
			var audio = new Audio('sounds/tom-4.mp3');
			audio.play();
			break;
			default:
			break

			}
			pressbut(x.key);
			
}
function pressbut(x)
{
document.querySelector("."+x).classList.add("pressed");
setTimeout(function(){ document.querySelector("."+x).classList.remove("pressed"); }, 100);
}