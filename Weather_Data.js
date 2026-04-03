let highTemperatures = [55, 57, 53, 47, 56, 50];
let lowTemperatures  = [33, 30, 29, 35, 31, 32];

// Max values for temperatures
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Min values for temperatures
function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Avarage values for temperatures
function calcAverage(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

// Median values for temperatures
function calcMedian(arr) {
  let sorted = arr.slice();
    //Aragement array
  for (var i = 0; i < sorted.length - 1; i++) {
    for (var j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j] > sorted[j + 1]) {
        var temp = sorted[j];
        sorted[j]     = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
 
  let mid = Math.floor(sorted.length / 2);
 
  if (sorted.length % 2 !== 0) {
    // Odd length: take the middle element
    return sorted[mid];
  } else {
    // Even length: average the two middle elements
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
}

console.log("Highest temperature:", findMax(highTemperatures));
console.log("Lowest temperature:", findMin(lowTemperatures));
console.log("Average high temperature:", calcAverage(highTemperatures).toFixed(2));
console.log("Average low temperature:", calcAverage(lowTemperatures).toFixed(2));
console.log("Median high temperature:", calcMedian(highTemperatures));
console.log("Median low temperature:", calcMedian(lowTemperatures));
 