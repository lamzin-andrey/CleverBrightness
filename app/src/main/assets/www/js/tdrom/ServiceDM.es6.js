//Здесь просто заглушка, в окончательный проект этот код никак не попадёт
class ServiceDM extends Context {
	/**
	 * Стандартные методы для реализации service
	*/
	onCreate() {
		//Toast.makeText(this, "Clever brightness created", Toast.LENGTH_SHORT).show();
	}
	onDestroy() {
		//Toast.makeText(this, "Clever brightness start destroyed", Toast.LENGTH_SHORT).show();
	}
	/**
	 * @description Запускает ежеминутный таймер при запуске 
	*/
	static onStart() {
		//Toast.makeText(this, "Clever brightness start", Toast.LENGTH_SHORT).show();
		console.log("Clever brightness start");
		window._DMinstance = new ServiceDM();
		window._DMinstance.runTimer();
	}
	//----TODO это написать сначала на js и затестить
	/**
	 * @description Раз в минуту сравнивает текущее значение яркости дисплея с предыдущим.
	 * Если она изменилась, записывает в журнал.
	 * Если не изменилась, пытается сделать по данным журнала изменений, не надо ли изменить яркость, и если надо, то меняет.
	*/
	process() {
		let cb = new CleverBrightness();
		cb.process(this);
	}
	//-- конец TODO это написать сначала на js и затестить
	/**
     * @description Запуск таймера
    */
    runTimer() {
			this.process();
		setInterval(()=>{
			this.process();//TODO вся бизнес-логика тут
		}, 60*1000);
    	
    }
}
