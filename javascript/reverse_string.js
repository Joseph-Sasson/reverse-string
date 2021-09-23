function reverseString(str) {
  let newString = ''
  for (let i = str.length - 1; i > -1; --i) {
    newString = newString + str[i]
  }
  return newString
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
  // Create new variable for reversed string
  // Create a variable for i, which is number of index
  // Create loop for argument length and iterate over the length stopping when it hit the index of 0 by subtracting 1 from index after every loop
  // Add index number to new string starting with the last one
  // Return new string

// And a written explanation of your solution
  // Iterate over the string starting from the end and after each loop add the last letter to the beginning of the new string until first letter of string is added
  // Stopping at the first letter by taking the legnth of the argument as an index variable, example (let i = str.length -1), when after each loop minus 1 from i, once i is less than 0 you are finished