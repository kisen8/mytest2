!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=null;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.91e1e138.js.map
