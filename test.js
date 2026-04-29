const bunnies = ["Flopsy", "Lucy", "Cottontail", "Peter", "Strew", "Rewter"];

bunnies.push("Mario");

const lucyIndex = bunnies.indexOf("Lucy");
bunnies.splice(lucyIndex, 1);

bunnies.unshift("Luigi");

console.log(bunnies);