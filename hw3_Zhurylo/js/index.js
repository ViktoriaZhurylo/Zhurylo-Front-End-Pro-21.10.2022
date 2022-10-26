document.addEventListener('DOMContentLoaded', function (){
    let userName = prompt('What is your name?')
    let userAge = prompt('How old are you?')
    let userCity = prompt('Where are you from?')
    alert(userAge + userName + userCity)

    const number = prompt('Enter a five digit number')
    const result = number.split('').join(' ')
    console.log(result)
})
