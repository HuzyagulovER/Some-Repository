"use strict";

function classCollectionLength(element) {
	let firstSymbol = element.substring(0, 1);
	let otherSymbols = element.substring(1);
	

	if (firstSymbol == '.') {
		return document.getElementsByClassName(otherSymbols).length;
	} else {
		return document.getElementsByClassName(element).length;
	}
}

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

document.querySelector('.open_fall_menu').addEventListener('click', function fallingMenu() {
	console.log(this);
	let fallMenu = this.nextElementSibling.classList;
	fallMenu.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
	let gotoFallMenuContainerFirstChild = document.querySelector('.fall_menu_container').firstElementChild;
	let checkTitle = gotoFallMenuContainerFirstChild.classList[0];
	if (checkTitle != undefined) {
		let followedHrStyle = gotoFallMenuContainerFirstChild.nextElementSibling.style;
		followedHrStyle.borderColor = '#fff';
		followedHrStyle.marginBottom = '8px';
		followedHrStyle.width = '100%';
	} else if (gotoFallMenuContainerFirstChild.tagName == 'HR') {
		gotoFallMenuContainerFirstChild.style.displa3y = 'none';
	};
});

document.querySelector('.communicate-caller').addEventListener('click', function () {
	this.parentElement.classList.toggle('active');
});

// document.querySelector('.r-btn').addEventListener('click', function () {
// 	this.previousElementSibling.firstElementChild.classList.toggle('active');
// });


let btn = document.getElementById('show');
let nav = document.getElementById('nav');


btn.addEventListener('click', function() {
    nav.classList.toggle('active');
});

const cursors = document.querySelector('.cursors');
document.addEventListener('mousemove', () => {
	cursors.style.top = (event.pageY - 5) + 'px';
	cursors.style.left = (event.pageX - 5) + 'px';

});
document.addEventListener('mousedown', () => {
	cursors.classList.add('downed');
	setTimeout("cursors.classList.remove('downed')", 500);
});

const cursorToggler = document.querySelector('#cursor-toggler');
cursorToggler.addEventListener('click', () => {
	let cursorClassList = cursorToggler.classList[0];

	if (cursorClassList == 'dot') {
		cursorToggler.removeAttribute('class');
		cursorToggler.classList.add('mouse');
		var cursorClass = 'mouse';
	} else {
		cursorToggler.removeAttribute('class');
		cursorToggler.classList.add('dot');
		var cursorClass = 'dot';
	};

	if (cursorClass == 'dot') {
		document.querySelector('style').innerHTML = '* {cursor: none !important}';
		document.querySelector('.cursors').style.display = 'block';
		document.querySelector('.fa-mouse-pointer').style.display = 'block';
		document.querySelector('.fa-dot-circle').style.display = 'none';

	} else {
		document.querySelector('style').innerHTML = '* {cursor: default}';
		document.querySelector('.cursors').style.display = 'none';
		document.querySelector('.fa-dot-circle').style.display = 'block';
		document.querySelector('.fa-mouse-pointer').style.display = 'none';

	};
});

function loadFromTxt() {
	let XMLHttp;

	if (window.XMLHttpRequest) {
		XMLHttp = new XMLHttpRequest();
	} else {
		XMLHttp = new ActiveXObject("Microsoft.XMLHTTP");
	};

	XMLHttp.open("GET", "../txt/ajax.txt", true);
	XMLHttp.send();
	XMLHttp.onreadystatechange = function () {
		document.getElementById('ajax').firstElementChild.innerHTML = XMLHttp.responseText;
	};

};



let links = {
	main: 'Main',
	about: 'About',
	downloads: 'Downloads'
};

let content = document.querySelector('.cont');
let ul = document.querySelector('.history_api ul');

ul.addEventListener('click', function(e) {
	let state;
	if (e.target.tagName != 'LI') return;
	state = {page: e.target.dataset.href};
	history.pushState(state, '', state.page);
	updatestate(state);
});

function updatestate(state) {
	if (!state) return;
	content.innerHTML = links[state.page];
};

window.addEventListener('popstate', function (e) {
	updatestate(e.state);
	console.log(e.state);
});