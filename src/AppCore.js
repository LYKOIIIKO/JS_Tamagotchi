let AppCore = function() {
	let data = {};

	let foodAmount = 5, //amount of food a pet has
		healthAmount = 5, //amount of health a pet has
		sleepAmount = 8; //amount of sleep a pet has

	let timerHealthWork = false,
		timerGiveHealthWork = false,
		gameOver = false;

	let intervalFood = 60000, //basic intervals
		intervalSleep = 60000,
		intervalPickUpHealth = 60000,
		intervalGiveHealth = 30000;

	this.create = (mode, name) => {
		timerHealthWork = false,
		timerGiveHealthWork = false,
		gameOver = false;

		if (mode) { //FAST mode intervals
			intervalFood = 3000,
			intervalHealth = 5000,
			intervalSleep = 5000,
			intervalPickUpHealth = 10000,
			intervalGiveHealth = 3000;
		}
		else {
			intervalFood = 60000, //basic intervals
			intervalSleep = 60000,
			intervalPickUpHealth = 60000,
			intervalGiveHealth = 30000;
		}
		

		data.name = name || 'Pusheen';
			
		let dateNow = new Date() //date in RU format
		let opt = { 
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		};

		data.date = dateNow.toLocaleString('ru', opt);

		data.hours1 = 0;
		data.hours2 = 0;
		data.minutes1 = 0;
		data.minutes2 = 0;
		data.timer;

		data.food = foodAmount;

		data.health = healthAmount;

		data.sleep = sleepAmount;

		data.foodMax = foodAmount;
		data.sleepMax = sleepAmount;
		data.healthMax = healthAmount;
		
		data.timerHealthWork = timerHealthWork;
		data.timerGiveHealthWork = timerGiveHealthWork;
		data.gameOver = gameOver;

		return data;
	}

	this.giveFood = (bar, life) => {
		if (gameOver) return;

		if (data.food < foodAmount) data.food = foodAmount;
		this.get();

		this.statusBar(bar, data.food, data.foodMax);

		clearInterval(timerFood);
		this.pickUpFood(bar, life);
	}

	this.pickUpFood = (bar, life) => {
		timerFood = setInterval(() => {
			if (data.food > 0) data.food--;;
			
			this.statusBar(bar, data.food, data.foodMax);
			
			if (data.food == 0 && timerHealthWork == false) this.pickUpHealth(life);
		}, intervalFood, bar, life);
	}
	
	this.giveHealth = (life) => {

		timerGiveHealth = setInterval(() => {

			if (data.health < healthAmount && data.food >= 4 && data.sleep >= 5) {
				life.childNodes[data.health].querySelector('path').style.fill = '#e32636';
				data.health++;
				timerGiveHealthWork = true;
				data.timerGiveHealthWork = timerGiveHealthWork;
				timerHealthWork = false;
				data.timerHealthWork = timerHealthWork;
				clearInterval(timerHealth);
			}
			else timerGiveHealthWork = false;
			data.timerGiveHealthWork = timerGiveHealthWork;
		}, intervalGiveHealth, life);
	}

	this.pickUpHealth = (life) => {
		timerHealthWork = true;
		data.timerHealthWork = timerHealthWork;
		
		timerHealth = setInterval(() => {
			data.health--;

			life.childNodes[data.health].querySelector('path').style.fill = '#333';

			if (data.food > 0 || data.sleep > 0) {
				timerHealthWork = false;
				data.timerHealthWork = timerHealthWork;
				clearInterval(timerHealth);
			} 
			
			if (data.health == 0) this.gameOver();
		}, intervalPickUpHealth, life);
	}
	
	this.giveSleep = (bar, life) => {
		if (gameOver) return;

		if (data.sleep < sleepAmount) data.sleep = sleepAmount;

		this.statusBar(bar, data.sleep, data.sleepMax);

		clearInterval(timerSleep);
		this.pickUpSleep(bar, life);
	}

	this.pickUpSleep = (bar, life) => {
		timerSleep = setInterval(() => {
			if (data.sleep > 0) data.sleep--;;
			
			this.statusBar(bar, data.sleep, data.sleepMax);

			if (data.sleep == 0 && timerHealthWork == false) this.pickUpHealth(life);
		}, intervalSleep, bar, life);
	}

	this.timerLive = (elem) => {
		let hours1 = 0,
			hours2 = 0,
			minutes1 = 0,
			minutes2 = 1,
			timer;

		timerCount = setInterval(() => {
			timer = hours1 + '' + hours2 + ':' + minutes1 + '' + minutes2;

			if(minutes2 < 10) minutes2++;
			if (minutes2 == 10) {
				minutes2 = 0;
				minutes1++;
			}
			
			if(minutes1 == 6) {
				minutes1 = 0;
				hours2++;
			}

			if (hours2 == 10) {
				hours2 = 0;
				hours1++;
			}

			if (hours1 == 10) clearInterval(timerLive);
			
			elem.innerHTML = timer;
		}, 1000, elem);
	}

	this.statusBar = (bar, count, amount) => {
		let barLength = (count/amount) * 100;
		bar.style.width = barLength + '%';
	}

	this.get = () => {
		return data;
	}

	this.stop = () => {
		clearInterval(timerFood);
		if(timerHealthWork) clearInterval(timerHealth);
		clearInterval(timerSleep);
		clearInterval(timerGiveHealth);
		clearInterval(timerCount);

		data = {};
		timerHealthWork = false;
	}

	this.gameOver = () => {
		gameOver = true;
		data.gameOver = gameOver;

		clearInterval(timerFood);
		clearInterval(timerHealth);
		clearInterval(timerSleep);
		clearInterval(timerGiveHealth);
		clearInterval(timerCount);
	}
}