const slide = () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav-bar-list");

    burger.addEventListener("click", () => {
        nav.classList.toggle("burger-menu-active");
    })

}

slide();