"use strict";


	
const number = Math.floor(Math.random() * 100) + 1;
console.log(number);
let count = 3;


document.getElementById('check').onclick = function () {
		if(count > 0) {
				let usernum = +document.getElementById('mynum').value;
				usernum = parseInt(usernum);
				let out = document.getElementById('out');
				if(usernum == number ) {
					out.innerHTML = 'Правильно!';
				}
				if (usernum > number) {
					out.innerHTML = 'Меньше!';
				}
				if (usernum < number) {
					out.innerHTML = 'Больше!';
				}

				if(!parseInt(usernum)) {
					out.innerHTML = 'Введи число!';
				}

				if(usernum == null || usernum == "") {
					out.innerHTML = 'Отмена';
				}
				count = count - 1;
				document.getElementById('count').innerHTML = `Осталось попыток: ${count}`;
		}		
		else {
			alert('Попытки закончены, вы проиграли. Страница будет перезагружена');
			location.reload();
		}

}


