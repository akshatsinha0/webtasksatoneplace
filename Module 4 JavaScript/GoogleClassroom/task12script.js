function compressString(str) {
    if (str.length === 0) return str; // Handle empty string
    
    let compressed = "";
    let count = 1;
    
    for (let i = 1; i < str.length; i++) {
      if (str[i] === str[i - 1]) {
        count++;
      } else {
        // Append previous character and its count
        compressed += str[i - 1] + count;
        count = 1;
      }
    }
    
    // Append the last character and its count
    compressed += str[str.length - 1] + count;
    
    // Return the compressed string only if it's shorter than the original
    return compressed.length < str.length ? compressed : str;
  }
  
  // Testing the function:
  console.log(compressString("aabcccccaaa")); // Expected output: "a2b1c5a3"
  