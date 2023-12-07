const fs = require("fs");

const input = fs.readFileSync("day2.txt", { encoding: "utf-8" }).split("\r\n");

function part1(input) {
	let acc = 0;
	input.forEach((line) => {
		let game = line.split(" ");
		let gameId = game[1].slice(0, -1);
		game = game.slice(2).join(" ").split(";");
		let validGame = true;
		game.forEach((set) => {
			if (!isValidSet(set)) {
				validGame = false;
				// console.log("not valid game", gameId);
			}
		});
		if (validGame) {
			acc += Number(gameId);
		}
	});
	console.log("part1", acc);
}

part1(input);

function isValidSet(set) {
	let redLimit = 12;
	let greenLimit = 13;
	let blueLimit = 14;
	// console.log("curr color", set);
	set = set.trim().split(" ");
	// console.log(set);
	for (let idx = 0; idx < set.length; idx += 2) {
		let currColor = set[idx + 1];
		if (currColor.startsWith("red")) {
			if (Number(set[idx]) > redLimit) return false;
		}
		if (currColor.startsWith("blue")) {
			if (Number(set[idx]) > blueLimit) return false;
		}
		if (currColor.startsWith("green")) {
			if (Number(set[idx]) > greenLimit) return false;
		}
	}
	return true;
}
