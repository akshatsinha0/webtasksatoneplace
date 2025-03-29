function reverseWords(sentence) {
    // Split the sentence into words, reverse the array, and join them back into a string.
    return sentence.split(' ').reverse().join(' ');
  }
  
  // Testing the function:
  console.log(reverseWords("The quick brown fox")); // Expected output: "fox brown quick The"
  