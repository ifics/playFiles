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




/*THESE ARE USEFUL intersect / xor /  union / 

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
*/








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




















// console.log(_.findKey(users, { 'age': 65, 'funny': false}));
// (users, { 'age': 20, 'dummy': true }))

// _.findKey(users, { 'age': 1, 'active': true });
// → 'pebbles'

//_.FIND

// var users = [
//   { 'user': 'barney',  'age': 36, 'active': true },
//   { 'user': 'fred',    'age': 40, 'active': false },
//   { 'user': 'pebbles', 'age': 1,  'active': true }
// ];

// _.result(_.find(users, function(chr) {
//   return chr.age < 40;
// }), 'user');
// // → 'barney'

// // using the `_.matches` callback shorthand
// _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
// // → 'pebbles'

// // using the `_.matchesProperty` callback shorthand
// _.result(_.find(users, 'active', false), 'user');
// // → 'fred'

// // using the `_.property` callback shorthand
// _.result(_.find(users, 'active'), 'user');
// // → 'barney'


































