document.addEventListener('DOMContentLoaded', function () {
    // //1
    const array1 = [1, 5, 'hello', 7, '46']
    let onlyNum = []
    let arithmeticMean
    function getArithmeticMean (array1) {
        onlyNum = array1.filter(function (value) {
            return typeof(value) === "number"
        })
        const sum = onlyNum.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue
        })
        arithmeticMean = sum / onlyNum.length
        return arithmeticMean
    }
    console.log(`1. ${getArithmeticMean(array1)}`)

    // //2
    const firstNumber = +prompt('Enter the first number')
    const secondNumber = +prompt('Enter the second number')
    const operations = {
        PLUS: '+',
        MINUS: '-',
        MULTY: '*',
        DIV: '/',
        POW: '^'
    }

    function operationCheckFactory (basicOperation) {
        return function (oprationForCheck) {
            return basicOperation === oprationForCheck
        }
    }

    const isPlus = operationCheckFactory(operations.PLUS)
    const isMinus= operationCheckFactory(operations.MINUS)
    const isMulty = operationCheckFactory(operations.MULTY)
    const isDiv = operationCheckFactory(operations.DIV)
    const isPow = operationCheckFactory(operations.POW)

    function doMath (x, znak, y) {
        let result
        if (isPlus(znak)) {
            result = x + y
        } else if (isMinus(znak)) {
            result = x - y
        } else if (isMulty(znak)) {
            result = x * y
        } else if (isDiv(znak)) {
            result = x / y
        } else if (isPow(znak)) {
            let i
            if (y<0) {
                console.log(y)
                result = x
                for (i = 1; i <= y*(-1)+1; i++) {
                    result = result / x
                    console.log(result)
                }
            }
            if (y===0) {
                result = 1
            } else if (y===1) {
                result = x * y
            } else if (y>=2) {
                result = x
                for (i = 1; i < y; i++) {
                    result = result * x
                }
            }
        } else {
            alert('Please enter an operation!')
            location.reload()
        }
        return result
    }
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Write numbers!!!!!!')
        location.reload()
    }
    else {
        const userOperation = prompt('Enter which operation you want to do: +, -, *, /, ^')
        console.log(`2. ${doMath(firstNumber, userOperation, secondNumber)}`)
    }

    //3
    const mainArray = []
    const mainArrayLength = Number(prompt('Enter main array length'))

    function arrayConstructor (mainArray, Length) {
        for (let i = 1; i <= Length; i++) {
            let internalArray = []
            let internalArrayLength = Number(prompt('Enter internal array length'))
            function internalArrayConstructor (internalArray, Length) {
                for (let i = 1; i <= Length; i++) {
                    internalArray.push(prompt(`Enter ${i} internal array element `))
                }
                return internalArray
            }
            mainArray.push(internalArrayConstructor(internalArray, internalArrayLength))
        }
        return mainArray
    }
    console.log(arrayConstructor(mainArray, mainArrayLength))

    //4
    const userString = prompt('Type anything')
    let nadaLiCyclitIliNiNada = true
    const whichRemove = []
    do {
        let kek = prompt('Enter the symbol you want to remove')
        if (kek) {
            whichRemove.push(kek)
        } else break
    } while (nadaLiCyclitIliNiNada)

    function removeSymbols (string, whichRemove) {
        let result = string
        whichRemove.forEach(function (element) {
            result = result.replaceAll(element, '')
        })
        return result
    }

    alert(removeSymbols(userString, whichRemove))
})
