document.addEventListener('DOMContentLoaded', function () {

    const array = [1, 2, 3, 4, 5, 6, 7];
    const userElement = Number(prompt(`Enter the item you want you remove from this list: ${array.join(', ')}`))
    function removeElement (array, item) {
        if (array.includes(item)) {
            array.splice(item - 1, 1)
            alert(`Now the list looks like this: ${array.join(', ')}`)

        } else {
            alert('The item you entered is not in the list. Please enter an item from the list')
            location.reload()
        }
    }
    removeElement(array, userElement );
})