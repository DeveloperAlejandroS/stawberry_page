// Definimos showtab en el ámbito global para que sea accesible desde HTML
function showtab(tabId) {
    document.getElementById("delivery").style.display = "none";
    document.getElementById("takein").style.display = "none";

    document.querySelector(".delivery").classList.remove("active-tab");
    document.querySelector(".takein").classList.remove("active-tab");

    document.getElementById(tabId).style.display = "block";

    if (tabId === "delivery") {
        document.querySelector(".delivery").classList.add("active-tab");
    } else {
        document.querySelector(".takein").classList.add("active-tab");
    }
}

// Al cargar el DOM, ejecutamos el resto del código
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar solo "A Domicilio" al inicio
    showtab("delivery");

    // Efecto scroll para header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu toggle para móviles
    const toggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');

    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });

    // Cerrar menú al hacer scroll
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});
