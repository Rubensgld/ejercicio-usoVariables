
console.log("vinculando js")

//Solicitar al usuario un número mayor y distinto de 0
const numeroUno = prompt("Ingrese el primer número mayor y distintos de 0")
const numeroDos = prompt("Ingre el segundo número mayor y distinto de 0")

while (numeroUno <= 0 || isNaN(numeroUno)) {

    numeroUno = parseInt(prompt("El número ingresado no es válido, por favor ingrese un número mayor y distinto de 0"))
}

//Mostrar el número válido ingresado por el usuario


const suma = `El resultado de la suma es: ${parseInt(numeroUno) + parseInt(numeroDos)}`
console.log(suma)

const resta = `El resultado de la resta es: ${parseInt(numeroUno) - parseInt(numeroDos)}`
console.log(resta)

const division = `El resultado de la división es: ${parseInt(numeroUno) / parseInt(numeroDos)}`
console.log(division)

const multiplicacion = `El resultado de la multiplicación es: ${parseInt(numeroUno) * parseInt(numeroDos)}`
console.log(multiplicacion)

const modulo = `El resultado del módulo es: ${parseInt(numeroUno) % parseInt(numeroDos)}`
console.log(modulo)