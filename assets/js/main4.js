console.log("Hola js")

const firstNumber = prompt("Ingrese el primer número")
const secondNumber = prompt("Ingrese el segundo número")
const thirdNumber = prompt("Ingrese el tercer número")
const fourthNumber = prompt("Ingrese el cuarto número")
const fifthNumber = prompt("Ingrese el quinto número")

const suma = `La suma de todos los números es: ${parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber) + parseInt(fourthNumber) + parseInt(fifthNumber)}`
console.log(suma)

const promedio = `El promedio de todos los números es: ${(parseInt(firstNumber) + parseInt(secondNumber) + parseInt(thirdNumber) + parseInt(fourthNumber) + parseInt(fifthNumber)) / 5} `
console.log(promedio)