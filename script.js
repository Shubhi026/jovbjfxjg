var h1 = document.querySelector("h1");

var lol = 0;

window.addEventListener("keydown", function(dets){
    if(dets.keyCode === 39||dets.keyCode === 37){
     if(dets.keyCode === 39){
         lol = lol + 50;
         h1.style.left = `${lol}px`;
        
     }
     if(dets.keyCode === 37){
         lol = lol - 50;
         h1.style.left = `${lol}px`;
     }
    if(dets.keyCode === 38||dets.keyCode === 40){}
}
})
var lop = 0;
window.addEventListener("keydown", function(det){
if(det.keyCode === 40){
    lop = lop + 50;
    h1.style.top = `${lop}px`;
   
}
if(det.keyCode === 38){
    lop = lop - 50;
    h1.style.top = `${lop}px`;
}
})