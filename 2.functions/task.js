function getArrayParams(...arr) {
	let min = arr[0];
	let max = arr[0];
	let sum = 0;
	let avg = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] >= max) {
			max = arr[i];
		}
		if (arr[i] <= min) {
			min = arr[i];
		}
		sum = sum + arr[i];
		avg = parseFloat((sum / arr.length).toFixed(2));
	}
	return {
		min: min,
		max: max,
		avg: avg
	};
}

//getArrayParams(1, 2, 3, -100, 10);  // { min: -100, max: 10, avg: -16.80 }


//function summElementsWorker(...arr) {
//if (arr.length === 0) return 0;
//  let sum = 0;
//  for(let i = 0; i < arr.length; i++){
//   sum += arr[i];
//}
//return sum;
//}

function summElementsWorker(...arr) {
	const initialValue = 0;
	const sumWithInitial = arr.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue,
	);
	return sumWithInitial;
}


function differenceMaxMinWorker(...arr) {
	let result;
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	if (max === -Infinity) {
		result = 0;
	} else {
		result = max - min;
	}
	return result;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	//if (!arr.length) return 0; (boolean)
	let sumEvenElement = 0;
	let sumOddElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	return sumEvenElement - sumOddElement;
}


function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	if (countEvenElement === 0) return 0;
	return +(sumEvenElement / countEvenElement).toFixed(2);
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		//Внутри цикла каждый перебираемый элемент передавайте в функцию-насадку. 
		//Используйте spread-оператор для разделения массива элементов на отдельные элементы. 
		//Результат функции сохраните в отдельную константу.
		const result = func(...arrOfArr[i]);
		console.log('result:', result);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}