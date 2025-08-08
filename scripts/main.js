let array1 = [1, 2, 3];
let array2 = [3, 4];
let array3 = array1.concat(array2);
let idx = array2.indexOf(5);
let array4 = array2.join(' / ');
let string1 = array4.split(' / ');

console.log(array3); // [1,2,3] + [4, 5] = [1,2,3,4,5]
console.log(idx); // element index in massive
console.log(array4); // between massive to string
console.log(string1);