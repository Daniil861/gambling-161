import { deleteMoney, checkRemoveAddClass, noMoney, getRandom, addMoney, getRandom_2 } from './functions.js';
import { initStartData } from './script.js';
import { initGame, configThreeGame, resetGame } from './threeInRow.js';

import { configSlot } from './slot.js';
import { startData } from './startData.js';

const preloader = document.querySelector('.preloader');

// Объявляем слушатель событий "клик"

document.addEventListener('click', (e) => {
	initStartData();

	let targetElement = e.target;

	const preloader = document.querySelector('.preloader');
	const wrapper = document.querySelector('.wrapper');

	const money = +sessionStorage.getItem('money');
	const currentBet = +sessionStorage.getItem('current-bet');

	if (targetElement.closest('[data-btn="privacy"]')) {
		window.location.href = 'index.html';
	}

	if (targetElement.closest('.preloader__button')) {
		window.location.href = 'main.html';
	}

	if (targetElement.closest('[data-btn="game"]')) {
		// initGame();
		// addHoldBody();
		// setTimeout(() => {
		// 	wrapper.classList.add('_game');
		// }, 250);
		location.href = 'game.html';
	}

	if (targetElement.closest('[data-btn="game-home"]')) {
		location.href = 'main.html';
		// wrapper.classList.remove('_game');
		// removeHoldBody();
		// setTimeout(() => {
		// 	resetGame();
		// }, 250);
	}
	//========================================================================================================================================================
	if (targetElement.closest('[data-bet]')) {
		configSlot.bet = +targetElement.closest('[data-bet]').dataset.bet;
		checkRemoveAddClass('[data-bet]', '_active', targetElement.closest('[data-bet]'));
	}

})
