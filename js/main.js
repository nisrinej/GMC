//#region string Manipulation
function reverseString(str) {
    
    let arr = str.split('');
    
    
    arr.reverse();
    
    
    let reversedStr = arr.join('');
    
    return reversedStr;
  }

  function countCharacters(str) {
    return str.length;
  }

  function capitalizeWords(sentence) {
    
    let words = sentence.split(' ');
    
    let capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
      return word; 
    });
    
    
    return capitalizedWords.join(' ');
  }
  //#endregion string Manipulation

//#region Array Functions
function minMax(arr) {
	arr.sort((a, b) => a - b); 
    return [arr[0], arr[arr.length-1]]
}

function sumArray(numbers) {
  let sum = 0; 
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }
  return sum; 
}

function filterArray(arr, condition) {
    return arr.filter(condition);
  }
 //#endregion Array Functions

//#region Math function

 function factorial(n) {
    if (n < 0) {
      return 'Factorial is not defined for negative numbers';
    }
    if (n === 0 || n === 1) {
      return 1; 
    }
    return n * factorial(n - 1); 
  }

  function isPrime(number) {
    if (number <= 1) return false; 
    if (number <= 3) return true; 
  
  
    if (number % 2 === 0 || number % 3 === 0) return false;
  
    
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  
    return true;
  }

  function generateFibonacci(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
  
    let fibSequence = [0, 1]; 
  
    for (let i = 2; i < n; i++) {
      fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
    }
  
    return fibSequence;
  }
  //#endregion Math function
