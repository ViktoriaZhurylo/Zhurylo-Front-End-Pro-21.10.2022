document.addEventListener('DOMContentLoaded', function () {
    const hoursAmount = +prompt('write amount of hours')
    if (isNaN(hoursAmount)) {
        alert('write amount of hours!!!')
        location. reload()
    } else {
        const secAmount = hoursAmount * 60 * 60
        alert(secAmount)
    }

})

