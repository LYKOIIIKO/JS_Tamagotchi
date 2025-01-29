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

	this.create = () => {
		timerHealthWork = false,
		timerGiveHealthWork = false,
		gameOver = false;

		this.confirm = confirm('Do you want to run FAST mode?');

		if (this.confirm) { //FAST mode intervals
			intervalFood = 3000,
			intervalHealth = 5000,
			intervalSleep = 5000,
			intervalPickUpHealth = 10000,
			intervalGiveHealth = 1000;
		}

		let name = prompt('Please enter pet name...');
		
		if (name.length > 10) {
			name = prompt('Max name length 10 symbols. Please enter pet name...');
			data.name = name || 'Pusheen';
		}
		else data.name = name || 'Pusheen';
			
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

	this.giveFood = (food) => {
		if (gameOver) return;

		if (data.food < foodAmount) data.food = foodAmount;
		this.get();

		food.innerHTML = `food ${data.food}/${foodAmount}`;
	}

	this.pickUpFood = (food, life) => {
		timerFood = setInterval(() => {
			if (data.food > 0) data.food--;;
			this.get();
			food.innerHTML = `food ${data.food}/${foodAmount}`;
			
			if (data.food == 0 && timerHealthWork == false) this.pickUpHealth(life);
		}, intervalFood, food, life);
	}
	
	this.giveHealth = (life) => {

		timerGiveHealth = setInterval(() => {

			if (data.health < healthAmount && data.food >= 4 && data.sleep >= 5) {
				data.health++;
				timerGiveHealthWork = true;
			}

			else timerGiveHealthWork = false;
			data.timerGiveHealthWork = timerGiveHealthWork;

			life.innerHTML = `life ${data.health}/${healthAmount}`;
		}, intervalGiveHealth, life);
	}

	this.pickUpHealth = (life) => {
		timerHealthWork = true;
		data.timerHealthWork = timerHealthWork;

		timerHealth = setInterval(() => {
			data.health--;;

			life.innerHTML = `life ${data.health}/${healthAmount}`;

			if (data.food > 0 || data.sleep > 0) {
				timerHealthWork = false;
				data.timerHealthWork = timerHealthWork;
				clearInterval(timerHealth);
			} 
			
			if (data.health == 0) this.gameOver();
		}, intervalPickUpHealth, life);
	}
	
	this.giveSleep = (sleep) => {
		if (gameOver) return;

		if (data.sleep < sleepAmount) data.sleep = sleepAmount;
		this.get();

		sleep.innerHTML = `sleep ${data.sleep}/${sleepAmount}`;
	}

	this.pickUpSleep = (sleep, life) => {
		timerSleep = setInterval(() => {
			if (data.sleep > 0) data.sleep--;;
			this.get();
			sleep.innerHTML = `sleep ${data.sleep}/${sleepAmount}`;

			if (data.sleep == 0 && timerHealthWork == false) this.pickUpHealth(life);
		}, intervalSleep, sleep, life);
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
		alert('Stop game');
	}

	this.gameOver = () => {
		gameOver = true;
		data.gameOver = gameOver;

		clearInterval(timerFood);
		clearInterval(timerHealth);
		clearInterval(timerSleep);
		clearInterval(timerGiveHealth);
		clearInterval(timerCount);

		alert('Game Over!');
	}
}