document.addEventListener('DOMContentLoaded', function () {
    const pow = (num, degree) => {
        console.log(degree)
        if (degree === 1) {
            return num
        }
        if (degree === 0) {
            return 1
        }

        // Тут я намагалася зробити з від'ємною степенню, так чисто для себе,
        // але не до кінця вдалося цю проблему вирішити:
        // if (degree < 0) {
        //     if (num < 0) {
        //         let result = num * pow(num, degree - 1)
        //         return -(result * result / result)
        //     }
        //     return num / pow(num, -degree + 1)
        // } else {

            if (num < 0) {
                let result = num * pow(num, degree - 1)
                return -(result * result / result)
            }
            return num * pow(num, degree - 1)
        // }
    }

    const firstNumber = Number(prompt('Enter the first number'))
    const secondNumber = Number(prompt('Enter the second number'))

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Something went wrong. Try enter the numbers again')
        return location.reload()
    }
    alert (`${firstNumber} ^ ${secondNumber} = ${pow(firstNumber,secondNumber)}`)
})