// hamburger menu

const hamburgerr = document.querySelector(".hamburgerr")
const navimenu = document.querySelector(".navi-menu")

hamburgerr.addEventListener("click", () => {
    hamburgerr.classList.toggle("active");
    navimenu.classList.toggle("active");
})

document.querySelectorAll(".navvLinks").forEach(n => n.addEventListener("click", () => {
    hamburgerr.classList.remove("active");
    navimenu.classList.remove("active");
}))


// navbar scroll event
const navibar = document.querySelector(".navi-bar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
        navibar.classList.add("active_nav");
    }else {
        navibar.classList.remove("active_nav");
    }
})

