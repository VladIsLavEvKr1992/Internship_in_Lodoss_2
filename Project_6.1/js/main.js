$(document).ready(function () {

	// !!!Beginning maximum sum!!!
	
	maximumSum();

	function maximumSum () {
		var initialArray = [-1, 10, -9, 5, 6, -10]; // initial array
		var sum = initialArray[0], maximum = initialArray[0];

		for (let i = 0; i < initialArray.length - 1; i++) {
			
			sum = sum + initialArray[i+1];
				//console.log(sum);
			if (sum > maximum) {
				maximum = sum;
			}
			
		}
		
		showResult();

		function showResult() {
			$('.answer-gotten').text(`Gotten answer: ${maximum}.`);
		}
		
	}
	
	// !!!Ending maximum sum!!!
	
});