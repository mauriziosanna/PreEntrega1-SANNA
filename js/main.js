function ingreso(name="nombreCompleto", id="documento") {
    alert("Bienvenido " + name + ". " + "ID de usuario: " + id) ;
}

let nombreCompleto = prompt("Ingresá tu nombre completo");
let id = prompt("Ingresá tu número de documento");

ingreso(nombreCompleto, id)


alert("Simulá tus rendimientos en plazo fijo a interés simple en solo un click.")
alert("TNA = 125%")
let capital = Number(prompt("Ingresá el capital a invertir"));
let plazo = Number(prompt("Ingresá la cantidad de días de inversión"));
let tasa = 125 / 365 / 100;
let resultado = capital * plazo * tasa
console.log(capital)
console.log(plazo)
console.log(tasa)



if ((capital >= 1000) && (plazo >= 30)) {
    alert("El resultado de tu inversión sería $" + resultado);
} else {
    alert("Error: El monto mínimo a invertir son $1000 y el plazo mínimo de inversión son 30 días.");
}

alert ("Escriba FCI, TP, INV para explorar otras alternativas de inversión o ESC para finalizar las consultas")
let ejemplos = prompt("Ingrese la opción que desee")

while (ejemplos != "ESC") {
    switch (ejemplos) {
        case "FCI" :
        alert ("Invierte en un FCI con rendimientos del 1,37% diarios");
        break;
        case "TP":
            alert("Invertí en TP con rendimientos en dólares de un 8% anual");
            break;
        case "INV":
            alert("Invertí en acciones, bonos y obligaciones negociables con rendimientos cercanos al 200% anual. Solo para perfiles de alto riesgo");
            break;
    }
    ejemplos = prompt("Ingresar otra opción que desee consultar o escriba ESC para finalizar")
}

