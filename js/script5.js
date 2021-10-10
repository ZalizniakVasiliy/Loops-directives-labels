const arr = [1, 2, 3, 4, 5];
let sumElementsArr = 0;
for (let i = 0; i < arr.length; i++) {
  sumElementsArr += Math.pow(arr[i], 2); //the first example
  // sumElementsArr += arr[i] ** 2; //the second example
} //the first example

/* for (let arrElem of arr) {
  sumElementsArr += Math.pow(arrElem, 2); //the first example
  // sumElementsArr += arrElem ** 2; //the second example
} // the second example */

console.log(sumElementsArr);
