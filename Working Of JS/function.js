// calling the function before it is declared
addNumbers(2, 3);

// function declaration
function addNumbers(a, b) {
  return a + b;
}
function addNumbers(a, b) {
    return a + b;
  }
  
  // calling the function after it is declared
  console.log(addNumbers(2, 3)); // outputs 5
  