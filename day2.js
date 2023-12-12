const fs = require("fs");

const input = fs.readFileSync("day2.txt", "utf-8").split("\r\n");

function part1(input) {
	let acc = 0;
	input.forEach((line) => {
		let game = line.split(" ");
		let gameId = game[1].slice(0, -1);
		game = game.slice(2).join(" ").split(";");
		let validGame = true;

		game.every((set) => {
			if (!isValidSet(set)) {
				validGame = false;
				return false;
			}
			return true;
		});
		if (validGame) {
			acc += Number(gameId);
		}
	});
	console.log("part1", acc);
}

function part2(input) {
	let cubeSum = 0;
	input.forEach((line) => {
		let game = line.split(" ").slice(2).join(" ").split(";");

		gameColor = {
			red: 0,
			blue: 0,
			green: 0,
		};
		game.forEach((set) => {
			set = set.trim().split(" ");
			// console.log(set, "set");
			for (let i = 0; i < set.length; i += 2) {
				const currColor = set[i + 1].replace(",", "");
				if (gameColor[currColor] < Number(set[i])) {
					gameColor[currColor] = Number(set[i]);
				}
				// console.log(currColor);
			}
		});
		cubeSum += Object.values(gameColor).reduce((a, b) => {
			if (b != 0) return a * b;
			else return a;
		}, 1);
		// console.log(cubeSum);
	});
	console.log("part2", cubeSum);
}

part1(input);
part2(input);

function isValidSet(set) {
	let redLimit = 12;
	let greenLimit = 13;
	let blueLimit = 14;

	set = set.trim().split(" ");

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
