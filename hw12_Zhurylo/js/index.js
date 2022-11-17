document.addEventListener('DOMContentLoaded', function () {
    const array = []
    const arrayLength = Number(prompt('Enter array lenth'))
    console.log(arrayLength)
    for (let i = 1; i <= arrayLength; i++) {
        array.push(prompt(`Enter array element ${i}`))
    }
    console.log(array)
    console.log(array.sort())
    array.splice(1,3)
    console.log(array)
})