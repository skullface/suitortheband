!function(){class e{constructor(){this.offset=.1}move(){document.querySelectorAll(".merch-link").forEach(e=>{let t=e.querySelector(".item"),o=e.querySelector(".shadow");t.addEventListener("mousemove",e=>this.calc(e,o))})}px=e=>`${e}px`;calc=(e,t)=>{let{offsetX:o,offsetY:n,currentTarget:s}=e,{width:i,height:r}=s.getBoundingClientRect(),{offset:c}=this,l=this.px((i/2-o)*c/2),a=this.px((r/2-n)*c/2);t.style.transform=`translate(${l}, ${a})`};init(){this.move()}}document.addEventListener("DOMContentLoaded",()=>{new e().init()})}();
//# sourceMappingURL=index.3aaa7763.js.map
