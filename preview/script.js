"use strict";

const btnPhone = document.querySelector("#iphone"),
		btnMacbook = document.querySelector("#macbook"),
		images = document.querySelectorAll("img");

let macbookAnimation;

btnMacbook.addEventListener("click", () => {
	if (!macbookAnimation) {
		macbookAnimation = images[0].animate([
			{transform: 'translateY (0px) rotate (0deg)',
			filter: 'opacity(100%)'
			},
			{transform: 'translateY (100px) rotate (180deg)',
			filter: 'opacity(50%)'
			},
			{transform: 'translateY (0px) rotate (360deg)',
			filter: 'opacity(75%)'
			}
		], {
		duration: 3000,
		iterations: Infinity
	});
	} else if (macbookAnimation.playstate === 'pause') {
		macbookAnimation.play();
	} else {
		macbookAnimation.pause();
	}
});
