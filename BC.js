"use strict";

/*let mainNumber = prompt("Введите 4-хзначное число без повторяющихся цифр:");
let checkNumber = prompt("Введите проверочное число:");
*/

function getLastNumber(number) {
	let lastNumber = (number/10-Math.trunc(number/10))*10;
	return lastNumber;
};

let a = 1578/10;
let b = Math.trunc(a);
let c = a - b;
alert(b);
// alert(getLastNumber(12));

function searchOfBulls(number) {
	// body...
};