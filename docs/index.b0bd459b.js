document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("h1, h2").forEach(e=>{let t="",n=e.textContent;e.setAttribute("aria-label",n);for(let e=0;e<n.length;e++)e%3==2?t+=`<span class='n3'>${n[e]}</span>`:e%3==1?t+=`<span class='n2'>${n[e]}</span>`:t+=`<span class='n1'>${n[e]}</span>`;e.innerHTML=t})}),window.addEventListener("load",e=>{document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",t=>{let n=new URL(e.getAttribute("href"),window.location.href),a=window.location.hostname;if(n.hostname!==a){let e=n.hostname.split("."),t=e.length>1?e[e.length-2]:e[0];fathom.trackEvent(`External link clicked: ${t}`)}})})});
//# sourceMappingURL=index.b0bd459b.js.map
