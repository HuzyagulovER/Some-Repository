"use strict";

let btn = document.getElementById("css8_btn");
let p = document.getElementById("css8_p");
let i=0;

btn.onclick = function() {
	this.innerHTML = i;
	i+=1;
};