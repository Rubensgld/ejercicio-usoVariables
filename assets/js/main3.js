console.log("Hola js")

const cantidadDeDias = parseInt(prompt("Ingresa la cantidad de días:"))

const years = Math.floor(cantidadDeDias / 365)
const diasRestantes = cantidadDeDias % 365
const semanas = Math.floor(diasRestantes / 7)
const ultimosDias = diasRestantes % 7

console.log(cantidadDeDias + " " + "días equivalen a:")
console.log("Años:" + " " + years)
console.log("Semanas:" + " " + semanas)
console.log("Días:" + " " + ultimosDias)