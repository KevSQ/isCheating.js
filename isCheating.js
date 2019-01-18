/* 
Conditions of cheating: 
	If more than 75% of all multiple choice responses
	are exact matches between test1 and test2, isCheating will return true; else, return false. 

Assumed Conditions for operation:
	- Both inputs are of same length.

	- Both inputs have already been sequenced and ordered accordingly.

	- They are of the same data type.
*/

var test1 = ["a", "b", "c"];
var test2 = ["a", "b", "c"];

function isCheating(firstArray, secondArray) {
	const CHEAT_CUTOFF = (firstArray.length) * .75; // Establishing cutoff value I will be using. Since it will not be changed later on, it is a constant.
	let isCheatingCounter = 0; // Counter I will be using to determine matching values.
	for (let i = 0; i < firstArray.length; i++) { // Iterative process to determine these numbers.
		if (firstArray[i] === secondArray[i]) {
			console.log("both are equal, adding to cheatCounter")
			isCheatingCounter++;
		}
	}
	if (isCheatingCounter > CHEAT_CUTOFF) { // Conditional to determine whether or not the Counter has passed the 75% threshold required to be considered "cheating".
		console.log("true," + isCheatingCounter, CHEAT_CUTOFF)
		return true;
	} else {
		console.log("false," + isCheatingCounter, CHEAT_CUTOFF)
		return false;
	}
}

console.log(isCheating(test1, test2));