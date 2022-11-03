document.addEventListener('DOMContentLoaded', function () {

    //CANCEL
    let uhOhResult = `It is a pity that you did not want to enter your`


    //AGE
    //variables
    const userYearOfBirth = Number(prompt('Enter your year of birth'))
    let ageResult
    const currentYear = new Date().getFullYear()
    //conditions
    if (!userYearOfBirth && !isNaN(userYearOfBirth)) {
        ageResult = `${uhOhResult} age.`
    } else if (isNaN(userYearOfBirth)) {
        alert('Write your year of birth!')
        return location.reload()
    } else if (String(userYearOfBirth).length !== 4) {
        alert('Write your year of birth correctly!')
        return location.reload()
    } else {
        ageResult = `Your age is ${currentYear - userYearOfBirth}`
    }


    //CITY
    //variables
    let userCity = prompt('Enter your City').toLowerCase()
    let cityResult
    const cityCapitals = {
        'kyiv': 'Ukraine',
        'london': 'UK',
        'washington': 'US',
    }
    //conditions
    if (!userCity) {
        cityResult = `${uhOhResult} city.`
    } else if (!isNaN(+userCity) && typeof +userCity === 'number') {
        alert('Write your City!')
        return location.reload()
    } else {
        cityResult = `You live in ${userCity}`
    }
    if (Object.keys(cityCapitals).includes(userCity)) {
        cityResult = `You live in the capital of ${cityCapitals[userCity]}`
    }


    //SPORT
    //variables
    const userSport = prompt('Enter your favorite sport')
    let sportResult
    const sportChampions = {
        'football': 'Cristiano Ronaldo',
        'basketball': 'Giannis Antetokounmpo',
        'volleyball': 'Gavin Schmitt',
    }
    //conditions
    if (!userSport) {
        sportResult = `${uhOhResult} favorite sport.`
    } else if (!isNaN(+userSport) && typeof +userSport === 'number') {
        alert('Write your favorite sport!')
        return location.reload()
    } else {
        sportResult = `Your favorite sport is ${userSport}`
    }

    if (Object.keys(sportChampions).includes(userSport)) {
        sportResult = `Your favorite sport is ${userSport}. Cool, you wanna became ${sportChampions[userSport]}`
    }


    //FINAL ALERT
    alert(`
       ${ageResult}
       ${cityResult}
       ${sportResult}    
    `)
})

