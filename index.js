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

// Constant time - no matter the input the time remains the same. It is only computing one ting - always.

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

// Polynomial time O(2^n) - Given unknown quantity of 1st and 2nd array

// 4. Doubler
// What is the Big O of the following algorithm? Explain your answer

function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
