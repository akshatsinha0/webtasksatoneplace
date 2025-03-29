function longestSubstring(s1, s2) {
    // Create a 2D array filled with zeros.
    const dp = Array(s1.length + 1).fill(null).map(() => Array(s2.length + 1).fill(0));
    let maxLength = 0;
    let endIndex = 0; // End index of the longest substring in s1
  
    // Iterate through each character of s1 and s2
    for (let i = 1; i <= s1.length; i++) {
      for (let j = 1; j <= s2.length; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
          // Update maxLength and endIndex if a longer substring is found
          if (dp[i][j] > maxLength) {
            maxLength = dp[i][j];
            endIndex = i; 
          }
        } else {
          dp[i][j] = 0;
        }
      }
    }
    
    // Extract and return the longest common substring from s1.
    return s1.substring(endIndex - maxLength, endIndex);
  }
  
  // Testing the function:
  const str1 = "abcdef";
  const str2 = "bcdeft";
  console.log(longestSubstring(str1, str2)); // Expected output: "bcde"
  