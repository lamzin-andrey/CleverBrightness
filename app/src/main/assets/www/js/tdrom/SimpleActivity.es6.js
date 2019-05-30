//Здесь просто заглушка, в окончательный проект этот код никак не попадёт

class SimpleActivity {
    
    onCreate(savedInstanceState) {
        
    }
	
	quit()
	{
        //SimpleActivity.this.finish();
        console.log('it Quit');
	}

    setLastErr(s) {
		this._lastErr = s;
    }
    
	startDMService()
    {
		try {
            let PHP = new PHPInterface(window);
            PHP.file_put_contents("lastmodtime", PHP.time());
			//TODO startService(new Intent(this, ServiceDM.class));
		} catch(e) {
            console.log(e);
			this._lastErr = e;
			return false;
		}
		return true;
	}
	
	stopDMService()
    {
		try {
			//TODO stopService(new Intent(this, ServiceDM.class));
		} catch( e) {
			this._lastErr = e.getMessage();
			return false;
		}
		return true;
	}
	
	toast(s)
	{
		try {
            //Toast.makeText(this, s, Toast.LENGTH_SHORT).show();
            OfflineTools.Notify(s);
		} catch(e) {
			this._lastErr = e.getMessage();
		}
	}
	
	/**
	 * Методы управления яркостью экрана
	*/
    getDisplayBrightness()
    {
		let n = DisplayManager.getDisplayBrightness(this);
		this._lastErr = DisplayManager._lastErr;
		return n;
	}
	setDisplayBrightness(brightness)
    {
		try {
			let b = DisplayManager.setDisplayBrightness(brightness, this);
			this._lastErr = DisplayManager._lastErr;
			return b;
		} catch ( e) {
			this._lastErr = e.getMessage();
		}
		return false;
	}
	
	getDisplayMaxBrightness()
    { 
		return DisplayManager.getDisplayMaxBrightness();
	}
	
	getDisplayMinBrightness()
    { 
		return DisplayManager.getDisplayMinBrightness();
	}
    
    setStr( s) {
        let PHP = new PHpInterface();
        //AndroidUlib.saveStr("testn1", s);
        PHP.file_put_contents("testn1", s);
    }
    
    getStr() {
        //return AndroidUlib.loadStr("testn1");
        return PHP.file_get_contents("testn1");
    }
    getLastErr() {
		return this._lastErr;
    }
	 
		getSystemLocale() {
			return 'en';
		}

    /**
     * @desc Перезапуск таймера
     * *
    
    public void onRestart() {
    	super.onRestart();
    	Log.i(TAG, "onRestart");
    	
    }
    /**
     * @desc Перезапуск таймера
     * *
    
    public void onResume() {
    	super.onResume();
    	Log.i(TAG, "onResume");
    	screenRelease();
    }
    /**
     * @desc Остановка приложения
     * *
    
    public void onStop() {
    	super.onStop();
    	Log.i(TAG, "on Stop");
    	screenRelease();    	
    }
    /**
     * @desc Десткрутор?
     * *
    
    public void onDestroy() {
    	super.onDestroy();
    	screenRelease();
    }
    /**
     * @desc Сделать так, чтобы экран не гас пока запущенно приложение
     * *
    private void setScreenBrige() {
    	screenRelease();
    	wakeLock = pm.newWakeLock(PowerManager.SCREEN_BRIGHT_WAKE_LOCK|PowerManager.ON_AFTER_RELEASE, TAG);
    	wake_lock_on = true;
    	Log.i(TAG, "try acquire");
    	wakeLock.acquire();
    }
    /**
     * @desc Сделать так, чтобы экран не гас пока запущенно приложение
     * *
    private void screenRelease() {
    	if (wake_lock_on == false) {
    		return;
    	}
    	if (wakeLock != null) {
    		Log.i(TAG, "try release");
    		wakeLock.release();
    		wake_lock_on = false;
    	}
    }
    /**
     * @desc Инициализую powerManager
     * *
    private void initLocker()  {
        pm = (PowerManager) getSystemService(POWER_SERVICE);
        Log.i(TAG, "was init");
    }*/
    
	
}
SimpleActivity.class = "SimpleActivity";

var OfflineTools = {
	Notify: function (s) {
		//FF
		if (window.Notification) {
			function _notify(s) {
				new Notification(s);
			}
			if (Notification.permission === 'granted') {
				_notify(s);
			} else {
				Notification.requestPermission(function(permission) {
					if (permission === 'granted') {
						_notify(s);
					}
				});
			}
		}
	}
};