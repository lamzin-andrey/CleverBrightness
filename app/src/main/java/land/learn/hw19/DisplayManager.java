package land.learn.hw19;
/**
 * @permissions
 * <uses-permission android:name="android.permission.WRITE_SETTINGS"></uses-permission>
 * 
 * @class DisplayManager позволяет управлять яркостью экрана
*/
import android.app.Activity;

//control brightness variables
import android.content.ContentResolver;
import android.provider.Settings;
import android.provider.Settings.System;
import android.view.WindowManager.LayoutParams;
import android.view.WindowManager;
import android.view.Window;
import android.content.Context;


public class DisplayManager {
	static public String log = "";
	static public String _lastErr = "";
	
	private static ContentResolver cResolver;
	private static boolean cResolverIsInit = false;
	private static Window window;
	
	
	
	/**
	 * @description Установить значение яркости дисплея (Передвинуть ползунок настройки)
	 * @param int  brignthess from 0 to 255
	 * @param ContentResolver cr может быть получен как из Activity методом getContentResolver так и из сервиса
	 * @return boolean true - false если произошла какая-то ошибка
	*/
	public static boolean setSystemDisplayBrightness(int brightness, ContentResolver cr)
    {
		try {
			Settings.System.putInt(cr,
				Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
			//Set the system brightness using the brightness variable value
			System.putInt(cr, System.SCREEN_BRIGHTNESS, brightness);
			return true;
		} catch (Exception e) {
			_lastErr = "Cannot access system brightness <br>" + e.getMessage();
		}
		return false;	
	}
	
	/**
	 * @description Установить значение яркости активного окна
	 * @param int  brignthess
	 * @return boolean true - если прошло без ошибок
	*/
	public static boolean setWindowBrightness(int brightness, Window wnd)
    {
		try {
			//Get the current window attributes
			LayoutParams layoutpars = wnd.getAttributes();
			//Set the brightness of this window
			layoutpars.screenBrightness = brightness / (float)255;
			//Apply attribute changes to this window
			wnd.setAttributes(layoutpars);
			wnd.addFlags(WindowManager.LayoutParams.FLAGS_CHANGED);
			return true;
		} catch (Exception e) {
			_lastErr = "Cannot access system brightness <br>" + e.getMessage();
		}
		return false;	
	}
	
	/*
	 * 
	 * if (cResolverIsInit) {
				//Get the current window attributes
				LayoutParams layoutpars = window.getAttributes();
				//Set the brightness of this window
				layoutpars.screenBrightness = brightness / (float)255;
				//Apply attribute changes to this window
				window.setAttributes(layoutpars);
				window.addFlags(WindowManager.LayoutParams.FLAGS_CHANGED);
			}
	 * */
	 /**
	 * @description Получить текущее значение яркости дисплея
	 * @param Activity a - экземпляр "активности" приложения
	 * @return int from 0 to 255, -1 если получить не удалось.
	*/
    public static int getDisplayBrightness(ContentResolver cr)
    {
		try {
			// To handle the auto
			Settings.System.putInt(cr,
				Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
			//Get the current system brightness
			return System.getInt(cResolver, Settings.System.SCREEN_BRIGHTNESS);
		} catch (Exception e) {
				//Throw an error case it couldn't be retrieved
				//Log.e("Error", "Cannot access system brightness");
				//e.getMessage()();
				_lastErr = "Cannot access system brightness <br>" + e.getMessage();
		}
		return -1;
	}
	/**
	 * @description Получить текущее значение яркости дисплея
	 * @param Activity a - экземпляр "активности" приложения
	 * @return int from 0 to 255, -1 если получить не удалось.
	*/
    public static int getDisplayBrightness(Activity a)
    {
		initEnv(a);
		try {
			// To handle the auto
			Settings.System.putInt(cResolver,
				Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
			//Get the current system brightness
			return System.getInt(cResolver, Settings.System.SCREEN_BRIGHTNESS);
		} catch (Exception e) {
				//Throw an error case it couldn't be retrieved
				//Log.e("Error", "Cannot access system brightness");
				//e.getMessage()();
				_lastErr = "Cannot access system brightness <br>" + e.getMessage();
		}
		return -1;
	}
	/**
	 * @description Получить максимальное значение яркости дисплея
	 * @return int 255
	*/
	public static int getDisplayMaxBrightness()
    { 
		return 255;
	}
	/**
	 * @description Получить текущее значение яркости дисплея
	 * @param Activity a - экземпляр "активности" приложения
	 * @return int 30
	*/
	public static int getDisplayMinBrightness()
    { 
		return 30;
	}
	/**
	 * @description Установить значение яркости дисплея
	 * @param int  brignthess
	 * @param Activity a - экземпляр "активности" приложения
	 * @return boolean true - фактически всегда возвращает false если метод вызван например нажатием кнопки на активности
	*/
	public static boolean setDisplayBrightness(int brightness, Activity a)
    {
		//initEnv(a);
		try {
			/*Settings.System.putInt(cResolver,
				Settings.System.SCREEN_BRIGHTNESS_MODE, Settings.System.SCREEN_BRIGHTNESS_MODE_MANUAL);
			//Set the system brightness using the brightness variable value
			System.putInt(cResolver, System.SCREEN_BRIGHTNESS, brightness);
			if (cResolverIsInit) {
				//Get the current window attributes
				LayoutParams layoutpars = window.getAttributes();
				//Set the brightness of this window
				layoutpars.screenBrightness = brightness / (float)255;
				//Apply attribute changes to this window
				window.setAttributes(layoutpars);
				window.addFlags(WindowManager.LayoutParams.FLAGS_CHANGED);
			}
			return true;*/
			setSystemDisplayBrightness(brightness, a.getApplicationContext().getContentResolver());
			setWindowBrightness(brightness, a.getWindow());
		} catch (Exception e) {
			_lastErr = "Cannot access system brightness <br>" + e.getMessage();
		}
		return false;
	}
	
	public static void setContentResolver(ContentResolver cr)
	{
		if (!cResolverIsInit) {
			cResolver = cr;
		}
	}
	private static void initEnv(Activity a)
	{
		if (!cResolverIsInit && a != null) {
			cResolver = a.getApplicationContext().getContentResolver();
			window = a.getWindow();
			cResolverIsInit = true;
		}
	}
	
}
