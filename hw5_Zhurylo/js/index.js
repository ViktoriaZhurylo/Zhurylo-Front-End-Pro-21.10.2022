const operation = prompt('write which operation: add, sub, mult, div?');
if (operation !== 'add' && operation !== 'sub' && operation !== 'mult' && operation !== 'div') {
    alert('Write an operation!!!!!!')
} else {
    const firstNumber = +prompt('write first number')
    const secondNumber = +prompt('write second number')

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Write numbers!!!!!!')
    } else {
        if (operation === "add") {
            alert(
                `${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`
            )
        }
        if (operation === "sub") {
            alert(
                `${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`
            )
        }
        if (operation === "mult") {
            alert(
                `${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`
            )
        }
        if (operation === "div") {
            alert(
                `${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`
            )
        }
    }
}
location.reload()
