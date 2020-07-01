"use strict";

let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:");
let checkNumber = prompt("Введите проверочное число:");

alert(searchOfCoinsedence(mainNumber, checkNumber));

if ((getCategoryOfNumber(mainNumber) !== getCategoryOfNumber(checkNumber)) 
	|| (searchRepeatingNumbers(mainNumber))
	|| (searchRepeatingNumbers(checkNumber))) {
	alert("Число содержит неверное количество цифр!");
} else {
	
};

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

function searchOfCoinsedence(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;
	let numberOfCoinsedence = 0;

	for ( ; copyCheckNumber > 0; ) {

		for ( ; copyMainNumber > 0; ) {

			if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
				numberOfBulls++;
			};

			copyMainNumber = deleteLastNumber(copyMainNumber);
		};

		copyCheckNumber = deleteLastNumber(copyCheckNumber);
		copyMainNumber = mainNumber;
	};

	return numberOfCoinsedence;
};

function searchOfBulls(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;
	let numberOfBulls = 0;

	for ( ; copyMainNumber > 0; ) {

		if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
			numberOfBulls++;
		};

		copyMainNumber = deleteLastNumber(copyMainNumber);
		copyCheckNumber = deleteLastNumber(copyCheckNumber);
	};

	return numberOfBulls;
};

function searchOfCows(mainNumber, checkNumber) {
	let numberOfCows = searchOfCoinsedence(mainNumber, checkNumber) - searchOfBulls(mainNumber, checkNumber);
	return numberOfCows;
};