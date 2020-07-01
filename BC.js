"use strict";

let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:");
// let checkNumber = prompt("Введите проверочное число:");


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
		console.log(1);
	};
	i++
	return i;
};

alert(getCategoryOfNumber(mainNumber));

function searchOfBulls(number) {
	// body...
};