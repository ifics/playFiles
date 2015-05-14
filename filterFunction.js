function filter(array, action) {
	var result = [];
		for (var i = 0; i < array.length; i++){
			if (action(array[i]) === true) {
				result.push(array[i]);
			}
			} return result;
}


var numbers = [1, 2, 3, 4, 5, 6];


var evenNumbers = filter(numbers, function(ArrayNumbers) {return (ArrayNumbers % 2) === 0; });

console.log(evenNumbers);