function once(action){
	var result = false;
	return function() {
		if (result === false) {
			action();
			result = true;
		} else {
			console.log('....get out of my mouth');
			// console.log('you just bought a car GO FASTER!')
		}
    }
}






var lips = once(function(){
	console.log('touch my MOUTH!')
});

// var LearnToDrive = once(function(){
// 	console.log('get a jewb and buy a car!')
// });


// LearnToDrive();
// LearnToDrive();

lips();
lips();

