

var myArray = ['hello', 'dude', 'man'];

myArray.interpolate = function (addDelimiter){
	var combineString = '';
	for (i = 0; i < myArray.length - 1; i++) {
		combineString += myArray[i] + addDelimiter;
	} 
	combineString += myArray[myArray.length - 1];
	return combineString;
};

console.log(myArray.interpolate(' === '));




var num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

for (i = 0; i < num.length; i++){

   if (((num[i] % 3) === 0) && ((num[i] % 5) === 0)) {
           console.log('FizzBuzz'); 
   } else if ((num[i] % 3) === 0) {
       console.log('Fizz');
        } else if ((num[i] % 5) === 0) {
            console.log('Buzz');
        } else {
        	console.log(num[i]);
        }
}
