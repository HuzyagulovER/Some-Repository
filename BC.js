"use strict";

let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:");
let checkNumber = prompt("Введите проверочное число:");

if (getCategoryOfNumber(mainNumber) !== getCategoryOfNumber(checkNumber)) {
	alert("Число содержит неверное количество цифр!");
};

if (searchRepeatingNumbers(mainNumber)) {
	alert("Присутствуют повторяющиеся цифры!");
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

function searchOfBulls(mainNumber, checkNumber) {
	let copyCheckNumber = checkNumber;
	let copyMainNumber = mainNumber;
	let numberOfBulls = 0;

	for ( ; copyCheckNumber > 0; ) {

		for ( ; copyMainNumber > 0; ) {

			if (getLastNumber(copyCheckNumber) === getLastNumber(copyMainNumber)) {
				numberOfBulls++;
			};

			copyMainNumber = deleteLastNumber(copyMainNumber);
		};

		copyCheckNumber = deleteLastNumber(checkNumber);
		copyMainNumber = mainNumber;
	};

	return numberOfBulls;
};

function searchOfCows(mainNumber, checkNumber) {
	
}

alert(searchOfBulls(mainNumber, checkNumber));