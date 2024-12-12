const str = "racecar";

let i = 0,
  j = str.length - 1;

function palindrome(str) {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(palindrome(str));

// Finding Two Numbers in a Sorted Array that Sum to a Target

arr = [1, 7, 9, 14];

function twoSum(arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] + arr[j] === target) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < target) {
      i++;
    } else {
      j--;
    }
  }
  return ["no pairs"];
}

console.log(twoSum(arr, 21));

//  Merging Two Sorted Arrays 

function merge(arr_1, arr_2) {
  let i = 0,
    j = 0,
    result = [];

  while (i < arr_1.length && j < arr_2.length) {
    if (arr_1[i] < arr_2[j]) {
      result.push(arr_1[i]);
      i++;
    } else if (arr_1[i] > arr_2[j]) {
      result.push(arr_2[j]);
      j++;
    }
  }
  while( i < arr_1.length){
    result.push(arr_1[i])
    i++
  }
  while(j < arr_2.length){
    result.push(arr_2[j])
    j++
  }
  return result;
}

console.log(merge([1, 4, 6], [2, 3, 7, 19, 45, 60]));
