$(document).ready(function () {
	
	maximumSum([-1, 10, -9, 5, 6, -10]);

	showResult();
	
});


var maximum;

function maximumSum(initialArray) {
	var sum = initialArray[0];
	
	maximum = initialArray[0];

	for (let i = 0; i < initialArray.length - 1; i++) {
		sum = sum + initialArray[i+1];
		if (sum > maximum) {
			maximum = sum;
		}
	}

	console.log(maximum);
	return maximum;
}


function showResult() {
	$('.answer-gotten').text(`Gotten answer: ${maximum}.`);
}
