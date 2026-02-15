
const cube = document.getElementById("cube");

let isDrag=false, startX, startY;
let rotX=-25, rotY=30;
let autoX=0.2, autoY=0.4;

cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;

// Drag functionality
document.addEventListener("mousedown", e=>{
  isDrag=true;
  startX=e.clientX;
  startY=e.clientY;
});
document.addEventListener("mouseup", ()=>isDrag=false);
document.addEventListener("mousemove", e=>{
  if(!isDrag) return;
  rotY += (e.clientX-startX)*0.4;
  rotX -= (e.clientY-startY)*0.4;
  cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  startX=e.clientX;
  startY=e.clientY;
});

// Auto rotate
function autoRotate(){
  if(!isDrag){
    rotY += autoY;
    rotX += autoX;
    cube.style.transform=`rotateX(${rotX}deg) rotateY(${rotY}deg)`;
  }
  requestAnimationFrame(autoRotate);
}
autoRotate();
