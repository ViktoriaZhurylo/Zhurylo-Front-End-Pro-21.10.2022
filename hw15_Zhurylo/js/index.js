document.addEventListener('DOMContentLoaded', function () {
    let confirmGenerate = confirm(`Click 'OK' if you want to generate a key`)
    if (confirmGenerate) {
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const keyLength = Number(prompt('Enter a key length number'))

        function getRandomInt (max) {
            return Math.floor(Math.random() * max)
        }
        function generateKey (length, characters) {
            let result = []
            for (let i = 0; i < length; i++) {
                result.push(characters.charAt(getRandomInt(characters.length)))
            }
            return result.join('')
        }

        const key = generateKey(keyLength, characters)
        alert(`Your generated key: ${key}`)
    } else {}
})