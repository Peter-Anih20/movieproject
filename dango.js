const opt = document.getElementById("x");
const open = document.getElementById("z");
const menu = () => {
    opt.classList.toggle("show");
    open.classList.toggle("menu");
   
}
open.addEventListener("click", menu)