function anagrams(str1, str2) {
    // Helper function to clean and sort the string
    const format = str =>
      str
        .replace(/[^\w]/g, '') // Remove non-alphanumeric characters
        .toLowerCase()         // Convert to lowercase for case-insensitive comparison
        .split('')             // Split into characters
        .sort()                // Sort the array
        .join('');             // Join back into a string
  
    // Compare the formatted strings
    return format(str1) === format(str2);
  }
  
  // Testing the function:
  console.log(anagrams("listen", "silent")); // Expected output: true
  console.log(anagrams("Hello", "Olelh"));     // Expected output: true
  console.log(anagrams("hello", "world"));     // Expected output: false
  