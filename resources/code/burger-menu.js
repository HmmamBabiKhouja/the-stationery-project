const time = () => {
  var today = new Date();
  var time =today.getHours() + ":" + today.getMinutes();
  alert(time);  
}

const slide = () => {
    const burger = document.querySelector(".burger-menu");

    const nav = document.querySelector(".nav-bar-list");

    burger.addEventListener("click", () => {
        nav.classList.toggle("burger-menu-active");
    })
    
    burger.addEventListener("click", () => {
        burger.classList.toggle("burger-move");
    })

}
const run=()=>{
    time();
    slide();
}

run();