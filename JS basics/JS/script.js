"use strict";



// function pow(x, n) {
// 	if (n == 1) {
// 		return x;
// 	} else {
// 		return x * pow (x, n - 1);
// 	}
// }

// console.log(pow(2, 4));

function factorial(n) {
	if (n === 1 ||  typeof(n) != 'number' || !Number.isInteger(n)) {
		return n;
	} else {
		return n * factorial (n - 1);
	}
}

console.log (factorial('5'));