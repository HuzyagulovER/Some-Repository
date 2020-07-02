"use strict";

let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:", 1234);
// let checkNumber = prompt("Введите проверочное число:");

alert(generateWithout(mainNumber));

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

	while (copyOfNumber >= 10) {
		i++;
		copyOfNumber/= 10;
	};

	i++;

	return i;
};


function deleteLastNumber(number) {
	return Math.floor(number/10);
};


function searchCoincedence(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;

	for ( ; copyCheckNumber > 0; ) {

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
	let returnedNumber = 0;
	let indicator;

	while (getCategoryOfNumber(returnedNumber) !== 4) {
		let newNumber = Math.floor( Math.random() * 10 );

		indicator = searchCoincedence(returnedNumber, newNumber);

		if (!(indicator)) {

			returnedNumber = returnedNumber * 10 + newNumber;

		};
	};

	return returnedNumber;

};


function generateWithout(cuttedDigits) {
	let returnedNumber = 0;
	let indicator;
	let newNumber = 1;

	while (getCategoryOfNumber(returnedNumber) !== 4) {

		indicator = searchCoincedence(cuttedDigits, newNumber);

		if (!(indicator)) {

			returnedNumber = returnedNumber * 10 + newNumber;

		};

		newNumber++;
	};

	return returnedNumber;

};