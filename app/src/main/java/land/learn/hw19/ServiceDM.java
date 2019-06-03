package land.learn.hw19;
/**
 * @permissions
 * <uses-permission android:name="android.permission.WRITE_SETTINGS"></uses-permission>
 * 
 * @service
 * <application>
	 <service android:enabled="true" android:name=".ServiceDM"></service>
	</application>
 * 
 * @class ServiceDM позволяет управлять яркостью экрана
*/
import android.app.Service;
import android.os.IBinder;
import android.content.Intent;
import android.widget.Toast;
import android.os.CountDownTimer;
import java.util.Date;

//Далее импорты связанные непосредственно с приложением brightnesscontroller
import android.content.Context;

/**
 * @class ServiceDM Service Display Manager
 * Раз в минуту сравнивает текущее значение яркости дисплея с предыдущим.
 * Если она изменилась, записывает в журнал.
 * Если не изменилась, пытается сделать по данным журнала изменений, не надо ли изменить яркость, и если надо, то меняет.
 * 
 * Для описания
 * Если год назад в это время суток ваш дисплей был иной яркости чем сейчас, изменяет яркость.
 * Если данных за год назад нет, смотрит яркость дисплея в текущее время сутки назад и устанавливает её.
 * Если нет данных и за вчера, берет самые свежие из имеющихся данных.
 * Конец описания
 * 
 * Решение принимается анализом журнала изменений за последние (известные) трое суток
 * 
 * Все даты хранятся как число минут прошедщих с начала года ( с YYYY 01 01 00:00:00) и год YYYY при этом не важен, он не учитывается
 * 
*/
public class ServiceDM extends Service {
	static public String log = "";
	static public String _lastErr = "";
	static public ServiceDM _instance = null;
	
	private CountDownTimer _timer = null;
	
	/**
	 * Стандартные методы для реализации service
	*/
	@Override
	public IBinder onBind(Intent intent) {
		return null;
	}
	@Override
	public void onCreate()
	{
		Toast.makeText(this, "Intelligente Helligkeit erstellt", Toast.LENGTH_SHORT).show();
	}
	@Override
	public void onDestroy() {
		Toast.makeText(this, "Intelligente Helligkeit zerstört", Toast.LENGTH_SHORT).show();
	}
	@Override
	/**
	 * @description Запускает ежеминутный таймер при запуске 
	*/
	public void onStart(Intent intent, int nStart) {
		int doMute = intent.getIntExtra("noShowToast", 0);
		if (doMute == 0) {
			Toast.makeText(this, "Intelligente Helligkeit starten", Toast.LENGTH_SHORT).show();
		}
		_instance = this;
		runTimer();
	}
	//----TODO это написать сначала на js и затестить
	/**
	 * @description Раз в минуту сравнивает текущее значение яркости дисплея с предыдущим.
	 * Если она изменилась, записывает в журнал.
	 * Если не изменилась, пытается сделать по данным журнала изменений, не надо ли изменить яркость, и если надо, то меняет.
	*/
	public void process() {
		CleverBrightness cb = new CleverBrightness();
		cb.process(this);
	}
	//-- конец TODO это написать сначала на js и затестить
	/**
     * @description Запуск таймера
    */
    private void runTimer() {
		this.process();
    	long start = 60 * 1000;
    	_timer = new CountDownTimer(start, 30 * 1000) {
    		@Override
    		public void onTick(long millisUntilFinished) {
    			//В общем-то он мне не нужен
    		}
    		@Override
    		public void onFinish() {
    			try {
					_instance.process();//TODO вся бизнес-логика тут
				} catch (Exception e) {
					Toast.makeText(_instance, "ServiceDM: " + e.getMessage(), Toast.LENGTH_SHORT).show();
				}
    			runTimer();
    		}
    	}.start();
    }
	
}
