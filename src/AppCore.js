let AppCore = function() {
	let data = {};

	let foodAmount = 5, //amount of food a character has
		healthAmount = 5, //amount of health a character has
		sleepAmount = 8; //amount of sleep a character has

	this.create = () => {
		//let name = prompt('Введите имя персонажа');
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
	}

	this.giveFood = () => {
		if (data.food < foodAmount) data.food++;
		this.get();

		clearInterval(timerFood);
		this.pickUpFood();
	}

	this.pickUpFood = () => {
		timerFood = setInterval(() => {
			data.food--;;
			//this.get();
			
			if (data.food == 0) {
				clearInterval(timerFood);

				this.pickUpHealth();
			}
		}, 2000);
	}
	
	this.giveHealth = () => {
		if (data.health < healthAmount) data.health++;
		this.get();
	}

	this.pickUpHealth = () => {
		timerHealth = setInterval(() => {
			data.health--;;
			this.get();
			
			if (data.health == 0 || data.food > 0) this.gameOver();
		}, 2000);
	}
	
	this.giveSleep = () => {
		if (data.sleep < sleepAmount) data.sleep++;
		this.get();

		clearInterval(timerSleep);
		this.pickUpSleep();
	}

	this.pickUpSleep = () => {
		timerSleep = setInterval(() => {
			if (data.health == 0) this.gameOver();

			data.sleep--;;
			this.get();

			if (data.sleep == 0) clearInterval(timerSleep);
		}, 3000);
	}

	this.get = () => {
		return console.log(data);
	}

	this.gameOver = () => {
		clearInterval(timerFood);
		clearInterval(timerHealth);
		clearInterval(timerSleep);

		alert('Game Over!');
	}
}