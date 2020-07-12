"use strict";

function truncate(str, maxlength) {

	if (str.length > maxlength) return (str.slice(0, maxlength - 3) + "...");
	return str;

};

alert(truncate("Всем привет!", 20));