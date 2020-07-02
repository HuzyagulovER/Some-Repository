"use strict";

// let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:", 1234);
// let checkNumber = prompt("Введите проверочное число:");

// for (let i = 0; i < 10; i++) {
	console.log(searchCoincedence(1234, 7) || searchCoincedence(80, 7));
// 	console.log("");
// };


/*if ((mainNumber != Number(mainNumber))
		|| (checkNumber != Number(checkNumber))) {

		alert("Введены не числа!");

} else {

	if ((getCategoryOfNumber(mainNumber) !== getCategoryOfNumber(checkNumber))
	|| (searchRepeatingNumbers(mainNumber))
	|| (searchRepeatingNumbers(checkNumber))) {

	alert("Число содержит неверное количество цифр!");

	} else {
		alert(quantityOfCoinсedence(mainNumber, checkNumber));
		alert(searchCoincedence(mainNumber, checkNumber));
	
		alert(quantityOfBulls(mainNumber, checkNumber));
		alert(quantityOfCows(mainNumber, checkNumber));
	};
};*/


/*	alert(searchCoincedence(mainNumber, checkNumber));
	
	alert(quantityOfBulls(mainNumber, checkNumber));
	alert(quantityOfCows(mainNumber, checkNumber));*/


function searchRepeatingNumbers(number) {
	let lastNumber = getLastNumber(number);
	let nextNumber = deleteLastNumber(number);
	let cuttedNumber;

	for ( ; nextNumber > 0 ; ) {
		cuttedNumber  = nextNumber;

		for ( ; cuttedNumber > 0 ; ) {

			if (lastNumber === getLastNumber(cuttedNumber)) {
				return true;
			};

			cuttedNumber = deleteLastNumber(cuttedNumber);
		};

		lastNumber = getLastNumber(nextNumber);
		nextNumber = deleteLastNumber(nextNumber);
	};

	return false;
};


function getLastNumber(number) {
	let variable = number/10;
	let variable2 = Math.trunc(variable);
	let variable3 = variable - variable2;
	let lastNumber = Math.round(variable3*10);

	return lastNumber;
};


function getCategoryOfNumber(number) {
	let i = 0;
	let copyOfNumber = number;

	while (copyOfNumber >= 1) {
		i++;
		copyOfNumber/= 10;
	};

	return i;
};


function deleteLastNumber(number) {
	let returnedNumber;
	if (number === 0) {
		return NaN;
	} else {
		return Math.floor(number/10);
	};

};


function searchCoincedence(mainNumber, checkNumber) {
	let copyMainNumber = mainNumber;
	let copyCheckNumber = checkNumber;

/*	if (!(mainNumber || checkNumber)) {
		return false;
	};*/

	for ( ; copyCheckNumber >= 0; ) {

		for ( ; copyMainNumber > 0; ) {

			if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
				return true;
			};

			copyMainNumber = deleteLastNumber(copyMainNumber);
		};

		copyCheckNumber = deleteLastNumber(copyCheckNumber);
		copyMainNumber = mainNumber;
	};

	return false;
};


function quantityOfCoinсedence(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;
	let coinсedenceQuantity = 0;

	for ( ; copyCheckNumber > 0; ) {

		for ( ; copyMainNumber > 0; ) {

			if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
				coinсedenceQuantity++;
			};

			copyMainNumber = deleteLastNumber(copyMainNumber);
		};

		copyCheckNumber = deleteLastNumber(copyCheckNumber);
		copyMainNumber = mainNumber;
	};

	return coinсedenceQuantity;
};


function quantityOfBulls(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;
	let quantityOfBulls = 0;

	for ( ; copyMainNumber > 0; ) {

		if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
			quantityOfBulls++;
		};

		copyMainNumber = deleteLastNumber(copyMainNumber);
		copyCheckNumber = deleteLastNumber(copyCheckNumber);
	};

	return quantityOfBulls;
};


function quantityOfCows(mainNumber, checkNumber) {
	let cowsQuantity = quantityOfCoinсedence(mainNumber, checkNumber) - quantityOfBulls(mainNumber, checkNumber);
	return cowsQuantity;
};


function generateRandom() {
	let returnedNumber;
	let indicator;

	while (getCategoryOfNumber(returnedNumber) !== 4) {
		let newDigit = Math.floor( Math.random() * 10 );

		indicator = searchCoincedence(returnedNumber, newDigit);

		if (!(indicator)) {

			returnedNumber = returnedNumber * 10 + newDigit;

		};
	};

	return returnedNumber;

};


function generateWithout(cuttedDigits) {
	let returnedNumber = 0;
	let indicator;

	while (getCategoryOfNumber(returnedNumber) !== 4) {
		let newDigit = Math.floor( Math.random() * 10 );
		console.log(newDigit);
		indicator = searchCoincedence(cuttedDigits, newDigit) || searchCoincedence(returnedNumber, newDigit);
		console.log(indicator);

		if (!(indicator)) {

			returnedNumber = returnedNumber * 10 + newDigit;
			
		};

		console.log(returnedNumber);
	};

	return returnedNumber;

};