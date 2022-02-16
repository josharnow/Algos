/* (1) Print 1-255
* Print all the integers from 1 to 255.
*/ 
const print1to255 = () => {
  for (let num = 1; num <= 255; num++) {
    console.log(num);
  }
}

/* (2) Print Sum 0-255
* Print integers from 0 to 255, and with each integer print the sum so far.
*/
const printSum0to255 = () => {
  let sum = 0;

  for (let num = 0; num <= 255; num++) {
    let prevSum = sum;
    sum += num;
    console.log(`Current integer: ${num}`);
    console.log(`Current sum: ${num} + ${prevSum} = ${sum}`);
  }
}

/* (3) Find and Print Max
* Given an array, find and print its largest element.
*/
const findAndPrintMax = (array) => {
  let max = array[0];
  let maxIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > max) {
      max = element;
      maxIndex = i;
    }
  }

  console.log(`Max array value: ${max} at index ${maxIndex}`);
}

/* (4) Array with Odds
* Create an array with all the odd integers between 1 and 255 (inclusive)
*/
const arrayWithOdds = () => {
  let array = [];

  for (let num = 1; num <= 255; num = num + 2) {
    array.push(num);
  }

  console.log(array);
}

/* (5) Greater Than Y
* Given an array and a value of Y, count and print the number of array values greater than Y.
*/
const greaterThanY = (array, y) => {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > y) {
      ++count;
      console.log(`${element} is greater than ${y} by ${element - y}`);
    }
  }

  console.log(`There are ${count} values in the array greater than ${y}`);
}

/* (6) Max, Min, Average
* Given an array, print the max, min, and average values for that array.
*/
const maxMinAverage = (array) => {
  let max = array[0];
  let min = array[0];
  let sum = 0;
  let maxIndex = 0;
  let minIndex = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element < min) {
      min = element;
      minIndex = i;
    }

    if (element > max) {
      max = element;
      maxIndex = i;
    }

    sum += element;
  }

  let average = sum / array.length;

  console.log(`The max value is ${max} at index ${maxIndex}`);
  console.log(`The min value is ${min} at index ${minIndex}`);
  console.log(`The average value of the ${array.length} numbers is ${average}`);

}

/* (7) Swap String for Array Negative Values
* Replace any negative array values with "Dojo"
*/
const replaceNegativeValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = "Dojo";
    }
  }

  console.log(arr);
}

/* (8) Print Odds 1-255
* Print all odd integers from 1 to 255.
*/
const printOdds1to255 = () => {
  let arr = [];
  let i = 0;

  for (let num = 1; num <= 255 ; num = num + 2) {
    arr[i] = num;
    ++i;
  }

  console.log(arr);
}

/* (9) Iterate and Print Array
* Iterate through a given array, printing each value.
*/
const iterateAndPrint = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
  }
}

/* (10) Get and Print Average
* Analyze an array's values and print the average.
*/
const getAndPrintAverage = (arr) => {
  let sum = 0;
  
  for (const iterator of arr) {
    sum += iterator;
  }

  const average = sum/arr.length;

  console.log(`Average: ${average}`);
}

/* (11) Square the Values
* Square each value in a given array, returning that same array with changed values.
*/
const squareTheValues = (arr) => {
  console.log(`Original values: ${arr}`)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }

  console.log(`Squared values: ${arr}`)
}

/* (12) Zero Out Negative Numbers
* Return the given array, after setting any negative values to zero.
*/
const zeroOutNegatives = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 0;
    }
  }

  console.log(arr);
}


/* (13) Shift Array Values
* Given an array, move all values forward by one index, dropping the first and leaving a "0" value at the end.
*/
const shiftArrayValues = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i !== arr.length - 1) {
      arr[i] = arr[i+1];
    } else {
      arr[i] = 0;
    }
  }
  
  console.log(arr);
}




// 1
print1to255();

// 2
printSum0to255();

// 3
findAndPrintMax([5, 1, 0, -4, 8, 3, 21, 8, 100]);

// 4
arrayWithOdds();

// 5
greaterThanY([5, 7, 125, 100, 3, 58, 42, 65], 20);

// 6
maxMinAverage([5, 4, 53, 7, 9, 41, 8, 20]);

// 7
replaceNegativeValues([-5, 4, -53, 7, -9, 41, -8, 20]);

// 8
printOdds1to255();

// 9
iterateAndPrint([-5, 4, -53, 7, -9, 41, -8, 20]);

// 10
getAndPrintAverage([5, 4, 53, 7, 9, 41, 8, 20]);

// 11
squareTheValues([5, 4, 53, 7, 9, 41, 8, 20]);

// 12
zeroOutNegatives([-5, 4, -53, 7, -9, 41, -8, 20]);

// 13
shiftArrayValues([5, 4, 53, 7, 9, 41, 8, 20]);