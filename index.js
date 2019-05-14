// 1. What is the Big O for this?

// 1) Determine the Big O for the following algorithm: 
// You are sitting in a room with 15 people. You want to find a playmate for your dog, 
// preferably of the same breed. So you want to know if anyone out of the 15 people 
// have the same breed as your dog. You stand up and yell out, who here has a golden 
// retriever and would like to be a playdate for my golden. 
// Someone yells - "I do, be happy to bring him over"

// Constant time O(1) - The holy grail! It happens only once regardless of dataset.

// 2) Determine the Big O for the following algorithm: You are sitting in a room with 15 people. 
// You want to find a playmate for your dog who is of the same breed. So you want to know if anyone 
// out of the 15 people have the same breed as your dog. You start with the first person and ask him 
// if he has a golden retriever. He says no, then you ask the next person, and the next, 
// and the next until you find someone who has a golden or there is no one else to ask.

// Linear time O(n) - run time directly proportional to the size (n) of the input

// 2. Even or odd
// What is the Big O of the following algorithm? Explain your answer

function isEven(value) {
  if (value % 2 == 0) {
    return true;
  }
  else {
    return false;
  }
}

// O(1) Constant time - no matter the input the time remains the same. It is only computing one ting - always.

// 3. Are you here?
// What is the Big O of the following algorithm? Explain your answer

function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) { // O(n)
      const el1 = arr1[i];
      for (let j = 0; j < arr2.length; j++) { // O(n)
        const el2 = arr2[j];
        if (el1 === el2) return true;
      }
    }
    return false;
}

// Polynomial time O(n^2) - Given unknown quantity of 1st and 2nd array

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// O(n) Linear - Given unknown quanity, once per item in array

// 5. Naive search
// What is the Big O of the following algorithm? Explain your answer

function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// O(n) Linear - Given unknown quanity, once per item in array

// 6. Creating pairs:
// What is the Big O of the following algorithm? Explain your answer

function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

// Polynomial time O(n^2) - Given unknown quantity of 1st and 2nd array

// 7. Compute the sequence
// What does the following algorithm do? What is its runtime complexity? Explain your answer

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// O(1) - Constant time, time complexity does not change when input changes
// CORRECT ANSWER: O(n)

// 8. An efficient search
// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above. Assume that the input array is always sorted. What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}

// O(log(n)) Logarithmic time - processes half of input at a time, each time. It divides what you have to 
// do each time through.

// 9. Random element
// What is the Big O of the following algorithm? Explain your answer

function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) Constant time - no matter the input time doesn't change

// 10. What Am I?
// What does the following algorithm do? What is the Big O of the following algorithm? Explain your answer

function isWhat(n) {
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

// O(n) - given larger 'n', more time is taken

// 11. Tower of Hanoi
// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:

// There are three rods and a number of disks of different sizes which can slide onto any rod. 
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod, 
// the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod 
// (can't be the original rod where it was stacked before) 
// where it will be stacked in the ascending order as well. 
// This should be done obeying the following rules: 
// i) Only one disk may be moved at a time 
// ii) Each move consists of taking the upper disk from one of the rods and sliding it onto 
// another rod, on top of the other disks that may already be present on that rod. 
// iii) A larger disk may not placed on top of a smaller disk

// function tower(a, b, c, height) {
  
//   if(height === 0) return
    
//   tower(a, b, c, height - 1)
// }

// tower([1,2,3], [], [])

function TOH(n, source, temp, dest) { //n= 2
  if(n === 1) {
    print(source, dest)
  }
  TOH(n-1, source, temp, dest) //n = 1
}
function print(source, dest) {
  console.log(`Moving from ${source} to ${dest}`)
}
TOH(1, A, B, C)