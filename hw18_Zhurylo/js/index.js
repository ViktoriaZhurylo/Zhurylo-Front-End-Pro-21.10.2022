document.addEventListener('DOMContentLoaded', function () {
    function myFunc ()  {
        let result = 0
        return function (num) {
            result += num
            console.log(result)
        }
    }
    const sum = myFunc()
    sum(3)
    sum(5)
    sum(20)
})