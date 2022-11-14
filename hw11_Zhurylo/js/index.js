document.addEventListener('DOMContentLoaded', function () {

    let array = []

//1
    let firstResult = ''
    for (let i = 20; i <= 30; i = i + 0.5) {
        firstResult += `${i} `
    }
    console.log(firstResult)
//2
    const dollar = 27
    let nDollars
    for (let i = 10; i <= 100; i = i + 10) {
        nDollars = i * dollar
        array.push(nDollars)
    }
    console.log(array.toString())

//3
    array.length = 0
    const firstNumber = Number(prompt('Enter a number'))
    if (!firstNumber || isNaN(firstNumber)) {
        alert('PLease, enter a number')
        location. reload()
    }
    for (let i = 1; i <= 100; i++) {
        if (i*i <= firstNumber) {
            array.push(i)
        } else {
            break
        }
    }
    console.log(array.toString())

//4
    let secondNumber = Number(prompt('Enter a prime number'))
    if (!secondNumber || isNaN(secondNumber)) {
        alert('PLease, enter a number')
        location.reload()
    }
    let isPrime = true

    for (let i = 2; i < secondNumber; i++) {
        if (secondNumber % i === 0) {
            isPrime = false
            break
        }
    }

    if (isPrime) {
        console.log(`${secondNumber} is a prime number`)
    } else console.log(`${secondNumber} is not a prime number`)

//5
    let thirdNumber = Number(prompt('Enter a number'))
    if (!thirdNumber || isNaN(thirdNumber)) {
        alert('PLease, enter a number')
        location.reload()
    }

    let isPossible
    let powResult = 1
    while (powResult < thirdNumber) {
        powResult = powResult * 3
        if (powResult === thirdNumber) {
            isPossible = true
        }
    }
    if (isPossible) {
        console.log( `You can get this number by raising the number 3 to a certain power`)
    } else console.log(`You can't get this number by raising the number 3 to a certain power`)
})