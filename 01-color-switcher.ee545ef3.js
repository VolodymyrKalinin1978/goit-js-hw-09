!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyStyles:document.querySelector("body")};t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled",!0),t.stopBtn.removeAttribute("disabled"),intervalId=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(intervalId),t.startBtn.removeAttribute("disabled"),t.stopBtn.setAttribute("disabled",!0)}));var e=function(){var e="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"));t.bodyStyles.style.background="linear-gradient(to bottom, ".concat(e,", #fff)"),t.bodyStyles.style.backgroundRepeat="no-repeat",t.bodyStyles.style.backgroundSize="100% 100%",document.documentElement.style.height="100%"}}();
//# sourceMappingURL=01-color-switcher.ee545ef3.js.map
