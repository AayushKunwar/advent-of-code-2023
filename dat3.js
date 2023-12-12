const fs = require("fs");

const data = fs.readFileSync("day3.txt", "utf-8").split("\r\n");

function isNumber(foo) {
	if (foo == undefined) {
		return false;
	}
	return !Number.isNaN(parseInt(foo));
}
function isSymbol(ch) {
	if (ch == undefined) return false;
	if (isNumber(ch) || ch == ".") return false;
	return true;
}

function getNum(line, pos) {
	let num = "";
	data[line].split("").every((ch, idx) => {
		// console.log(ch);
		if (idx < pos) return true;
		if (!isNumber(ch) && num.length > 0) return false;
		if (isNumber(ch)) num += ch;
		return true;
	});
	return parseInt(num);
}

function isValid(line, pos, length) {
	if (isSymbol(data[line][pos - 1]) || isSymbol(data[line][pos + length])) {
		return true;
	}

	for (let idx = pos - 1; idx < pos + length + 1; idx++) {
		if (line - 1 >= 0 && isSymbol(data[line - 1][idx])) {
			return true;
		}
		if (line + 1 <= data.length - 1 && isSymbol(data[line + 1][idx]))
			return true;
	}

	return false;
}

let part1ans = 0;

for (let line = 0; line < data.length; line++) {
	for (let pos = 0; pos < data[line].length; pos++) {
		if (isNumber(data[line][pos])) {
			const currNum = getNum(line, pos);
			if (isValid(line, pos, String(currNum).length)) {
				part1ans += currNum;
			}
			pos += String(currNum).length;
		}
	}
}

console.log("part1", part1ans);
