package land.learn.hw19;
/**
 * @permissions
 * <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
 * @reciever
 * <application>
	 <receiver
		android:name=".ServiceDMAutorun"
		android:enabled="true"
		android:exported="false">
		<intent-filter>
			<action android:name="android.intent.action.BOOT_COMPLETED"/>
		</intent-filter>
	</receiver>
	</application>
 * 
 * @class ServiceDMAutorun Автовзапуск приложения
*/
import android.content.BroadcastReceiver;
import android.content.Intent;
import android.widget.Toast;
import android.content.Context;

public class ServiceDMAutorun extends BroadcastReceiver {
	
	@Override
	public void onReceive(Context ctx, Intent intent) {
		//ServiceDMAutorun - У вас должен быть такой класс сервиса или любой другой
		Intent it = new Intent(ctx, ServiceDM.class);
		ctx.startService(it);
		//Можно также попробовать прямо тут
		//Intent intent = new Intent(getBaseContext(), SimpleActivity.class);
		//getApplication().startActivity(intent);
		//если сработает, то сервис не нужен
		
	}	
}
