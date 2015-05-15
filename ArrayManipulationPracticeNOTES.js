// function filter(numbers, runAction){
// 	var newArray = [];
// 	for (i = 0; i < numbers.length; i++) {
// 		if (runAction(numbers[i]) === true) {
// 			newArray.push(numbers[i]);
// 		}
// 	} return newArray;
	
// }



// var numbers = [1, 2, 3, 4, 5, 6];


// var evenNumbers = filter(numbers, function(num) {return (num % 2) === 0; });

// console.log(evenNumbers); 



// // Function filter!
// // it takes in two things: an array, and a function
// // it make a new array to put results in
// // it loops through everything in the array
// 	// it runs the function on the array item
// 	// if the function returns true, put the itme in the new array
// // return the whole new array



// var numbers = [1, 2, 3, 4, 5, 6];
// var sum = 0;
// numbers.forEach(function(number) {
//   sum += number;
// });
// console.log(sum); //=> 21


// function add(num1, num2) {
// 	var sum;
// 	sum = num1 + num2
// 	console.log(sum);
// }

// add(1,2);



// var pairs = [
// 	['name', 'JSI'],
// 	['location', {city: 'Portland', 'state': 'OR'}],
// 	['school', 'PCS']
// ];

// var obj = pairs.reduce(function(accumulatingIndex, currentIndex) {
// 	console.log(accumulatingIndex);
// 	var key = currentIndex[0];
// 	var value = currentIndex[1];
// 	accumulatingIndex[key] = value;
// 	console.log(accumulatingIndex)
// 	return accumulatingIndex;
// }, {});

// console.log('##### Final Result');
// console.log(obj);




/*******************************************************************************
THESE ARE USEFUL for ARRAYs

_.zip takes an array and combines it into a new array based on its index value. all elements in the 
0 index get a new array and so on

_.flatten takes an array of multiple layers and flattens it into just one array. [1,[2,3][4]] turns into
[1,2,3,4]

_.UNIQE removes repeated array elements and spits out an array with just the unique elements

_.throttle slows down an output by the _.throttle(write, 500) and only shows the current output at the time you set.
if you say 500ms, it would show you where it is currently at every 500ms. If counting to 1000000, it would show what the 
current count is every 500ms. So it would show something like 200, then 39420, then 97222. ect..

_.union takes a bunch of different arrays and puts them into a single array. It wont copy duplicates.

_.intersection finds similar elements and puts them into another array.

_.xor takes away duplicates and prints a new array with just the unique ones.

_.chunk takes a large array and group it together based on a number you provide. 
_.chunk([1,2,3,4,5,6,7,8], 3); = [1,2,3] [4,5,6] [7,8,9] 

_.default adds into arrays a default set of values. It will not add the defaults twice. It will skip.

_.merge similar but will overwrite values. This can have a function passed as a parameter to handle what happens
in the merge 

_.after(4, function()) says to call a function the amount of times first assigned, then after those run the amount of
times, it runs the funciton after. So run the first function 4 times, then run the next function. 

_.size takes the size of a string, object, or array and gives you the total index value. 4 items, gives you 3 total
_.size[1,2,3,4] = 3. This works on strings as well, it counts every character. when .length cant work because of the 
info within, use this. 

_.keys _.values. This prints either the key, or value of an object. 


********************************************************************************/


//_.FINDKEY: this searches for an exact match of what you provided and returns the key value of the first one. 


var _ = require('lodash')

var users = {
  'PeeWee Herman':  { 'age': 20, 'dummy': true },
  'Andy':  { 'age': 20, 'dummy': true },
  'Billy Murr': { 'age': 65, 'funny': true},
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};

console.log(_.findKey(users, { 'age': 20, 'dummy': true}));
console.log(_.findKey(users, { 'age': 65, 'funny': true}));
console.log(_.findKey(users, { 'age': 60, 'funny': true}));























































