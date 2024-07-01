const agregar = document.getElementById("agregar");
const pop_container = document.getElementById("pop_container");
const close = document.getElementById("pop_cerrar");

agregar.addEventListener("click", () => {
    pop_container.classList.add("show");
    alert("prueba");
});

close.addEventListener("click", () => {
    pop_container.classList.remove("show");
});
