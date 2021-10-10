const arr = [1, 2, 3, 4, 5];
let sumElementsArr = 0;
for (let i = 0; i < arr.length; i++) {
  sumElementsArr += arr[i];
} //the first example

/* for (let arrElem of arr) {
  sumElementsArr += arrElem;
} // the second example */

console.log(sumElementsArr);
