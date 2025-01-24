let AppUI = function() {
	AppCore.apply(this, arguments);
	
	let createUI = () => {
		let appElem = document.createElement('div');
		appElem.classList.add('app');

		let appTop = document.createElement('div');
		appTop.classList.add('app__top');
			let appTopBtn = document.createElement('button');
			appTopBtn.classList.add('app__top_btn');

			let appTopBtnName = document.createElement('span');
			appTopBtnName.classList.add('app__top_btnName');
			appTopBtnName.innerHTML = 'on/off';

		let appScreen = document.createElement('div');
		appScreen.classList.add('app__screen');
			let appScreenTime = document.createElement('div');
			appScreenTime.classList.add('app__screen_time');
				


		let appBottom = document.createElement('div');
		appBottom.classList.add('app__bottom');
	}

	let on = () => {}

	let off = () => {}

	let init = () => {}
}