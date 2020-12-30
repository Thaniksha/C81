canvas=document.getElementById("my_canvas");

ctx=canvas.getContext("2d");

color="white";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){

color=document.getElementById("color").value;
console.log(color);
var mousex=e.clientX-canvas.offsetLeft;
var mousey=e.clientY-canvas.offsetTop;
console.log("X= " + mousex  +  " ,Y= "+mousey);

circle(mousex,mousey);

}
    function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mousex,mousey,40,0,2*Math.PI);
    ctx.stroke();
}


function cleararea(){
ctx.clearRect(0,0,canvas.width,canvas.height);

}