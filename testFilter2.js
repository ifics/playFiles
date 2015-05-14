function filter(numbers, runAction){
	var newArray = [];
	for (i = 0; i < numbers.length; i++) {
		if (runAction(numbers[i]) === true) {
			newArray.push(numbers[i]);
		}
	} return newArray;
	
}



var numbers = [1, 2, 3, 4, 5, 6];


var evenNumbers = filter(numbers, function(num) {return (num % 2) === 0; });

console.log(evenNumbers); 



// Function filter!
// it takes in two things: an array, and a function
// it make a new array to put results in
// it loops through everything in the array
	// it runs the function on the array item
	// if the function returns true, put the itme in the new array
// return the whole new array
