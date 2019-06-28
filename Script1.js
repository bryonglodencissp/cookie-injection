// JavaScript source code

//Extract a value from key=value type strings
function extract(str, key) {
	if (str == null) return '';
	var keyStart = str.indexOf(key + "=");
	if (-1 === keyStart) return '';
	var valStart = 1 + str.indexOf("=", keyStart);
	var valEnd = str.indexOf("&", keyStart);
	var val = -1 === valEnd ? str.substring(valStart) : str.substring(valStart, valEnd);
	return val;
}

//Set the user's favorite background color
function doColor() {
	var h = "faveColor=red" //location.hash.substring(1);
	if (h.indexOf("faveColor=") >= 0) {
		document.cookie = h; // Defect here
	}
	var faveColor = extract(document.cookie, "faveColor");
	document.bgColor = faveColor;

	console.log(document.cookie);
}
window.onhashchange = doColor;
