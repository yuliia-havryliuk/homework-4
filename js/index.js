//1. Write a JavaScript program which compute, the average marks of the following students
// Then, this average is used to determine the corresponding grade.

function task1(){
    let arrStudents = [
        {
            name: 'John',
            mark: '',
        },
        {
            name: 'Bill',
            mark: '',
        },
        {
            name: 'David',
            mark: '',
        },
        {
            name: 'Ryan',
            mark: '',
        },
        {
            name: 'Nick',
            mark: '',
        }]

    for (let i = 0; i < arrStudents.length; i++) {
        arrStudents[i].mark = (+prompt(`Write a mark for ${arrStudents[i].name}`))
    }
    console.log(arrStudents)

    const Sum = arrStudents.reduce((prev, next) => prev + next.mark, 0)
    const MiddleNum = Sum / arrStudents.length
    console.log(Sum)
    console.log(MiddleNum)

    if (MiddleNum < 60) {
        alert(`Arithmetic mean = F`);
    } else if (MiddleNum < 70) {
        alert(`Arithmetic mean = D`);
    } else if (MiddleNum < 80) {
        alert(`Arithmetic mean = C`);
    } else if (MiddleNum < 90) {
        alert(`Arithmetic mean = B`);
    } else if (MiddleNum < 100) {
        alert(`Arithmetic mean = A`);
    } else {
        console.log(`It's to high arithmetic mean`);
    }
}

//2.Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

function task2() {
    let n = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            n = i + n
            console.log(n)
        }
    }
    alert(`The sum of numbers is equal to = ${n}`)
}

//3.3. Write a JavaScript program to construct the following pattern, using a nested for loop.
//
// *
//
// * *
//
// * * *
//
// * * * *
//
// * * * * *

function task3() {
    let q = '*'
    let str = ''
    let emptyStr = ' '
    for (let i = 0; i < 5; i++) {
        str = str + q + emptyStr
        document.write(`${str}<br/><br/>`)
    }
}

