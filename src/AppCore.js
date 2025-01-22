let AppCore = function() {
	let data = {};

	let foodAmount = 5, //amount of food a pet has
		healthAmount = 5, //amount of health a pet has
		sleepAmount = 8; //amount of sleep a pet has

	let timerHealthWork = false;

	this.create = () => {
		//let name = prompt('Please enter pet name...');
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

		data.food = foodAmount;

		data.health = healthAmount;

		data.sleep = sleepAmount;

		this.pickUpFood();
		this.pickUpSleep();
		this.giveHealth();
	}

	this.giveFood = () => {
		if (data.food < foodAmount) data.food = foodAmount;
		this.get();
	}

	this.pickUpFood = () => {
		timerFood = setInterval(() => {
			if (data.food > 0) data.food--;;
			this.get();
			
			if (data.food == 0 && timerHealthWork == false) this.pickUpHealth();
		}, 2000);
	}
	
	this.giveHealth = () => {
		timerGiveHealth = setInterval(() => {
			if (data.health < healthAmount && data.food == 5 && data.sleep >= 5) data.health++;
		}, 1000);
	}

	this.pickUpHealth = () => {
		timerHealthWork = true;

		timerHealth = setInterval(() => {
			data.health--;;
			this.get();

			if (data.food > 0 || data.sleep > 0) {
				timerHealthWork = false;
				clearInterval(timerHealth);
			} 
			
			if (data.health == 0) this.gameOver();
		}, 5000);
	}
	
	this.giveSleep = () => {
		if (data.sleep < sleepAmount) data.sleep = sleepAmount;
		this.get();
	}

	this.pickUpSleep = () => {
		timerSleep = setInterval(() => {
			if (data.sleep > 0) data.sleep--;;
			this.get();

			if (data.sleep == 0 && timerHealthWork == false) this.pickUpHealth();
		}, 20000);
	}

	this.get = () => {
		return console.log(data);
	}

	this.gameOver = () => {
		clearInterval(timerFood);
		clearInterval(timerHealth);
		clearInterval(timerSleep);
		clearInterval(timerGiveHealth);

		alert('Game Over!');
	}
}