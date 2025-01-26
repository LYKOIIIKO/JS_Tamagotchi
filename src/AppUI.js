let AppUI = function() {
	AppCore.apply(this, arguments);

	let elems = null;
	
	this.createUI = () => {
		let root = document.querySelector('#root');

		let appElem = document.createElement('div');
		appElem.classList.add('app');

		let appContainer = document.createElement('div');
		appContainer.classList.add('container');

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
			appScreenTime.innerHTML = '&#8203;';
				let appScreenTimeContainer = document.createElement('div');
				appScreenTimeContainer.classList.add('app__screen_time_container');
					let appScreenName = document.createElement('span'); 
					appScreenName.classList.add('app__screen_name');
					let appScreenCount = document.createElement('span'); 
					appScreenCount.classList.add('app__screen_time_count');
			let appScreenView = document.createElement('div');
			appScreenView.classList.add('app__screen_view');
				let appScreenGifBorn = document.createElement('div');
				appScreenGifBorn.classList.add('app__screen_gifBorn');
				let appScreenGifDeath = document.createElement('div');
				appScreenGifDeath.classList.add('app__screen_gifDeath');
				let appScreenGifEat = document.createElement('div');
				appScreenGifEat.classList.add('app__screen_gifEat');
				let appScreenGifHealthLess = document.createElement('div');
				appScreenGifHealthLess.classList.add('app__screen_gifHealthLess');
				let appScreenGifNeedEat = document.createElement('div');
				appScreenGifNeedEat.classList.add('app__screen_gifNeedEat');
				let appScreenGifNeedSleep = document.createElement('div');
				appScreenGifNeedSleep.classList.add('app__screen_gifNeedSleep');
				let appScreenGifPlay = document.createElement('div');
				appScreenGifPlay.classList.add('app__screen_gifPlay');
				let appScreenGifSleep = document.createElement('div');
				appScreenGifSleep.classList.add('app__screen_gifSleep');
				let appScreenGifWalk = document.createElement('div');
				appScreenGifWalk.classList.add('app__screen_gifWalk');

			let appScreenStatus = document.createElement('div');
			appScreenStatus.classList.add('app__screen_status');
			appScreenStatus.innerHTML = '&#8203;';
				let appScreenContainer = document.createElement('div');
				appScreenContainer.classList.add('app__screen_container');
					let appScreenLife = document.createElement('span');
					appScreenLife.classList.add('app__screen_life');
					let appScreenFood = document.createElement('span');
					appScreenFood.classList.add('app__screen_food');
					let appScreenSleep = document.createElement('span');
					appScreenSleep.classList.add('app__screen_sleep');

		let appBottom = document.createElement('div');
		appBottom.classList.add('app__bottom');
			let appList = document.createElement('ul');
			appList.classList.add('app__bottom_list');
				let appItemEat = document.createElement('li');
				appItemEat.classList.add('app__bottom_item');
					let appBtnEatName = document.createElement('span');
					appBtnEatName.classList.add('app__bottom_btnName');
					appBtnEatName.innerHTML = 'eat';
					let appBtnEat = document.createElement('button');
					appBtnEat.classList.add('app__bottom_btn');
					appBtnEat.classList.add('app__bottom_btn_eat');
				let appItemSleep = document.createElement('li');
				appItemSleep.classList.add('app__bottom_item');
					let appBtnSleepName = document.createElement('span');
					appBtnSleepName.classList.add('app__bottom_btnName');
					appBtnSleepName.innerHTML = 'sleep';
					let appBtnSleep = document.createElement('button');
					appBtnSleep.classList.add('app__bottom_btn');
					appBtnSleep.classList.add('app__bottom_btn_sleep');
				let appItemPlay = document.createElement('li');
				appItemPlay.classList.add('app__bottom_item');
					let appBtnPlayName = document.createElement('span');
					appBtnPlayName.classList.add('app__bottom_btnName');
					appBtnPlayName.innerHTML = 'play';
					let appBtnPlay = document.createElement('button');
					appBtnPlay.classList.add('app__bottom_btn');
					appBtnPlay.classList.add('app__bottom_btn_play');
		
		appItemEat.append(appBtnEatName, appBtnEat);
		appItemSleep.append(appBtnSleepName, appBtnSleep);			
		appItemPlay.append(appBtnPlayName, appBtnPlay);

		appList.append(appItemEat, appItemSleep, appItemPlay);

		appBottom.append(appList)


		appScreenContainer.append(appScreenLife, appScreenFood, appScreenSleep);
		appScreenStatus.append(appScreenContainer);

		appScreenView.append(appScreenGifBorn, appScreenGifDeath, appScreenGifEat, appScreenGifHealthLess, appScreenGifNeedEat, appScreenGifNeedSleep, appScreenGifPlay, appScreenGifSleep, appScreenGifWalk);

		appScreenTimeContainer.append(appScreenName, appScreenCount)
		appScreenTime.append(appScreenTimeContainer);


		appScreen.append(appScreenTime, appScreenView, appScreenStatus);


		appTop.append(appTopBtn, appTopBtnName);


		appContainer.append(appTop, appScreen, appBottom);

		appElem.append(appContainer);

		root.append(appElem);
		console.log(root);

		return {
			btnOn: appTopBtn,
			btnEat: appBtnEat,
			btnSleep: appBtnSleep,
			btnPlay: appBtnPlay,
			petName: appScreenName,
			liveCount: appScreenCount,
			screen: appScreenView,
			statusLife: appScreenLife,
			statusFood: appScreenFood,
			statusSleep: appScreenSleep
		}
	}

	let on = () => {}

	let off = () => {}

	let init = () => {
		elems = this.createUI();
	}
}