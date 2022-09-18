//1.Write a function that takes a number and returns true if it is a positive number and false if it is a negative number.

function isNumberPositive(num) {

    var result;

    if (num >= 0) {
        result = true;
    } else if (num < 0) {
        result = false;
        }
    return result;
}
console.log(isNumberPositive(-1))
console.log(isNumberPositive(10))




//2.Write a function that takes a number of days and converts it into an age.

function convertDaysToAge(age) {
    return age/365
}
console.log(convertDaysToAge(3650))
console.log(convertDaysToAge(6570))



//3.Write a function that takes three numbers and returns the largest of the three numbers.

function getLargestNumber(array) {
    return Math.max.apply(Math,array)
}
let arr=[2,1,4]
let arr2=[6,2,3]
console.log(getLargestNumber(arr))



//4.Write a function that takes an array of names and returns the last name from the array of names.

const getLastName = (names) => {
    console.log(names[names.length - 1]);
}

getLastName(["Charlie", "Rob", "Andy"]);
getLastName(["Ash", "Stu"]);



//5.Write a function that takes an array of numbers and returns true if all of the numbers are positive. It should return false if there are one or more negative numbers in the array.

 function allNumbersPositive() {
 let numbers = [2, 4, 5,];
 let result = true;
 for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] <= 0) {
         result = false;
         break;
        }
    }
console.log(result)
}
 allNumbersPositive()


// Alternative
let numbers = [2,4,5];
let result = numbers.every(e=>e>0);
console.log(result)
