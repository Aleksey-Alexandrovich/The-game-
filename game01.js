

"use strict";
// Задание №1
// Задача #1
// Переписать игровой бот для игры "Угадай число"
// Функционал остаётся прежний, но вместо цикла (while или for) используйте рекурсию
{
	let randomNum = parseInt(Math.random() * 100);

	function isNum(num) {
		return !isNaN(parseFloat(num)) && isFinite(num);
	}
	
	function guessNumber() {
		let userNum = prompt('Введите число');
		if (isNum(userNum)) {
			userNum = +userNum;
	
			if (userNum > randomNum) {
				alert('Вы ввели большее число');
			} else if (userNum < randomNum) {
				alert('Вы ввели меньшее число');
			} else if (userNum === randomNum) {
				alert('Верно, Вы угадали загаданное число!');
				return userNum;
			}
		} else {
			alert('Можно вводить только числа');
		}
		return guessNumber();
	}
	
	console.log(guessNumber());

}



///Игра с рекурсией
// Задание №2
// Напишите рекурсивную функцию,
// которая принимает один параметр массив,  генерирует целое число от 0 до 10
// включительно и добавляет его в массив.
// Каждый раз после добавления нового числа проверяет сумму элементов массива,
//  если она меньше 50 запускается снова передавая себе массив. Если сумма больше
// 50-ти, то функция возвращает этот массив.

function generate (newArray = []) {
	let randomNumber =  Math.floor(Math.random() * 10) + 1;
	console.log(randomNumber)
	newArray.push(randomNumber);
	let total = newArray.reduce((acc, sum) => acc + sum, 0);   
	console.log('total: ', total);

	if(total < 50)  {
		return generate(newArray);
	} else if(total > 50) {
		return newArray;

	}
	
};

console.log(generate());


///////////////////////////////////////////////////////////////////////




