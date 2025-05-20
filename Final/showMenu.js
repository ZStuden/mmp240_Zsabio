function showMenu() {
    const menu = document.getElementById("topmenu");
    menu.classList.toggle("open");
}

function toggleDropper(id) {
    const allDroppers = document.getElementsByClassName("dropper");

    for (let i = 0; i < allDroppers.length; i++) {
        if (allDroppers[i].id !== id) {
            allDroppers[i].classList.remove("open");
        }
    }

    const dropper = document.getElementById(id);
    dropper.classList.toggle("open");
}

window.onclick = function (event) {
    const isBurger = event.target.closest(".burger-icon");
    const isProgramButton = event.target.closest(".program-button");
    const isDropper = event.target.closest(".dropper");


    if (!isBurger) {
        document.getElementById("topmenu").classList.remove("open");
    }

    if (!isProgramButton && !isDropper) {
        const allDroppers = document.getElementsByClassName("dropper");
        for (let i = 0; i < allDroppers.length; i++) {
            allDroppers[i].classList.remove("open");
        }
    }
}
