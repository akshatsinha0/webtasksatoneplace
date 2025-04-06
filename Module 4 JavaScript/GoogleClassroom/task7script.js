// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Function to capitalize the first letter of each word in a sentence
  function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Function to count vowels (a, e, i, o, u) in a string
  function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  }
  
  // Testing the functions:
  console.log(reverseString("hello"));         // Expected output: "olleh"
  console.log(capitalizeWords("this is a test")); // Expected output: "This Is A Test"
  console.log(countVowels("hello world"));       // Expected output: 3
  


//   // Function to reverse a string
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// // Function to capitalize the first letter of each word in a sentence
// function capitalizeWords(sentence) {
//   return sentence
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// }

// // Function to count vowels (a, e, i, o, u) in a string
// function countVowels(str) {
//   const vowels = 'aeiouAEIOU';
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// // Get user input using prompt
// const input = prompt("Enter a string:");

// // Process the input using our functions
// const reversed = reverseString(input);
// const capitalized = capitalizeWords(input);
// const vowelCount = countVowels(input);

// // Display the results in an alert and also log them in the console
// alert("Reversed: " + reversed +
//       "\nCapitalized: " + capitalized +
//       "\nVowel Count: " + vowelCount);

// console.log("Reversed:", reversed);
// console.log("Capitalized:", capitalized);
// console.log("Vowel Count:", vowelCount);
