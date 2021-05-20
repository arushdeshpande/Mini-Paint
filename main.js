var canvas = document.getElementById("canvas_paint")
var pen = canvas.getContext("2d")
var mousedown = false

canvas.onmousedown=function(){mousedown=true}
canvas.onmouseup=function(){mousedown=false}
canvas.onmouseleave=function(){mousedown=false}
var x1,y1,x2,y2; 
canvas.onmousemove=function(e){
    x1=e.offsetX
    y1=e.offsetY
    if(mousedown==true){
        pen.beginPath()
        if(getWidth()!=""){
            pen.lineWidth=getWidth()
        }
        else{
            pen.lineWidth=3
        }
        if(getColor()!=""){
            pen.strokeStyle=getColor()
        }
        else{
            pen.strokeStyle="black"
        }
        pen.moveTo(x1,y1)
        pen.lineTo(x2,y2)
        pen.stroke()
    }
    x2=x1
    y2=y1
}
canvas.ontouchstart=function(e){
    x1=e.touches[0].clientX-canvas.offsetLeft;
    y1=e.touches[0].clientY-canvas.offsetTop-window.scrollY;
}
canvas.ontouchmove=function(e){
    x2=e.touches[0].clientX-canvas.offsetLeft;
    y2=e.touches[0].clientY-canvas.offsetTop-window.scrollY;
    console.log(y2)
    pen.beginPath()
        if(getWidth()!=""){
            pen.lineWidth=getWidth()
        }
        else{
            pen.lineWidth=3
        }
        if(getColor()!=""){
            pen.strokeStyle=getColor()
        }
        else{
            pen.strokeStyle="black"
        }
        pen.moveTo(x1,y1)
        pen.lineTo(x2,y2)
        pen.stroke();
        x1=x2;
        y1=y2
}
function clr(){
    pen.clearRect(0,0,800,600)
}
function getColor(){
    return document.getElementById("Color").value
}
function getWidth(){
    return document.getElementById("Width").value
}
function setDimension(){
    if(screen.width<428){
        canvas.width=screen.width-30;
        document.body.style.overflowX="hidden"
    }
}