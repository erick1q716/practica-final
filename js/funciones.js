function mostrar(id) {
    let secciones = document.querySelectorAll(".seccion");
    secciones.forEach(function(seccion) {
        seccion.classList.remove("activa");
    });
    document.getElementById(id).classList.add("activa");
}
function descripcion(texto) {
    document.getElementById("descripcion").innerHTML = texto;
}
function agregarRegalo() {
    let regalo = document.getElementById("regalo").value;
    if(regalo.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = regalo;
        document.getElementById("listaRegalos").appendChild(li);
        document.getElementById("regalo").value = "";
    } 
    else {
        alert("Escribe un regalo");
    }
}
let total = 0;
function comprar(nombre, precio) {
    let li = document.createElement("li");
    li.textContent = nombre + " - Bs " + precio;
    document.getElementById("carrito").appendChild(li);
    total = total + precio;
    document.getElementById("total").innerHTML="Total: Bs " + total;
}
function vaciar() {
    document.getElementById("carrito").innerHTML ="";
    total = 0;
    document.getElementById("total").innerHTML ="Total: Bs 0";
}