let fs = require("node:fs");

let input;

try {
	input = fs.readFileSync("day1.txt", { encoding: "utf-8" });
} catch (error) {
	console.log("Error");
	return 0;
}

let g_sum = 0;

input = input.split("\r\n").forEach((line) => {
	// console.log("line is " + line);
	line = line.split("").filter((x) => {
		return x >= 0 && x <= 9;
	});

	line = line[0] + line[line.length - 1];
	g_sum += Number(line);
});
console.log(g_sum);
return 0;
