// Function to remove duplicate characters from a string while preserving order
function removeDuplicates(str) {
    let seen = new Set();
    let result = '';
    
    for (let char of str) {
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
    
    return result;
  }
  
  // Testing the function:
  console.log(removeDuplicates("hello world")); // Expected output: "helo wrd"
  