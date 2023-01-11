

const number = Math.floor(Math.random() * 100) + 1;
console.log(number);


document.getElementById('check').onclick = function () {
	let usernum = document.getElementById('mynum').value;
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
	if(usernum === null || usernum === "") {
		out.innerHTML = 'Oтмена';
	}
	else {
		out.innerHTML = 'Отмена!';
	}
}
