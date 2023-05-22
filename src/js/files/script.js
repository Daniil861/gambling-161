import { deleteMoney, checkRemoveAddClass, noMoney, getRandom, addMoney, getRandom_2 } from './functions.js';
import { startData } from './startData.js';


export function initStartData() {

	if (sessionStorage.getItem('money')) {
		writeScore();
	} else {
		sessionStorage.setItem('money', startData.bank);
		writeScore();
	}

}

function writeScore() {
	if (document.querySelector(startData.nameScore)) {
		document.querySelectorAll(startData.nameScore).forEach(el => {
			el.textContent = sessionStorage.getItem('money');
		})
	}
}


initStartData();


//========================================================================================================================================================
export function showFinalScreen(count = 0) {
	const final = document.querySelector('.final');
	const finalCheck = document.querySelector('.final-check');

	finalCheck.textContent = `+${count}`;

	setTimeout(() => {
		final.classList.add('_visible');
		addMoney(count, '.score', 1000, 2000);
	}, 500);
}
