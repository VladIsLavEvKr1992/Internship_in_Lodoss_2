$(document).ready(function () {
	
	const currenVariable = maximumSum([-1, 10, -9, 5, 6, -10]);

	showResult(currenVariable);
	
});


function maximumSum(initialArray) {
	var maximum = initialArray[0],
	sum = initialArray[0];
	
	for (let i = 0; i < initialArray.length - 1; i++) {
		sum = sum + initialArray[i+1];
		if (sum > maximum) {
			maximum = sum;
		}
	}

	console.log(maximum);
	return maximum;
}


function showResult(currenVariable) {
	$('.answer-gotten').text(`Gotten answer: ${currenVariable}.`);
}
