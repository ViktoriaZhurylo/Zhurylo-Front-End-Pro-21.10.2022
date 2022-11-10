document.addEventListener('DOMContentLoaded', function () {

    let add;
    let naturalNumber;
    let array = [];

//1
    // FOR
    for (let i = 10; i < 21; i++) {
        array.push(i)
    }

    //WHILE
    // let i = 10
    // while (i < 21) {
    //     array.push(i)
    //     i++
    // }

    //DO...WHILE
    // let i = 10
    // do {
    //     array.push(i)
    //     i++
    // } while (i < 21)

    console.log(array.toString()); //result


//2
    for (let i = 10; i < 21; i++) {
        array.push(i*i)
    }
    console.log(array.toString());

//3
    array.length = 0
    let i = 2
    while (i < 11) {
        let multiplication = 7 * i
        let multiplicationResult = `7 * ${i} = ${multiplication}`
        array.push(multiplicationResult)
        i++
    }
    console.log(array.toString()); //result


//4
    add = 0
    for (let i = 1; i < 16; i++) {
        add +=i;
    }
    console.log(add);

//5
    let mult;
    mult = 1
    for (i = 15; i < 36; i++) {
        mult = mult * i;
    }
    console.log(mult);

//6
    add = 0
    for (let i = 1; i < 501; i++) {
        add +=i;
    }
    console.log(add/500);


//7
    add = 0
    for (let i = 30; i < 81; i++) {
        if ( i % 2 === 0) {
            add +=i;
        }
    }
    console.log(add);

//8
    array.length = 0
    for (let i = 100; i < 201; i++) {
        if ( i % 3 === 0) {
            array.push(i);
        }
    }
    console.log(array.toString()); //result

//9
    array.length = 0
    naturalNumber = Number(prompt('Enter any natural number'))
    if (naturalNumber <= 0) {
        alert('PLease, enter any natural number (from 1 or more)')
        location. reload()
    }
    for (let i = 1; i <= naturalNumber; i++){
        if (naturalNumber % i === 0) {
            array.push(i)
        }
    }
    console.log(array.toString()); //result


//10
    array.length = 0
    naturalNumber = Number(prompt('Enter any natural number'))
    if (naturalNumber <= 0) {
        alert('PLease, enter any natural number (from 1 or more)')
        location. reload()
    }
    for (let i = 1; i <= naturalNumber; i++){
        if (naturalNumber % i === 0 && i % 2 === 0) {
            array.push(i)
        }
    }
    console.log(array.length); //result

//11
    array.length = 0
    add = 0
    naturalNumber = Number(prompt('Enter any natural number'))
    if (naturalNumber <= 0) {
        alert('PLease, enter any natural number (from 1 or more)')
        location. reload()
    }
    for (let i = 1; i <= naturalNumber; i++){
        if (naturalNumber % i === 0 && i % 2 === 0) {
            add += i
        }
    }
    console.log(add); //result

//12
    let multiplicationArray = []
    let multiplication
    let multiplicationResult

    for (let i = 1; i <= 10; i++){
        let array = []
        for (let j = 1; j <= 10; j++) {
            multiplication = i * j
            multiplicationResult = `${i} * ${j} = ${multiplication}`
            array.push(multiplicationResult)
        }
        // console.log(array)
        multiplicationArray.push(array.join('\n'))
    }
        console.log(multiplicationArray.join('\n\n')); //result
})