// Define a function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return num + " is even";
    } else {
        return num + " is odd";
    }
}

// Call the function with different arguments and display the results
console.log(checkEvenOrOdd(7)); // Expected output: "7 is odd"
console.log(checkEvenOrOdd(8)); // Expected output: "8 is even"
