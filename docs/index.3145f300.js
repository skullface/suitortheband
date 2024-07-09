document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("h1, h2").forEach(e=>{let t="",n=e.textContent;e.setAttribute("aria-label",n);for(let e=0;e<n.length;e++)e%3==2?t+=`<span class='n3'>${n[e]}</span>`:e%3==1?t+=`<span class='n2'>${n[e]}</span>`:t+=n[e];e.innerHTML=t})});
//# sourceMappingURL=index.3145f300.js.map
