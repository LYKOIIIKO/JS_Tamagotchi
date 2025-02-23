let AppUI = function() {
	AppCore.apply(this, arguments);

	let elems = null,
		check = false,
		dataTmp,
		message = false;

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
			let appTopContainer = document.createElement('div');
			appTopContainer.classList.add('app__top_container');
				let appTopBtn = document.createElement('button');
				appTopBtn.classList.add('app__top_btn');

				let appTopBtnName = document.createElement('span');
				appTopBtnName.classList.add('app__top_btnName');
				appTopBtnName.innerHTML = 'on/off';
			
			let appMusicBtn = document.createElement('button');
			appMusicBtn.classList.add('app__top_musicBtn');
			appMusicBtn.classList.add('muted');

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
				let appScreenContainer = document.createElement('div');
				appScreenContainer.classList.add('app__screen_container');
					let appScreenLifeList = document.createElement('ul');
					appScreenLifeList.classList.add('app__screen_life_list');
						let appScreenLifeItem1 = document.createElement('li');
						appScreenLifeItem1.classList.add('app__screen_life_item');
						
						let appScreenLifeItem2 = document.createElement('li');
						appScreenLifeItem2.classList.add('app__screen_life_item');
						
						let appScreenLifeItem3 = document.createElement('li');
						appScreenLifeItem3.classList.add('app__screen_life_item');
						
						let appScreenLifeItem4 = document.createElement('li');
						appScreenLifeItem4.classList.add('app__screen_life_item');
						
						let appScreenLifeItem5 = document.createElement('li');
						appScreenLifeItem5.classList.add('app__screen_life_item');
						
					let appScreenFood = document.createElement('div');
					appScreenFood.classList.add('app__screen_food');
						let appScreenFoodBar = document.createElement('div');
						appScreenFoodBar.classList.add('app__screen_food_bar');

					let appScreenSleep = document.createElement('div');
					appScreenSleep.classList.add('app__screen_sleep');
						let appScreenSleepBar = document.createElement('div');
						appScreenSleepBar.classList.add('app__screen_sleep_bar');
					
					// let appScreenSleep = document.createElement('span');
					// appScreenSleep.classList.add('app__screen_sleep');

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


		let appMusic = document.createElement('audio');
		appMusic.setAttribute('src', '../assets/sounds/bg_music.mp3');
		appMusic.setAttribute('loop', 'true');
		appMusic.volume = '0.005';
		
		

		appItemEat.append(appBtnEatName, appBtnEat);
		appItemSleep.append(appBtnSleepName, appBtnSleep);			
		appItemPlay.append(appBtnPlayName, appBtnPlay);

		appList.append(appItemEat, appItemSleep, appItemPlay);

		appBottom.append(appList)

		appScreenLifeList.append(appScreenLifeItem1, appScreenLifeItem2, appScreenLifeItem3, appScreenLifeItem4, appScreenLifeItem5);
		appScreenFood.append(appScreenFoodBar);
		appScreenSleep.append(appScreenSleepBar);
		appScreenContainer.append(appScreenLifeList, appScreenFood, appScreenSleep);
		appScreenStatus.append(appScreenContainer);

		appScreenView.append(appScreenGifBorn, appScreenGifDeath, appScreenGifEat, appScreenGifHealthLess, appScreenGifNeedEat, appScreenGifNeedSleep, appScreenGifPlay, appScreenGifSleep, appScreenGifWalk);

		appScreenTimeContainer.append(appScreenName, appScreenCount)
		appScreenTime.append(appScreenTimeContainer);


		appScreen.append(appScreenTime, appScreenView, appScreenStatus);

		appTopContainer.append(appTopBtn, appTopBtnName);
		appTop.append(appTopContainer, appMusicBtn);


		appContainer.append(appTop, appScreen, appBottom);

		appElem.append(appContainer);	

		appMusicBtn.addEventListener('click', () => {
			if (appMusic.paused){
				appMusicBtn.classList.remove('muted');
				appMusic.play();
			} 
			else {
				appMusicBtn.classList.add('muted');
				appMusic.pause();
			} 
		})

		return {
			main: appElem,
			btnOn: appTopBtn,
			btnEat: appBtnEat,
			btnSleep: appBtnSleep,
			btnPlay: appBtnPlay,
			petName: appScreenName,
			timer: appScreenCount,
			screen: appScreenView,
			status: appScreenContainer,
			statusLife: appScreenLifeList,
			statusFood: appScreenFood,
			statusSleep: appScreenSleep,
			music:appMusic,
			musicBtn:appMusicBtn
		}
	}

	let onEnable = () => { //when press button on/off

		if (elems.music.paused && !message){
			elems.musicBtn.classList.remove('muted');
			elems.music.play();
		} else if(!elems.music.paused && message) {
			elems.musicBtn.classList.add('muted');
			elems.music.pause();
		} 

		if (check) { //stop game if it works
			this.stop();
			clear();
		}

		if(check) return;

		if (message) { //off tamagotchi when message is on screen and btn pressed
			let item = document.querySelector('.alert');
			item.remove();
			message = false;
			return;
		}

		messageFastMode();
	}

	let onStart = (mode, name) => {
		check = true;
		gameOver = false;

		let data = this.create(mode, name);
		
		elems.petName.innerHTML = data.name;
		elems.timer.innerHTML = '00:00';

		//elems.statusLife.innerHTML = `life ${data.health}/${data.healthMax}`;
		elems.statusLife.childNodes[0].innerHTML = '<svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#e32636"/></svg>';
		elems.statusLife.childNodes[1].innerHTML = '<svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#e32636"/></svg>';
		elems.statusLife.childNodes[2].innerHTML = '<svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#e32636"/></svg>';
		elems.statusLife.childNodes[3].innerHTML = '<svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#e32636"/></svg>';
		elems.statusLife.childNodes[4].innerHTML = '<svg width="15px" height="15px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#e32636"/></svg>';
	
		elems.statusFood.style.display = 'block';
		elems.statusFood.childNodes[0].style.width = '100%';

		elems.statusSleep.style.display = 'block';
		elems.statusSleep.childNodes[0].style.width = '100%';
		

		bornActive();

		if(timerActionWork) clearTimeout(timerClear);
		timerAction();
		

		this.timerLive(elems.timer);
		this.pickUpFood(elems.statusFood.childNodes[0], elems.statusLife);
		this.pickUpSleep(elems.statusSleep.childNodes[0], elems.statusLife);
		this.giveHealth(elems.statusLife);

		getData();

		elems.btnEat.addEventListener('click', onEat);
		elems.btnSleep.addEventListener('click', onSleep);
		elems.btnPlay.addEventListener('click', onPlay);
	}

	let onEat = () => { //when press button eat
		if (gameOver) return;
		
		this.giveFood(elems.statusFood.childNodes[0], elems.statusLife);
		eatingActive();
	}

	let onSleep = () => { //when press button sleep
		if (gameOver) return;

		this.giveSleep(elems.statusSleep.childNodes[0], elems.statusLife);
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
		elems.statusLife.childNodes[0].innerHTML = '';
		elems.statusLife.childNodes[1].innerHTML = '';
		elems.statusLife.childNodes[2].innerHTML = '';
		elems.statusLife.childNodes[3].innerHTML = '';
		elems.statusLife.childNodes[4].innerHTML = '';
		
		elems.statusFood.style.display = 'none';
		elems.statusSleep.style.display = 'none';

		clearActive();
		clearTimeout(timerClear);

		elems.btnEat.removeEventListener('click', onEat);
		elems.btnSleep.removeEventListener('click', onSleep);
		elems.btnPlay.removeEventListener('click', onPlay);

		setTimeout(() => { //lifehack, without this nothing is work
			check = false;
			message = false;
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

	let timerMessage = (object, text) => { //animation of text typing
		let i = 0;
		let timer = setInterval(() => {
			if(i == text.length - 1) clearInterval(timer);
			object.innerHTML += text[i];
			i++;
		  }, 50);
	}

	let messageFastMode = () => {
		let mode;
		message = true;

		let appFastMode = document.createElement('div');
		appFastMode.classList.add('alert_fastMode');
		appFastMode.classList.add('alert');
				let appFastModeText = document.createElement('div');
				appFastModeText.classList.add('alert_fastMode_text');
				appFastModeText.innerHTML = '';

				let appFastModeBtns = document.createElement('div');
				appFastModeBtns.classList.add('alert_fastMode_btns');
					let appFastModeBtnY = document.createElement('button');
					appFastModeBtnY.classList.add('alert_fastMode_btnY');
					appFastModeBtnY.innerHTML = 'yes';
					let appFastModeBtnN = document.createElement('button');
					appFastModeBtnN.classList.add('alert_fastMode_btnN');
					appFastModeBtnN.innerHTML = 'no';
		
		appFastModeBtns.append(appFastModeBtnY, appFastModeBtnN);
		appFastMode.append(appFastModeText, appFastModeBtns);
		elems.screen.append(appFastMode);

		timerMessage(appFastModeText, 'Do you want to run FAST mode?');

		appFastModeBtnY.addEventListener('click', () => {
			mode = true;
			messageSetName(mode);
			appFastMode.remove();
		})

		appFastModeBtnN.addEventListener('click', () => {
			mode = false;
			messageSetName(mode);
			appFastMode.remove();
		})
		
	}

	let messageSetName = (mode) => {
		let name;

		let appSetName = document.createElement('div');
		appSetName.classList.add('alert_setName');
		appSetName.classList.add('alert');
				let appSetNameText = document.createElement('div');
				appSetNameText.classList.add('alert_setName_text');
				appSetNameText.innerHTML = '';

				let appSetNameInput = document.createElement('input');
				appSetNameInput.classList.add('alert_setName_input');
				appSetNameInput.setAttribute('autofocus', '');
				appSetNameInput.setAttribute('title', 'Max name length 10 symbols')

				let appSetNameBtn = document.createElement('button');
				appSetNameBtn.classList.add('alert_setName_btn');
				appSetNameBtn.innerHTML = 'ok';
					
		appSetName.append(appSetNameText, appSetNameInput, appSetNameBtn);
		elems.screen.append(appSetName);

		timerMessage(appSetNameText, "Please enter the pet's name...");

		appSetNameBtn.addEventListener('click', () => {
			name = appSetNameInput.value;

			if (name.length > 10) {
				appSetNameInput.value = '';
				appSetNameText.innerHTML = '';
				timerMessage(appSetNameText, "Max name length 10 symbols.");
				return;
			}

			onStart(mode, name);
			appSetName.remove();
		})

		appSetNameInput.addEventListener('keypress', (event) => {
			if(event.key == 'Enter') {
				name = appSetNameInput.value;

				if (name.length > 10) {
					appSetNameInput.value = '';
					appSetNameText.innerHTML = '';
					timerMessage(appSetNameText, "Max name length 10 symbols.");
					return;
				}

				onStart(mode, name);
				appSetName.remove();
			}
			
		})
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