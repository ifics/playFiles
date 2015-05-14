/*below is an example of Closure. Closure is when one function has access to variables of the outer function. 
This way i can feed the function as many variables as I want without having to rewrite my function

*/



var counter = function (startingNumber){

	var obj = {}

	var count = startingNumber;
		
	obj.next = function() {
			count++;
			console.log(count);
	};

	obj.reset = function() {
		count = startingNumber;
	}
	return obj;
}



var sequence1 = counter(1);
var sequence2 = counter(10);

sequence1.next();
sequence1.next();
sequence2.next();
sequence1.reset();
sequence2.reset();
sequence1.next();
sequence1.next();
sequence2.next();






//This is another variation of the above code. It works the same way and is conscise
// var counter = function (count){
// 		function addOne() {
// 			count++;
// 			return count;

// } 
// 	return addOne;
// }

// var sequence1 = counter(1);
// var sequence2 = counter(10);
// console.log(sequence1());

// console.log(sequence2());









// var array = ["hello", "world"];

// var callbacks = [];

// for (var i = 0; i < array.length; i++) {
//   callbacks.push(function() {
//     console.log([i]);
//   });

// }
// callbacks.forEach(function(c) { 
// 	c(); 
// });


//PROBLEM

var array = ["hello", "world"];
var callbacks = [];
for (var i = 0; i < array.length; i++) {
  callbacks.push(function() {
    console.log(array[i]);
  });
}
callbacks.forEach(function(c) { c(); });


//SOLUTION 

function freezeI (i) {
 function() {
 console.log(array[i]);
});
}

var array = ["hello", "world"];
var callbacks = [];


for (var i = 0; i < array.length; i++) {
    callbacks.push(freezeI(i));
}


callbacks.forEach(function(c) {
  c();
});











