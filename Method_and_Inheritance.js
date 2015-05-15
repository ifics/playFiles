var myArray = ['uno', 'dos', 'tres', 'catorce'];

myArray.interpolate = function(delimiter) {
	var combineString = '';
	for (var i = 0; i < this.length - 1; i++){
		combineString += this[i] + delimiter;
	}
		combineString += this[this.length - 1]

	return combineString;
};

console.log(myArray.interpolate(', ')


	