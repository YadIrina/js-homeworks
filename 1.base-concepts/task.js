"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d > 0) {
		arr[0] = (-b + Math.sqrt(d)) / (2 * a);
		arr[1] = (-b - Math.sqrt(d)) / (2 * a)
	} else if (d === 0) {
		arr[0] = -b / (2 * a);
	} else {
		arr = [];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let partMonth = percent / 100 / 12; //процентная ставка
	let creditBody = amount - contribution; //тело кредита
	let payment = creditBody * (partMonth + (partMonth / (((1 + partMonth) ** countMonths) - 1))); //ежемесячная плата
	let sum = (payment * countMonths).toFixed(2);
	console.log(sum);
	return +sum
}