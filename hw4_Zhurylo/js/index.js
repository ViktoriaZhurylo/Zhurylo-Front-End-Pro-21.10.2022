document.addEventListener('DOMContentLoaded', function (){
    const firstNumber = +prompt('write first number')
    const secondNumber = +prompt('write second number')
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Write numbers!!!!!!')
    } else {
        alert(`
     Користувач ввів ${firstNumber} і ${secondNumber}:
      ${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}
      ${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}
      ${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}
      ${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}
    `)
    }
})



