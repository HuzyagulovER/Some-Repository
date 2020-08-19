"use strict";

let btn = document.getElementById("css8_btn");
let p = document.getElementById("css8_p");

let i = 0;
p.innerHTML = "Lol"

btn.onclick = function() {
	if (i==0) {
		p.style.display = "block";
		i=1;
	} else {
		p.style.display = "none";
		i=0;
	};

};