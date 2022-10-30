document.addEventListener('DOMContentLoaded', function (){
    const userName = prompt('What is your name?')
    const userAge = prompt('How old are you?')
    const userCity = prompt('Where are you from?')
    alert(userAge + userName + userCity)

    const number = prompt('Enter a five digit number')
    const result = number.split('').join(' ')
    console.log(result)
})
