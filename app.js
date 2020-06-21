const str = "#### #";

for (let i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

for (let i in str) {
    console.log(str.charAt(i));
}
console.log(isSafeBridge(str));

function isSafeBridge(str) {
    for (let i in str) {
        if (str.charAt(i) ===' ') {
            return false;
       }
    }
    return true;
}



const str = "Hello world!";

console.log(doubleChar(str));

function doubleChar(str) {
    let doubleStr = '';
    for (let i in str) {
        doubleStr = doubleStr + str.charAt(i) + str.charAt(i);
    }
    return doubleStr;
}

const today = new Date(3000, 11, 24);

console.log(timeForMikeAndCookies(today));
function timeForMikeAndCookies(date) {
    let month = date.getMonth();
    let day = date.getDate();
    if (month === 11 && day === 24) {
        return true;
    }
    else {
        return false;
    }
}

let str = "khandbari";

console.log(str.replace(str.charAt(1), '1'));

function replaceVowel(str) {
    let re = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    };
    
    return str.replace(/[aeiou]/g, el => re[el]);
}
console.log(replaceVowel(str));

console.log(isRepDigit(-4444));
function isRepDigit(num) {
 
    if (num === 0) {
        return true;
    }
    else if (num > 0 && num < 10) {
        return true;
    }
    else if (num < 0) {
        return false;
    }
    else {
        let arr = [];
        let reminder, count = 0;
        while (num !== 0) {
            reminder = num % 10;
            num = Math.floor(num / 10);
            arr.push(reminder);
        }

        for (let i in arr) {
            if (arr[i] === arr[0]) {
                count++;
            }
        }
        if (count === arr.length) return true;
        else return false;
    }
}


function getBudgets(arr) {
    return arr.reduce((accumulatedBudget, el) => accumulatedBudget + el.budget, 0);
};
arr = [
    { name: "John", age: 21, budget: 23000 },
    { name: "John", age: 21, budget: 21000 },
    { name: "John", age: 21, budget: 24000 },
    { name: "John", age: 21, budget: 2000 },
    { name: "John", age: 21, budget: 33000 }
];
console.log(getBudgets(arr));

function matchHouses(step) {
    if (step === 0) return 0;
    else return (step * 6 - (step - 1));
}

console.log(matchHouses(0));

function addUp(num) {
    return Math.floor((num + 1) * num/2);
}
console.log(addUp(600));

function numberSyllables(word) {

    const words = word.split('-');
    return words.length;
	
}
console.log(numberSyllables("beau-ti-ful"));

function charCount(myChar, str) {
    return [...str].filter(x => x === myChar).length;
	
}
console.log(charCount("b", "big fat bubble"));

function canNest(arr1, arr2) {
    const arr1Min = Math.min(...arr1);
    const arr2Min = Math.min(...arr2);
    const arr1Max = Math.max(...arr1);
    const arr2Max = Math.max(...arr2);
    if (arr1Min > arr2Min && arr1Max < arr2Max) {
        return true;
    }
    return false;

}

console.log(canNest([1, 2, 3, 4], [2, 3]));

const minMax = arr => [Math.min(...arr), Math.max(...arr)];

console.log(minMax([1, 2, 3, 4, 5]));

function unrepeated(str) {
    let mySet = [...new Set(str)].join("");
    return mySet;
	
}

console.log(unrepeated("hello"));

function factorial(num) {
    if (num < 0) return;
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));

function squareDigits(n) {
    const str = n.toString();
    let resultStr = '';
    for (let i in str) {
        resultStr = resultStr + str.charAt(i) * str.charAt(i);
    }
    return parseInt(resultStr);
}
console.log(squareDigits(9119));

function triangle(n) {
    return Math.floor(n * (n + 1) / 2);
}
console.log(triangle(6));

function rps(p1, p2) {

    if (p1 === p2) return "It's a draw";
    else if (p1 === "Rock" && p2 === "Scissors") return "The winner is p1";
    else if (p2 === "Rock" && p1 === "Scissors") return "The winner is p2";
    else if (p2 === "Paper" && p1 === "Scissors") return "The winner is p1";
    else if (p1 === "Paper" && p2 === "Scissors") return "The winner is p2";
    else if (p2 === "Rock" && p1 === "Paper") return "The winner is p1";
    else if (p1 === "Rock" && p2 === "Paper") return "The winner is p2";
	
};

console.log(rps("Scissors", "Paper"));

const uniqueSort = arr => {
    arr.sort((a,b) => a - b);
    let mySet = new Set();

    for (let i in arr) {
        mySet.add(arr[i]);
    }

    return [...mySet];

}
console.log(uniqueSort([1, -27, 100, 2, 1]));


const matrix = (x, y, z) => {
    return Array(x).fill(Array(y).fill(z));
}
console.log(matrix(2, 1, "edabit"));


var a = 2;
foo();

function foo() {
    a = 3;
    console.log(a); var a;
}
console.log(a);
const arr = ["foo", "bar", "baz"];
arr.length = 1;
arr.push("hello");
console.log(arr);

console.log(-10>9>8 ===true)
var obj = { a: 10 }
Object.create(obj);
const myArr = ["raju", "rdg", "nfhf", "hfhfh"]
myArr[3]
console.log("3" in myArr)

function binary(decimal) {
    let binaryNum = [];
    if (decimal === 0) return '0';
    while (decimal !== 0) {
        binaryNum.push(decimal % 2);
        decimal = Math.floor(decimal / 2);
    }
    return binaryNum.reverse().join('').toString();
}

function binary(d) {
    return d.toString(2);
}
console.log(binary(5));

function getAbsSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + Math.abs(currentValue),0);	
}
console.log(getAbsSum([-3, -4, -10, -2, -3]));