'use strict';

const inputPLN = document.querySelector('#pln'),
		  inputUsd = document.querySelector('#usd');

inputPLN.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	request.addEventListener('load', () => {
		if (request.readyState === 4 && request.status === 200) {
			console.log(request.response);
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputPLN.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = 'Что-то пошло не так';
		}
	});
	//status
	//statusText
	//response
	//readyState

});
