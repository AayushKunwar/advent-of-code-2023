let fs = require("node:fs");

let input;

try {
	input = fs.readFileSync("day1.txt", { encoding: "utf-8" });
} catch (error) {
	console.log("Error");
	return 0;
}

let g_sum = 0;

input.split("\r\n").forEach((line) => {
	// console.log("line is " + line);
	line = line.split("").filter((x) => {
		return x >= 0 && x <= 9;
	});

	line = line[0] + line[line.length - 1];
	g_sum += Number(line);
});

console.log("part1", g_sum);

// part 2

let digits = "one two three four five six seven eight nine".split(" ");

let totalSum = 0;
input.split("\r\n").forEach((line) => {
	// for each char in line
	let lineArr = [];
	for (let idx = 0; idx < line.length; idx++) {
		// line.forEach((char, idx))
		// for each valid word
		for (let j = 0; j < digits.length; j++) {
			// digits.forEach((digit))
			const digit = digits[j];
			if (line.startsWith(digit, idx)) {
				lineArr.push(j + 1);
				break;
			} else if (!Number.isNaN(Number(line[idx]))) {
				lineArr.push(Number(line[idx]));
				break;
			}
		}
	}
	let lineNo = String(lineArr[0]) + String(lineArr[lineArr.length - 1]);
	totalSum += Number(lineNo);
});
console.log("part2", totalSum);
return 0;
