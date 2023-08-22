// 1)
function sendBig(num1: number, num2: number): number {
    if (num1 > num2) return num1;
    return num2
}
// console.log(sendBig(99,2222));

// 2)
function printBig(num1: number, num2: number): void {
    if (num1 > num2) console.log(num1);
    else console.log(num2);
}
// printBig(300,50)

// 3)
function isOdd(num: number): void {
    if (num%2 === 0) console.log("number is dual");
    else console.log("number is odd");
}
// isOdd(2)

// 4)
function strLength(str: string): number {
    let count: number = 0;
    for (let char of str) {
        count++;
    }
    return count
}

// 5)
function arrOneUntillN(n: number): number[] {
    let myArr: number[] = [];
    for (let i: number = 1; i < n+1; i++) {
        myArr.push(i);
    }
    return myArr
}

// 6)
function bigInArr(myArr: number[]) {
    let max: number = 0;
    for (let num of myArr) {
        if (num > max) max = num
    }   
    return max
}

// 7)
type Person = {name: string, age: number, isStudent: boolean};
const myPerson: Person = 
{
    name: "david balboa",
    age: 30,
    isStudent: true
}

// 8)
function printPerson(person: Person) {
    const nameStr: string = person.name;
    const ageStr: string = person.age.toString();
    const isStudentStr: string = person.isStudent.toString();
    console.log(`name: ${nameStr}, age: ${ageStr}, isStudent: ${isStudentStr}`);
}


// 9)
function isMinor(person: Person) {
    if (person.age < 18) return true
    else return false
}

// 10)
interface Book {
    title: string,
    author: string,
    year: number
};

const book1: Book = {title: "eragon", author: "christopher", year: 2007}
const book2: Book = {title: "The Hobbit", author: "J.R.R. Tolkin", year: 1920}

// 11)
type Reader = {name: string, age: number, isStudent: boolean, favoriteBook: Book};

// 12)
function oldestReader(arr: Reader[]) {
    let index: number = 0; 
    let maxAge: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (maxAge < arr[i].age) {
            maxAge = arr[i].age;
            index = i;
        }
    }
    return arr[index]
} 

const reader1: Reader = {name: "jo", age: 15, isStudent: true, favoriteBook: book1}
const reader2: Reader = {name: "dani", age: 30, isStudent: true, favoriteBook: book2}
const readersArr: Reader[] = [reader1, reader2];

// 13)
function oldestBook(arr: Reader[]): Book {
    let index: number = 0; 
    let maxYear: number = arr[0].favoriteBook.year;
    for (let i = 0; i < arr.length; i++) {
        if (maxYear > arr[i].favoriteBook.year) {
            maxYear = arr[i].favoriteBook.year;
            index = i;
        }
    }
    return arr[index].favoriteBook
}
