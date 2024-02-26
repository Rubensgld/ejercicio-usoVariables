console.log("Hola js")

const celsius = prompt("Ingrese grados celsius")

const kelvin = `Los grados equivalente en Kelvin son: ${parseInt(celsius) + 273.15}`
const farenheit = `Los grados equivalente en Farenheit son: ${(parseInt(celsius) * 9 / 5) + 32}`

console.log(kelvin)
console.log(farenheit)