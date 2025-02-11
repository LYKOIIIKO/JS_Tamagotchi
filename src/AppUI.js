let AppUI = function() {
	AppCore.apply(this, arguments);

	let elems = null,
		check = false,
		dataTmp;

	let timerActionWork = false;

	let gameOver = false;
	
	let createUI = () => { //build HTML structure
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

			let appFastMode = document.createElement('div');
			appFastMode.classList.add('alert_fastMode');
				let appFastModeText = document.createElement('div');
				appFastModeText.classList.add('alert_fastMode_text');
				appFastModeText.innerHTML = '';

				let appFastModeBtns = document.createElement('div');
				appFastModeBtns.classList.add('alert_fastMode_btns');
					let appFastModeBtnY = document.createElement('button');
					appFastModeBtnY.classList.add('alert_fastMode_BtnY');
					appFastModeBtnY.innerHTML = 'yes';
					let appFastModeBtnN = document.createElement('button');
					appFastModeBtnN.classList.add('alert_fastMode_BtnN');
					appFastModeBtnN.innerHTML = 'no';
		
		appFastModeBtns.append(appFastModeBtnY, appFastModeBtnN);
		appFastMode.append(appFastModeText, appFastModeBtns);

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


		appScreen.append(appScreenTime, appScreenView, appScreenStatus, appFastMode);


		appTop.append(appTopBtn, appTopBtnName);


		appContainer.append(appTop, appScreen, appBottom);

		appElem.append(appContainer);

		

		return {
			main: appElem,
			btnOn: appTopBtn,
			btnEat: appBtnEat,
			btnSleep: appBtnSleep,
			btnPlay: appBtnPlay,
			petName: appScreenName,
			timer: appScreenCount,
			screen: appScreenView,
			statusLife: appScreenLife,
			statusFood: appScreenFood,
			statusSleep: appScreenSleep,
			alertFastMode: appFastMode
		}
	}

	let onEnable = () => { //when press button on/off
		if (check) { //stop game if it works
			this.stop();
			clear();
		}

		if(check) return;

		check = true;
		gameOver = false;
		
		let data = this.create();

		timerMessage(elems.alertFastMode, 'Do you want to run FAST mode?');
		
		elems.petName.innerHTML = data.name;
		elems.timer.innerHTML = '00:00';
		elems.statusLife.innerHTML = `life ${data.health}/${data.healthMax}`;
		elems.statusFood.innerHTML = `food ${data.food}/${data.foodMax}`;
		elems.statusSleep.innerHTML = `sleep ${data.sleep}/${data.sleepMax}`;

		bornActive();

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
		

		this.timerLive(elems.timer);
		this.pickUpFood(elems.statusFood, elems.statusLife);
		this.pickUpSleep(elems.statusSleep, elems.statusLife);
		this.giveHealth(elems.statusLife);

		getData();

		elems.btnEat.addEventListener('click', onEat);
		elems.btnSleep.addEventListener('click', onSleep);
		elems.btnPlay.addEventListener('click', onPlay);
	}

	let onEat = () => { //when press button eat
		if (gameOver) return;
		
		this.giveFood(elems.statusFood);
		eatingActive();
	}

	let onSleep = () => { //when press button sleep
		if (gameOver) return;

		this.giveSleep(elems.statusSleep);
		sleepingActive();
	}

	let onPlay = () => { //when press button play
		if (gameOver) return;

		clearActive();

		let play = elems.screen.querySelector('.app__screen_gifPlay');
		play.classList.add('active');

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
	}

	let clear = () => { //clear screen when game stop
		elems.petName.innerHTML = '';
		elems.timer.innerHTML = '';
		elems.statusLife.innerHTML = '';
		elems.statusFood.innerHTML = '';
		elems.statusSleep.innerHTML = '';

		clearActive();
		clearTimeout(timerClear);

		elems.btnEat.removeEventListener('click', onEat);
		elems.btnSleep.removeEventListener('click', onSleep);
		elems.btnPlay.removeEventListener('click', onPlay);

		setTimeout(() => { //lifehack, without this nothing is work
			check = false;
		}, 1);
	}

	let bornActive = () => {
		let born = elems.screen.querySelector('.app__screen_gifBorn');
		born.classList.add('active');
	}

	let clearActive = () => { // remove active class of all elements
		let active = elems.screen.querySelector('.active');
		active.classList.remove('active');
	}

	let walkActive = () => {
		let walk = elems.screen.querySelector('.app__screen_gifWalk');
		walk.classList.add('active');
	}

	let needEatActive = () => {
		clearActive();

		let needEat = elems.screen.querySelector('.app__screen_gifNeedEat');
		needEat.classList.add('active');
	}

	let eatingActive = () => {
		clearActive();

		let eat = elems.screen.querySelector('.app__screen_gifEat');
		eat.classList.add('active');

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
	}

	let needSleepActive = () => {
		clearActive();

		let needSleep = elems.screen.querySelector('.app__screen_gifNeedSleep');
		needSleep.classList.add('active');
	}

	let sleepingActive = () => {
		clearActive();

		let sleep = elems.screen.querySelector('.app__screen_gifSleep');
		sleep.classList.add('active');

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
	}

	let healthLessActive = () => {
		clearActive();

		let healthLess = elems.screen.querySelector('.app__screen_gifHealthLess');
		healthLess.classList.add('active');

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
	}

	let getHealthActive = () => {
		clearActive();

		let giveHealth = elems.screen.querySelector('.app__screen_gifPlay');
		giveHealth.classList.add('active');

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
	}

	let deathActive = () => {
		clearActive();

		let death = elems.screen.querySelector('.app__screen_gifDeath');
		death.classList.add('active');
	}

	let timerAction = () => { //timer to set default animation
		timerActionWork = true;

		timerClear = setTimeout(() => {
			clearActive();
			walkActive();

			timerActionWork = false;
		}, 3000);
	}

	let timerMessage = (object, text) => {
		let i = 0;
		let timer = setInterval(() => {
			if(i == text.length - 1) clearInterval(timer);
			object.innerHTML += text[i];
			i++;
		  }, 50);
	}
	

	let getData = () => { //working all time. Interviews data to get information of Pet parameters
		timerGet = setInterval(() => {
			dataTmp = this.get();

			//if (dataTmp.timerHealthWork) healthLessActive();
			// if (dataTmp.timerGiveHealthWork) getHealthActive();

			if (dataTmp.food == 0) needEatActive();

			if (dataTmp.food > 0 && dataTmp.sleep == 0) needSleepActive();

			if (dataTmp.health == 0) deathActive();

			if (dataTmp.gameOver) gameOver = true;
		}, 1000);
	}

	let init = () => {
		elems = createUI();
		root.append(elems.main);

		elems.btnOn.addEventListener('click', onEnable);
	}

	init();
}