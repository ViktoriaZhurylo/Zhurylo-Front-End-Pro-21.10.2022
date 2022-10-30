const firstNumber = +prompt('Enter the first number')
const secondNumber = +prompt('Enter the second number')
const thirdNumber = +prompt('Enter the third number')
    if ( (isNaN(firstNumber)) || (isNaN(secondNumber)) || (isNaN(thirdNumber))) {
        alert('One of the values you entered is not a number! You need to enter the numbers')
        location. reload()
    } else {
        alert(`${(firstNumber+secondNumber+thirdNumber)/3}`)
    }
