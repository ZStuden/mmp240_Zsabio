/* function showMenu(){
        var  menu = document.getElementById("topmenu");
        if  (menu.style.display==="none" || menu.style.display === ''){
            menu.style.display="block";
        } else {
        menu.style.display="none";
            }
        }  */

function showMenu(){
    const menu = document.getElementById("topmenu");
    menu.classList.toggle("open");
}

window.onclick = function(event) {
    if (!event.target.matches(".dropdown-programs")) {
        var dropdowns = document.getElementsByClassName(".dropper");
        var i;
        for (i=0; i<dropdowns.length i++) {
            var openDropDown = dropdowns[i];
            if (openDropDown.classList.contains('open')) {
                openDropDown.classList.remove ('show');
            }
        }
    }
}

/* function toggleDropper(id){
    var dropper = document.getElementById(id);
    if (dropper.style.display === "none" || dropper.style.display ==="") {
        dropper.style.display = "block";
    } else {
        dropper.style.display ="none";
    }
} */

function toggleDropper(id){
    var dropper = document.getElementById(id);
    dropper.classList.toggle("open");
}

