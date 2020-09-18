"use strict";

/*function popup() {
		$('.popup').toggleClass('active');
		console.log(document.getElementById('popup').classList);
};
*/
/*
$(document).ready( function() {
	$('.css10 a').click( function(event) {
		$('.css10 .bg').toggleClass('active');
	});
});

$(document).ready( function() {
	$('.css10 .bg').click( function(event) {
		$('.css10 .bg').toggleClass('active');
	});
});
*/


let i = 0;
// setInterval(liter, 10)
function liter() {
	if (i==0) {
		document.bgColor = "red";
		i=1;
	} else {
		document.bgColor = "white";
		i=0;
	}
};

let menu_burger = document.getElementById('css9');
menu_burger.addEventListener('click', function al() {
	alert('Hi!');
});


/*let title = document.title;
title = '123456789';
let j=0;
console.log(title);
function runLine(titles) {
		console.log(j);
	if (j < titles.length) {
		document.title = titles[j];
		j++;
	} else {
		j=0;
		document.title = title[j];
	};
};
setInterval(runLine, 500, title);
*/

// setTimeout("document.location.href = 'http://repack.me'", 5000);


let css10 = document.getElementById('css10');

/*let p=0;
function HB() {
	if (p==0) {
		css10.firstElementChild.innerHTML = "Hi!";
		p=1;
	} else {
		css10.firstElementChild.innerHTML = "By!";
		p=0;
	};
};*/

function setTime() {
	let date = new Date();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();

	if (minute < 10) {minute = "0" + minute};
	if (second < 10) {second = "0" + second};

	css10.firstElementChild.innerHTML = hour + ":" + minute + ":" + second;
};

function hotkey(pressedKey) {
	var pressedButton = pressedKey.keyCode;
	document.querySelector('#key').innerHTML = pressedKey.keyCode + ' : button " ' + pressedKey.key + ' "';
	function escapeButton() {
		if (pressedButton == 27) {
			let activeCollection = document.getElementsByClassName('active');
			for (let i = 0; i < activeCollection.length; i++) {
				callVisibilityToggler(activeCollection[i]);
			};
		};
	};
	escapeButton();
};

function callVisibilityToggler(callVariable) {
	let checkTarget = event.target;
	let checkPopupCall = checkTarget.closest('.popup__call');
	let checkPopup = checkTarget.closest('.popup');
	let id;
	
	if (checkPopupCall == null) {
		if (!callVariable) {
			id = event.target.closest('.popup');
		} else {
			id = callVariable.closest('.popup');
		};

		id.classList.toggle('active');
		setTimeout(function () {id.style.display = 'none'}, 800);
		id.style.visibility = "hidden";
		setTimeout(function () {id.style.display = 'block'}, 850);
	} else {
		id = checkPopupCall.parentElement.querySelector('.popup');
		id.style.visibility = "visible";
		id.classList.toggle('active');
	};
};

function scrollInto(IdValue) {
	let element = document.getElementById(IdValue);
	element.scrollIntoView({block: 'center', behavior: 'smooth'});
};

let element = document.getElementsByClassName('resizeH1')[0];
// document.getElementsByClassName('fontSize')[0].innerHTML = window.getComputedStyle(element).fontSize;

window.addEventListener('resize', function () {
	document.getElementsByClassName('fontSize')[0].innerHTML = window.getComputedStyle(element).fontSize;
});

let h = 0;
/*document.getElementById('css13').addEventListener('click', function fallingMenu() {
	let fallMenu = this.lastElementChild.classList;
	fallMenu.toggle('active');
});
*/
document.querySelector('.open_fall_menu').addEventListener('click', function fallingMenu() {
	console.log(this);
	let fallMenu = this.nextElementSibling.classList;
	fallMenu.toggle('active');
});
/*document.getElementById('css13').addEventListener('click', function fallingMenu() {
	let fallMenu = this.lastElementChild.classList;
	fallMenu.toggle('active');	
});*/

/*document.getElementsByClassName('open_fall_menu')[0].addEventListener('click', function fallingMenu() {
	let fallMenu = this.parentElement.lastElementChild.classList;
	fallMenu.toggle('active');

	if (h==0) {
		document.getElementById('css13').style.background = 'red';
		h = 1;
	} else {
		document.getElementById('css13').style.background = 'white';
		h = 0;
	}
});*/

/*document.getElementsByClassName('open_fall_menu')[0].onclick = function () {
	let fallMenu = this.nextElementSibling.classList;
	fallMenu.toggle('active');

	if (h==0) {
		document.getElementById('css13').style.background = 'red';
		h = 1;
	} else {
		document.getElementById('css13').style.background = 'white';
		h = 0;
	}
}*/
