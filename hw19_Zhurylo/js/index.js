document.addEventListener('DOMContentLoaded', function () {
    const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

    let add = (total, value) => total + value

    let positiveElements = array => array.filter(item => item > 0)
    let positiveArray = array.filter(item => item > 0)

    let negativeElements = array => array.filter(item => item < 0)
    let negativeArray = negativeElements(array)

    let evenNumbers = array => array.filter(item => item % 2 === 0)
    let oddNumbers = (array) => array.filter(item => item % 2 !== 0)

    let positiveEvenNum = positiveElements(evenNumbers(array))
    let positiveOddNum = positiveElements(oddNumbers(array))

    let multy = (array) => {
        let result
        array.reduce((total,value) => result = total * value)
        return result
    }

    let largestNum = Math.max(...array)
    let smallestNum = Math.min(...array)
    let index

    //1
    let sum = positiveArray.reduce(add)
    let positiveAmount = positiveArray.length
    console.log(`1. Сума: ${sum}, Kількість: ${positiveAmount}`)

    //2
    index = array.indexOf(smallestNum)
    console.log(`2. Мінімальний елемент масиву: ${smallestNum}, його порядковий номер: ${index}`)

    //3
    index = array.indexOf(largestNum)
    console.log(`3. Максимальний елемент масиву: ${largestNum}, його порядковий номер: ${index}`)

    //4
    let negativeAmount = negativeArray.length
    console.log(`4. Кількість негативних елементів: ${negativeAmount}`)

    //5
    positiveAmount = positiveOddNum.length
    console.log(`5. Кількість непарних позитивних елементів: ${positiveAmount}`)

    //6
    positiveAmount = positiveEvenNum.length
    console.log(`6. Кількість парних позитивних елементів: ${positiveAmount}`)

    //7
    sum = positiveEvenNum.reduce(add)
    console.log(`7. Сума парних позитивних елементів: ${sum}`)

    //8
    sum = positiveOddNum.reduce(add)
    console.log(`8. Сума непарних позитивних елементів: ${sum}`)

    //9
    let product = multy(positiveArray)
    console.log(`9. Добуток позитивних елементів: ${product}`)

    //10
    let onlyTheLargest = array.map(value => value !== largestNum ? 0 : value)
    console.log('10. Найбільший серед елементів масиву:', onlyTheLargest)

})
