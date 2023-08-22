// 1)
function sendBig(num1, num2) {
    if (num1 > num2)
        return num1;
    return num2;
}
// console.log(sendBig(99,2222));
// 2)
function printBig(num1, num2) {
    if (num1 > num2)
        console.log(num1);
    else
        console.log(num2);
}
// printBig(300,50)
// 3)
function isOdd(num) {
    if (num % 2 === 0)
        console.log("number is dual");
    else
        console.log("number is odd");
}
// isOdd(2)
// 4)
function strLength(str) {
    var count = 0;
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        count++;
    }
    return count;
}
// 5)
function arrOneUntillN(n) {
    var myArr = [];
    for (var i = 1; i < n + 1; i++) {
        myArr.push(i);
    }
    return myArr;
}
// 6)
function bigInArr(myArr) {
    var max = 0;
    for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
        var num = myArr_1[_i];
        if (num > max)
            max = num;
    }
    return max;
}
var myPerson = {
    name: "david balboa",
    age: 30,
    isStudent: true
};
// 8)
function printPerson(person) {
    var nameStr = person.name;
    var ageStr = person.age.toString();
    var isStudentStr = person.isStudent.toString();
    console.log("name: ".concat(nameStr, ", age: ").concat(ageStr, ", isStudent: ").concat(isStudentStr));
}
// 9)
function isMinor(person) {
    if (person.age < 18)
        return true;
    else
        return false;
}
;
var book1 = { title: "eragon", author: "christopher", year: 2007 };
var book2 = { title: "The Hobbit", author: "J.R.R. Tolkin", year: 1920 };
// 12)
function oldestReader(arr) {
    var index = 0;
    var maxAge = 0;
    for (var i = 0; i < arr.length; i++) {
        if (maxAge < arr[i].age) {
            maxAge = arr[i].age;
            index = i;
        }
    }
    return arr[index];
}
var reader1 = { name: "jo", age: 15, isStudent: true, favoriteBook: book1 };
var reader2 = { name: "dani", age: 30, isStudent: true, favoriteBook: book2 };
var readersArr = [reader1, reader2];
// 13)
function oldestBook(arr) {
    var index = 0;
    var maxYear = arr[0].favoriteBook.year;
    for (var i = 0; i < arr.length; i++) {
        if (maxYear > arr[i].favoriteBook.year) {
            maxYear = arr[i].favoriteBook.year;
            index = i;
        }
    }
    return arr[index].favoriteBook;
}
