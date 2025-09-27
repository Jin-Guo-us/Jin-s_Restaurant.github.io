
// Mobile nav toggle
const burger=document.querySelector('.hamburger');const links=document.querySelector('.nav-links');
if(burger){burger.onclick=()=>links.classList.toggle('open');}
// Tiny slider
function tinySlider(id){
  const el=document.getElementById(id); if(!el) return;
  const track=el.querySelector('.slides'); const slides=el.querySelectorAll('.slide');
  let i=0; const go=(n)=>{i=(n+slides.length)%slides.length; track.style.transform=`translateX(-${i*100}%)`;}
  el.querySelector('.prev').onclick=()=>go(i-1);
  el.querySelector('.next').onclick=()=>go(i+1);
  go(0);
}
document.addEventListener('DOMContentLoaded',()=>tinySlider('gallery'));
