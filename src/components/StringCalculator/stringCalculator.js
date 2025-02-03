export function add(numbers) {
    const numArray = convertStringtoNumbers(numbers);
  
    const negatives = numArray.filter((num) => Number(num) < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed : ${negatives.join(",")}`);
    }
  
    return numArray.map(Number).reduce((sum, num) => sum + num, 0);
  }
  
  //helper method to convert into numbers array
  function convertStringtoNumbers(input) {
    var numbers = [];
    var temp = "";
    for (var i = 0; i < input.length; i++) {
      var value = input[i];
      var exp = /^-?\d+$/;
  
      if (exp.test(value) || value === "-") {
        temp += value;
      } else {
        numbers.push(temp);
        temp = "";
      }
    }
  
    if (temp) numbers.push(temp);
    numbers.filter((number) => number !== "");
    return numbers;
  }
  