//package land.learn.hw17;

//----TODO этот класс написать сначала на js и затестить
//TODO Пустые строки в логах за сутки - зачем?
//TODO В пустой файл list при добавлении второй даты Y добавляется 0 X\n0\nY - зачем?
//TODO добавить тест, кажется не применяется при варианте (первым найден 130 (именно потому что первым?) 
//(или дело в 0?) )
/*193577 100
193578 120

193761 120
193762 130


193763 0

 - при поминутных изменениях точно игнорируется */
//TODO добавить тест, после нескольких writeDetectedChanges не должно быть слепленных строк

/*public*/ class CleverBrightness {
	
	/*private ServiceDM _ctx;
	private PHPInterface PHP;
	private long _nCurrentDate;
	private long _nCurrentMinute;
	private int b;
	private String prevBrightness;
	private String s;
	private String[] result;//TODO search usage
	private int[] _qDay = new int[]{0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
	//@property boolean _isEmptySet Принимает значение true когда надо найти nSzBuf файлов с логами, а их нет или меньше чем надо.
	private boolean _isEmptySet = false;
	//@property int nSzBuf Определяет, сколько файлов с логами за сутки анализировать
	private final int nSzBuf = 3;

	//@property int[] _aExtrDirections Используется для хранения статистической информации, нужно ли изменить яркость и в какую сторону. @see parseResult()[2]
	private int[] _aExtrDirections = new int[nSzBuf];
	//@property int[] _aExtrNeedChanges Используется для хранения статистической информации, нужно ли изменить яркость и в какую сторону.@see parseResult()[0]
	private int[] _aExtrNeedChanges = new int[nSzBuf];
	//@property int[] _aExtrValues Используется для хранения статистической информации, на какую величину нужно изменить яркость. @see parseResult()[1]
	private int[] _aExtrValues = new int[nSzBuf];
	//@property int[] _aExtrDiffs Используется для хранения статистической информации, нужно ли изменить яркость и на какую именно величину. Чем это значение меньше, тем приоритетнее соотв. значение из ._aExtrValues. @see parseResult()[3]
	private int[] _aExtrDiffs = new int[nSzBuf];

	//@property int[] _aExtrChangetime Используется для хранения статистической информации, в какое время в журналах была изменить яркость @see parseResult()[4]
	private int[] _aExtrChangetime = new int[nSzBuf];

	//@property int _nExtrIterator Хранит текущий "размер" массива
	private int _nExtrIterator = 0;

	//@property int _nExtrDirection Используется для хранения результатов обработки статистической информации, для выбора, увеличивать или уменьшать данные после того как проанализированы все логи
	private int _nExtrDirection = 0;
	//@property int _nExtrNeedChanges Используется для хранения результатов обработки статистической информации, для выбора, изменять ли в конце концов яркость (без учёта голосов "за увеличение" и "за уменьшение")
	private int _nExtrNeedChanges = 0;
	//@property int _nExtrDirectionPlus Используется для хранения результатов обработки статистической информации, для учёта голосов "за увеличение"
	private int _nExtrDirectionPlus = 0;
	//@property int _nExtrDirectionMinus Используется для хранения результатов обработки статистической информации, для учёта голосов "за уменьшение"
	private int _nExtrDirectionMinus = 0;
	//@property int _nExtrDiffForPlus Используется для хранения результатов обработки статистической информации, для учёта близости голоса "за увеличение" к текушему моменту. Если голосов за увеличение больше, в итоге будет применено то значение яркости, которое ассоциировано с ближайшим к текущему моменту голосом
	private int _nExtrDiffForPlus = 1000000;
	//@property int _nExtrDiffForMinus Используется для хранения результатов обработки статистической информации, для учёта близости голоса "за уменьшение" к текушему моменту. Если голосов за уменьшение больше, в итоге будет применено то значение яркости, которое ассоциировано с ближайшим к текущему моменту голосом
	private int _nExtrDiffForMinus = 1000000;

	
	//@property long[] _aExtrAbsMin Используется для хранения результатов обработки статистической информации, для учёта существования голоса в текущие сутки @see parseResult[5]
	private long[] _aExtrAbsMin = new long[_nSzBuf];
	//@property long[] _aExtrAbsYear содержит две последние цифры года экстремума
	private long[] _aExtrAbsYear = new long[_nSzBuf];
	
	
	//@property int _nExtrChangetime Используется для хранения результатов обработки статистической информации, для записи в лог человекопонятного сообщения, на основании какой записи была изменена яркость. По сути время в минутах с начала года, в которое была установлена яркость.
	private int _nExtrChangetime = 0;
	private int _nExtrChangetimeForMinus = 0;
	private int _nChangetimeForPlus = 0;

	
	//@property long _nExtrAbsValue содержит значение яркости для _bAbsMinExists
	private long _nExtrAbsValue = 0;
	//@property long _bAbsMinExists содержит минимум (как _nExtrDiffForPlus/Minus) за текущую дату
	private long _nExtrAbsMin = 1000000;
	//@property boolean _bAbsMinExists принимает true когда существует экстремум за текущую дату
	private boolean _bAbsMinExists = false;
	

	//@property boolean _bNeedChangeBrightness Используется для хранения результатов обработки статистической информации, для выбора, изменять ли в конце концов яркость (с учётом голосов "за увеличение" и "за уменьшение")
	private boolean _bNeedChangeBrightness = false;
	//@property  Используется для хранения результатов обработки статистической информации, для выбора, изменять ли в конце концов яркость (с учётом голосов "за увеличение" и "за уменьшение")
	public static final String filePrefix = "";
	*/

	/**
	 * @description Замена секции private
	*/
	constructor(){
		//this._ctx = new ServiceDM();
		//this.PHP = new PHPInterface();
		//@property boolean _isEmptySet Принимает значение true когда надо найти nSzBuf файлов с логами, а их нет или меньше чем надо.
		this._isEmptySet = false;
		//@property int nSzBuf Определяет, сколько файлов с логами за сутки анализировать
		this._nSzBuf = 3;
		this._nCurrentDate = 0;
		this._nCurrentMinute = 0;
		this.b = 0;
		this.result = /*new String[]*/[];
		this.prevBrightness = "";
		this.s = "";
		this.logs = new StringBuffer();
		this._qDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		//@property int[] aExtrDirections Используется для хранения статистической информации, нужно ли изменить яркость и в какую сторону. @see parseResult()[2]
		this._aExtrDirections = [];
		//@property int[] aExtrNeedChanges Используется для хранения статистической информации, нужно ли изменить яркость и в какую сторону.@see parseResult()[0]
		this._aExtrNeedChanges = [];
		//@property int[] aExtrValues Используется для хранения статистической информации, нужно ли изменить яркость и в какую сторону. @see parseResult()[1]
		this._aExtrValues = [];
		//@property int[] _aExtrDiffs Используется для хранения статистической информации, нужно ли изменить яркость и на какую именно величину. Чем это значение меньше, тем приоритетнее соотв. значение из ._aExtrValues. @see parseResult()[3]
		this._aExtrDiffs = [];
		//@property int _nExtrIterator Хранит текущий "размер" массива
		this._nExtrIterator = 0;
		//@property int nExtrDirection Используется для хранения результатов обработки статистической информации, для выбора, увеличивать или уменьшать данные после того как проанализированы все логи
		this._nExtrDirection = 0;
		//@property int nExtrNeedChanges Используется для хранения результатов обработки статистической информации, для выбора, изменять ли в конце концов яркость (без учёта голосов "за увеличение" и "за уменьшение")
		this._nExtrNeedChanges = 0;
		//@property int nExtrDirectionPlus Используется для хранения результатов обработки статистической информации, для учёта голосов "за увеличение"
		this._nExtrDirectionPlus = 0;
		//@property int nExtrDirectionMinus Используется для хранения результатов обработки статистической информации, для учёта голосов "за уменьшение"
		this._nExtrDirectionMinus = 0;
		//@property int _nExtrDiffForPlus Используется для хранения результатов обработки статистической информации, для учёта близости голоса "за увеличение" к текушему моменту. Если голосов за увеличение больше, в итоге будет применено то значение яркости, которое ассоциировано с ближайшим к текущему моменту голосом
		this._nExtrDiffForPlus = 1000000;
		//@property int _nExtrDiffForMinus Используется для хранения результатов обработки статистической информации, для учёта близости голоса "за уменьшение" к текушему моменту. Если голосов за уменьшение больше, в итоге будет применено то значение яркости, которое ассоциировано с ближайшим к текущему моменту голосом
		this._nExtrDiffForMinus = 1000000;
		//@property boolean _bNeedChangeBrightness Используется для хранения результатов обработки статистической информации, для выбора, изменять ли в конце концов яркость (с учётом голосов "за увеличение" и "за уменьшение")
		this._bNeedChangeBrightness = false;
		//@property int[] _aExtrChangetime Используется для хранения статистической информации, в какое время в журналах была изменить яркость @see parseResult()[4]
		this._aExtrChangetime = [];
		//@property int _nExtrChangetime Используется для хранения результатов обработки статистической информации, для записи в лог человекопонятного сообщения, на основании какой записи была изменена яркость
		this._nExtrChangetime = 0;
		//@property int _nExtrChangetimeForMinus Используется для хранения результатов обработки статистической информации, для записи в лог человекопонятного сообщения, на основании какой записи была изменена яркость в меньшую сторону
		this._nExtrChangetimeForMinus = 0;
		//@property int _nChangetimeForPlus  Используется для хранения результатов обработки статистической информации, для записи в лог человекопонятного сообщения, на основании какой записи была изменена яркость в большую сторону
		this._nChangetimeForPlus = 0;
		
		//@property long[] _aExtrAbsMin Используется для хранения результатов обработки статистической информации, для учёта существования голоса в текущие сутки @see parseResult[5]
		this._aExtrAbsMin = [];
		//@property long[] _aExtrAbsYear содержит две последние цифры года экстремума
		this._aExtrAbsYear = [];
		

		
		//@property long _nExtrAbsValue содержит значение яркости для _bAbsMinExists
		this._nExtrAbsValue = 0;
		//@property long _bAbsMinExists содержит минимум (как _nExtrDiffForPlus/Minus) за текущую дату
		this._nExtrAbsMin = 1000000;
		//@property boolean _bAbsMinExists принимает true когда существует экстремум за текущую дату
		this._bAbsMinExists = false;
		
	}
	
	/**
	 * @description Раз в минуту сравнивает текущее значение яркости дисплея с предыдущим.
	 * Если она изменилась, записывает в журнал.
	 * Если не изменилась, пытается сделать по данным журнала изменений, не надо ли изменить яркость, и если надо, то меняет.
	*/
	/*public*/ /*void*/ process(/*ServiceDM*/ ctx)
	{
		this._ctx = ctx;
		if (this.PHP == null) {
			this.PHP = new PHPInterface(this._ctx);
		}
		this.b = DisplayManager.getDisplayBrightness(this._ctx.getContentResolver());
		//Если не существует, записать текущую и выйти
		if (!this.PHP.file_exists(CleverBrightness.filePrefix + "prev")) {
			this.PHP.file_put_contents(CleverBrightness.filePrefix + "prev", Integer.toString(this.b));
			return;
		}
		//Если изменилась
		this.prevBrightness = this.PHP.file_get_contents(CleverBrightness.filePrefix + "prev");
		if (this.prevBrightness != Integer.toString(this.b)) {
			console.log('I will writeDetectedChanges!');
			this.writeDetectedChange(this.prevBrightness, this.b);
		} else {
			this.setActualBrightness(true);
		}
		this.PHP.file_put_contents(CleverBrightness.filePrefix + "prev", this.b);
	}
	/**
	 * @description Устанавливает актуальную яркость дисплея
	*/
	/*private  void */setActualBrightness(dbg = false) {
		this._nCurrentDate = this.getCurrentDate();
		this._nCurrentMinute = this.getCurrentMinute();
		let
		/*int[]*/ logs = this._getLogfilesList(),//вернет максимум N = this._nSzBuf имени файла с изменениями
		result,
		//int
		sz = this.PHP.count(logs), i, currB;
		if (dbg) console.log('logs', logs);
		this._clearExtremum();//Сбрасывает переменные связанные с нахождением миинимума или максимума экстремум
		
		for (i = 0; i < sz; i++) {
			//Анализирует очередной файл логов и определяет, надо ли изменить яркость, возвращает конкретное значение
			result = this.parseResult(logs[i]);
			if (dbg) console.log('result:', result);
			//в зависимости от того, должны мы уменьшить или увеличить яркость находит минимум или максимум
			//используя поля aExtr*, nExtr*, bExtr*
			currB = this._getExtremum();
			if (dbg) console.log('gotCurrB:', currB);
		}
		//на основании вызовов parseResult и _getExtremum содержит true если "голосов за изменение" было больше чем "за стабильность"
		if (this._bNeedChangeBrightness && this.b != currB) {
			this.b = currB;
			if (dbg) console.log('will apply');
			this._applyBrightness();
		} else {
			if (dbg) console.log('no need changes');
		}
	}
	/**
	 * @description Непосредственно установка яркости
	*/
	/*private  int */_applyBrightness() {
		//Устанавливаем "Ползунок" настройки яркости
		//this._ctx issset? - его устанавливает process
		DisplayManager.setSystemDisplayBrightness(this.b, this._ctx.getContentResolver());

		
		
		let
		//Intent
		intent = new Intent(this._ctx.getBaseContext(), SimpleActivity.class);
		
		intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
		//Передадим нашему приложению, какую яркость следует установить
		intent.putExtra("needChangeBrigntness", this.b);
		this._writeHumanLog();
		//И запустим его
		this._ctx.getApplication().startActivity(intent);
	}
	/**
	 * @description Процесс анализа необходимости действия смены яркости и вычисление требуемого значения
	 * использует поля aExtr*, nExtr*, bExtr*.
	 * Вызывается сразу после записи в поля aExtr* очередного результата.
	 * в зависимости от того, должны мы уменьшить или увеличить яркость находит минимум или максимум
	 *  
	 * Если изменения нужны, выбирается  ближайший к текущей минуте из "плюсов" или "минусов".
	 * 
	 * Но приоритет имеет "Абсолютный минимум"
	 * Абсолютный минимум
	 *	"Голоса" "за" и "против" не учитываются в одном только случае.
	 *	Если есть экстремум T за текущие сутки и этот "голос" - не воздержавшийся и 
	 *	currentTime - T минимально считаем, что актуально это значение
	 * 
	 * @return int
	*/
	/*private  int */_getExtremum() {
		let
		//int
			n = this.PHP.count(this._aExtrDirections) - 1;
		//прежде всего необходимо понять необходимость изменений
		//Предположим, что голосовавших за перемены больше, и желающих увеличивать и уменьшать не поровну - мы изменим это значение если это не так
		this._bNeedChangeBrightness = true;

		//учитываем очередной "голос"

		//Изначально должно быть равно нулю. В итоге, если больше 0 увеличиваем
		this._nExtrDirection += (this._aExtrDirections[n] == 1 ? 1 : -1);
		
		if (this._aExtrDirections[n] == 1) {
			if (this._aExtrDiffs[n] < this._nExtrDiffForPlus) {
				this._nExtrDiffForPlus = this._aExtrDiffs[n];
				this._nExtrBrForPlus = this._aExtrValues[n];
				this._nChangetimeForPlus = this._aExtrChangetime[n];
			}
		}
		

		//изначально должно быть равно 1000000
		//Для Вариант 2 (из "повышающих" или "понижающих" берем ближайший для текущего момиента времени)
		if (this._aExtrDirections[n] == 0) {
			if (this._aExtrDiffs[n] < this._nExtrDiffForMinus) {
				this._nExtrDiffForMinus = this._aExtrDiffs[n];
				this._nExtrBrForMinus = this._aExtrValues[n];
				this._nExtrChangetimeForMinus = this._aExtrChangetime[n];
			}
		}

		
		//если обрабатываемый результат принадлежит сегодняшнему дню
		let
		//String
		sYear = this.PHP.date("Y");
		sYear = sYear.substring(2);
		if (this._aExtrNeedChanges[n] == 1 && this._aExtrAbsMin[n] == 0 && this._aExtrAbsYear[n] == sYear) {
			//Сохраняем абсолютный минмум без учета голоса
			if (this._aExtrDiffs[n] < this._nExtrAbsMin) {
				this._bAbsMinExists = true;
				this._nExtrAbsMin = this._aExtrDiffs[n];
				this._nExtrAbsValue = this._aExtrValues[n];
			}
		}
		

		//учли, надо ли вообще менять
		//в итоге, если больше 0 меняем
		//Изначально должно быть равно нулю
		
		this._nExtrNeedChanges += (this._aExtrNeedChanges[n] == 1 ? 1 : -1);

		if (this._nExtrNeedChanges > 0) {
			
			//учесть направление изменения
			//считаем голоса за увеличение и уменьшение
			//если с учетом нового голоса их поровну, значит изменения не нужны.

			//если очередной голос вообще за изменения
			if (this._aExtrNeedChanges[n] == 1) {
				//учитываем, если он за увеличение
				if (this._aExtrDirections[n] == 1) {
					this._nExtrDirectionPlus++;
				} else {
					//учитываем, если он за уменьшение
					this._nExtrDirectionMinus++;
				}
			}
			if (this._nExtrDirectionPlus == this._nExtrDirectionMinus) {
				
				//если с учетом нового голоса их поровну, значит изменения не нужны.
				this._bNeedChangeBrightness = false;
				return 0;
			}
		} else {
			//если с голосовавших за отсутствие изменений больше чем голосовавших за изменения, значит перемены не нужны	
			this._bNeedChangeBrightness = false;
			return 0;
		}
		//вернуть значение яркости

		
		//если сегодня уже меняли, голоса не надо учитывать. Да и менять скорее всего не надо
		if (this._bAbsMinExists) {
			//раз должны были увеличить, сравниваем с повышающим
			if (this._nExtrDirection > 0) {
				//наш сегодняшний момент ближе, чем найденный экстремум в другом файле
				if (this._nExtrAbsMin <= this._nExtrDiffForPlus) {
					this._bNeedChangeBrightness = false;
					return this._nExtrAbsValue;
				}
			} else {
				//раз должны были уменьшить, сравниваем с понижающим
				//наш сегодняшний момент ближе, чем найденный экстремум в другом файле
				if (this._nExtrAbsMin <= this._nExtrDiffForMinus) {
					this._bNeedChangeBrightness = false;
					return this._nExtrAbsValue;
				}
			}
		}
		

		//Итак, у нас определено направление в итоге
		if (this._nExtrDirection > 0) {
			this._nExtrChangetime = this._nChangetimeForPlus;
			//увеличиваем, надо вернуть ближайший к текущему моменту из "повышающих"
			return this._nExtrBrForPlus;
		} 
		//уменьшаем, надо вернуть ближайший к текущему моменту из "понижающих"
		
		this._nExtrChangetime = this._nExtrChangetimeForMinus;
		
		return this._nExtrBrForMinus;
	}
	/**
	 * @description Анализирует очередной файл логов и определяет, надо ли изменить яркость,
	 * 					возвращает в том числе и конкретное значение яркости
	 * достаточно для умной установки яркости сравнить разности C - ts и C - A.
  		Если разность отрицательна, её не рассматриваем.
		  Из положительных выбираем меньшую и устанавливаем соответствующее ей значение яркости.
		  (при этом учитываем существование предыдущей записи с врменем на минуту меньше, если такой нет считаем что менять яркость не надо)
	 * @param int nFileName равен _nCurrentDate в момент создания файла. Друтими словами каждый такой файл называется количеством минут, прошедших с начала года до начала тех суток, в которые создан файл
X	 * @return int[] массив целых чисел [
	 * 	0 => need (as 0 or 1),
	 *  1 => brignthess (from 0 to 255),
	 *  2 => (0 or 1) направление, уменьшаем (0) или увеличиваем (1),
	 *  3 => nearest (разность текущего времени с временем создания записи в логе, считаются минуты с начала суток)
	 *  4 => changeTime время в минутах с начала года, в которое была установлена яркость
	 *  5 => разность _nCurrentDate и nFileName
	 *  6 => две последних цифры года
	 * ]
	*/
	/*private  int[] */parseResult(/*int*/ nFileName, dbg = false) {
		let
		//String[]
			a, ab,
		//int 
		i, sz, 
		/** @var _nExtrCurrentDiff удаленность имени этого лога (временная метка в минутах) от текущего момента
		 *  Найденное значение имеет в итоге тем больший приортитет,
		 * чем ближе время сохранения записи к текущему моменту
		*/
		_nExtrCurrentDiff,
		/** @var nSavedBr в цикле  сохраненное значение яркости текущей записи  */
		nSavedBr = -1, 
		/** @var nSavedBrTime в цикле  сохраненное время текущей записи  */
		nSavedBrTime = -1,
		/** @var nSavedPrevBr в цикле  сохраненное значение яркости предыдущей записи  */
		nSavedPrevBr = -1, 
		/** @var nSavedPrevBrTime в цикле nSavedBr сохраненное время предыдущей записи  */
		nSavedPrevBrTime = -1,
		min = 1000000, nDiff,

		//boolean
		isExtrFound = false,

		nFoundValue = -1,
		//int[]
		
		aNResult = /* new []{0, 0, 0, 1000000, 0, 1000000, 0} */ [0, 0, 0, 10000000, 0, 1000000, 0];
		let
		//String
		sYear = this.PHP.date("Y");
		sYear =  sYear.substring(2);
		

		a = this.PHP.file_get_contents(Integer.toString(nFileName)).split("\n");
		sz = this.PHP.count(a);

		//Запоминаем удаленность имени этого лога (временная метка в минутах) от текущего момента

		//Раньше использовалось имя файла
		_nExtrCurrentDiff = Math.abs(this._nCurrentDate - nFileName);

		for (i = 0; i < sz; i++) {
			ab = a[i].split(" ");
			nSavedPrevBrTime = nSavedBrTime;
			nSavedPrevBr = nSavedBr;
			nSavedBrTime = this.PHP.intval(ab[0]);
			nSavedBr = this.PHP.intval(ab[1]);
			
			if (this.PHP.count(ab) == 3) {
				sYear = this.PHP.strval(ab[2]);
			}
			

			nDiff = this._nCurrentMinute - nSavedBrTime;
			//Работаем только с прошедшим временем
			if (nDiff > -1) {
				//Работаем с записью, время которой минимально удалено от текущего
				if (nDiff < min) {
					min = nDiff;
					//и при том это экстремум - то есть:
					// существует запись со временем равным nSavedBrTime - 1 
					// и её ассоциированное значение не равно ассоциированому с найденной записью
					
					if (nSavedBrTime - 1 == nSavedPrevBrTime && nSavedBr != nSavedPrevBr) {

						if (dbg) {
							console.log('nSavedBrTime', nSavedBrTime);
							console.log('nSavedPrevBrTime', nSavedPrevBrTime);
							console.log('nSavedBr', nSavedBr);
							console.log('nSavedPrevBr', nSavedPrevBr);
							/*console.log('', );
							console.log('', );
							console.log('', );/**/
						}

						nFoundValue = nSavedBr;
						aNResult[0] = 1;//надо менять яркость!
						aNResult[1] = nFoundValue;//на вот это значение
						aNResult[2] = (nSavedBr > nSavedPrevBr ? 1 : 0); //1 - это операция увеличения яркости, 0 - уменьшения
						aNResult[3] = Math.abs(this._nCurrentMinute - nSavedBrTime);
						aNResult[4] = nFileName + nSavedBrTime;
						aNResult[5] = _nExtrCurrentDiff;
						aNResult[6] = sYear;
						isExtrFound = true;
					}
				}
			}
		}
		if (isExtrFound) {
			this._saveExtremum(aNResult);
		} else {
			//Надо сбросить минимум
			aNResult[0] = 0;
			aNResult[1] = 0;
			aNResult[2] = 0;
			aNResult[3] = 1000000;
			aNResult[4] = 0;
			aNResult[5] = 1000000;
			aNResult[6] = 0;
		}
		return aNResult;
	}
	/**
	 * @description   Сохраняет в полях экземпляра данного класса данные о найденом экстремуме
	 * @param int[] aExtremumInfo @see return parseResult
	*/
	/*private  void */_saveExtremum(/*int[]*/ aExtremumInfo) {
		let
		//int
			sz = this._nExtrIterator;
		this._aExtrNeedChanges[sz] = aExtremumInfo[0];
		this._aExtrValues[sz] = aExtremumInfo[1];
		this._aExtrDirections[sz] = aExtremumInfo[2];
		this._aExtrDiffs[sz] = aExtremumInfo[3];
		this._aExtrChangetime[sz] = aExtremumInfo[4];
		this._aExtrAbsMin[sz] = aExtremumInfo[5];
		this._aExtrAbsYear[sz] = aExtremumInfo[6];
		this._nExtrIterator++;
	}
	/**
	 * @description Сбрасывает переменные связанные с нахождением миинимума или максимума экстремум
	*/
	/*private  void */_clearExtremum() {
		this._aExtrNeedChanges = /*new int[this._nSzBuf]*/ [];
		this._aExtrValues= /*new int[this._nSzBuf]*/ [];
		this._aExtrDirections = /*new int[this._nSzBuf]*/ [];
		this._aExtrDiffs = /*new int[this._nSzBuf]*/ [];
		this._aExtrChangetime  = /*new int[this._nSzBuf]*/ [];
		this._nExtrDirection = 0;
		this._nExtrDiffForMinus = 1000000;
		this._nExtrDiffForPlus = 1000000;
		this._nExtrNeedChanges = 0;
		this._nExtrDirectionPlus = 0;
		this._nExtrDirectionMinus = 0;
		this._nExtrChangetime = 0;
		this._bNeedChangeBrightness = false;
		this._nExtrIterator = 0;
		this._aExtrAbsMin  = /*new long[this._nSzBuf]*/ [];
		this._aExtrAbsYear = /*new long[this._nSzBuf]*/ [];
		this._nExtrAbsValue = 0;
		this._nExtrAbsMin = 1000000;
		this._bAbsMinExists = false;
		
	}
	/**
	 * @description Получить список имен файлов с журналами изменений, ближайших к текущей дате. 
	 * Всего выбираем CleverBrightness._nSzBuf файлов с логами, 
	 * для более точного определения необходимости сменить яркость
	 * Например, 
		01 04 2019 в 18 00 я убавил яркость, потому что уже стемнело и глазам стало слишком ярко.
		Потом я уехал на месяц, а смартфон выключил и забыл.
		01 05 2019, в 19 00 я убавил яркость, потому что уже стемнело и глазам стало слишком ярко.
		02 05 2019 я проснулся ночью в 2 часа, включил свет и прибавил яркость телефона, потому что было слишком слабо.
		02 05 2019 в 19 00 алгоритм пойдёт искать ближайший файл, найдет файл за 02 05 (он создался в 2 часа ночи)
		И не убавит яркость дисплея, так как ближайшая  к нему точка в минутах с начала суток - 02 00, а в это время яркость была прибавлена.
		Что делать?
		Можно например выбрать три записи вместо одной. Или любое другое нечетное количество.
		Тогда, по анализу файла за 01 05 будет "голос" - надо убавить
		По анализу файла за 01 04 будет "голос" - надо убавить
		Два против одного - убавляем.
	   @return int[]
	*/
	/*private  int[] */_getLogfilesList() {
		let
		//String
		fileName = CleverBrightness.filePrefix + "list",
		//int
		n, i, j = 0,
		//int[]
		aR = /*new int[this._nSzBuf]*/ [];

		this.result = /*new String[0];*/ [];
		if (this.PHP.file_exists(fileName)) {
			this.result = this.PHP.file_get_contents(fileName).split("\n");
		}
		this._isEmptySet = false;
		n = this._getNearestLogFile(aR);//выбирает ближайшие к текущей дате файлы с логами.
		//_isEmptySet принимает true когда в файлов с логами меньше, чем nSzBuf
		if (this._isEmptySet) {
			return aR;
		}
		aR[j] = n;
		j++;
		for (i = 1; i < this._nSzBuf; i++) {
			n = this._getNearestLogFile(aR);
			if (this._isEmptySet) {
				return aR;
			}
			aR[j] = n;
			j++;
		}
		return aR;
	}
	/**
	 * @description Получить список имен файлов с журналами изменений, ближайших к текущей дате. На языке SQL это выглядело бы примерно вот так:
	   *		SELECT * FROM t WHERE ABS(spectime - N) = (SELECT MIN( ABS(spectime - N) ) FROM t);
				   где N время в минутах, прошедшее с начала года. Оно вычисляется для дня без учета часов с начала текущих суток.
				   
	 * Надо найти файл с изменениями независимо от года, такой, что дата создания файла отстоит от текущей 
	 * минимально.
  	 * Этого можно добиться, если именовать файлы с изменениями количеством минут, прошедших с начала года.
	   @param int[] aExcludeNames имена файлов, которые надо исключить при выборке
	   (при пустом массиве вернет ближайший файл к текущей дате, если вызвать повторно и передать это имя 
		вернет слeдующий ближайший и т. п.)
	   @return String
	*/
	/*private  int */_getNearestLogFile(/*int[]*/ aExcludeNames) {
		//this.result уже содержит журнал с именами файлов на момент вызова
		let
			//int
			i, n, 
			min = 1000000,
			nFoundValue = -1,
			sz = this.PHP.count(this.result);
		for (i = 0; i < sz; i++) {
			n = this.PHP.intval(this.result[i]);
			//Если в массиве уже содержится такое имя, его просто не рассматриваем
			if (n == 0 || this.PHP.in_array(n, aExcludeNames)) {
				continue;
			}
			if (Math.abs(this._nCurrentDate - n) < min && this.PHP.file_exists(Integer.toString(n))) {
				min = Math.abs(this._nCurrentDate - n);
				nFoundValue = n;
			}
		}
		if (nFoundValue == -1) {
			this._isEmptySet = true;
		}
		return nFoundValue;
	}
	/**
	 * @description Записывает факт того, что яркость дисплея изменилась. Факт записывается так:
	 * В файл, с именем равным количеству минут, прошедших с начала года до полуночи текущих суток 
	 * 	добавляется две записи
	 *   первая - предыдущая яркость (текущее время - 1 минута)
	 *   вторая - текущая яркость
	 *  Формат записи:
	 *  количество_минут_прошедших_с_начала_года_до_текущей_минуты[ПРОБЕЛ]яркость_как_число_от_0_до_255
	 * 
	 * В файл list добавляется имя файла, в который записаны данные
	 * @param int prevBrightness
	 * @param int brigntness
	*/
	/*private  void */writeDetectedChange(/*int*/prevBrightness, /*int*/ brightness)
	{
		let 
		/*int*/ i, nPrevMinute, k,
		/* String */ fileName,
		/*StringBuffer*/ sb,
		/* boolean */ bIsFoundCurrentMinute = false, bIsFoundPrevMinute = false, bIsFoundCurrentDateInList = false,
		/*String[] */ a;

		
		let
		//String
		sYear = this.PHP.date("Y");
		sYear = sYear.substring(2);
		

		this._nCurrentDate = this.getCurrentDate(); //количество_минут  прошедших с начала года до полуночи текущих суток
		this._nCurrentMinute = this.getCurrentMinute();//количество_минут_прошедших_с_начала_года_до_текущей_минуты
		nPrevMinute = this._nCurrentMinute - 1;
		fileName = Integer.toString(this._nCurrentDate);
		this.result = /* new String[0] */ [];
		if (this.PHP.file_exists(fileName)) {
			this.result = this.PHP.file_get_contents(fileName).split("\n");
		}
		k = this.PHP.count(this.result);
		sb = new StringBuffer();
		for (i = 0; i < k; i++) {
			a = this.result[i].split(" ");
			if (this.PHP.intval(a[0]) == this._nCurrentMinute ) {
				this.result[i] = Integer.toString(this._nCurrentMinute) + " " + Integer.toString(brightness) + " " + sYear;
				bIsFoundCurrentMinute = true;
			}
			if (this.PHP.intval(a[0]) == nPrevMinute ) {
				this.result[i] = Integer.toString(nPrevMinute) + " " + Integer.toString(prevBrightness) + " " + sYear;
				bIsFoundPrevMinute = true;
			}
			sb.append(this.result[i] + "\n");
		}
		//не найдены такие минуты, добавим
		if (!bIsFoundPrevMinute) {
			sb.append( Integer.toString(nPrevMinute) + " " + Integer.toString(prevBrightness)  + " " + sYear + "\n");
		}
		if (!bIsFoundCurrentMinute) {
			sb.append( Integer.toString(this._nCurrentMinute) + " " + Integer.toString(brightness) + " " + sYear + "\n");
		}
		this.PHP.file_put_contents(fileName, sb.toString());

		//И в журнал запишем
		fileName = CleverBrightness.filePrefix + "list";
		this.result = /* new String[]; */ [];
		if (this.PHP.file_exists(fileName)) {
			this.result = this.PHP.file_get_contents(fileName).split("\n");
		}
		k = this.PHP.count(this.result);
		sb = new StringBuffer();
		let
		//long
		nResultFileName;
		for (i = 0; i < k; i++) {
			nResultFileName = this.PHP.intval(this.result[i]);
			if (nResultFileName == this._nCurrentDate ) {
				bIsFoundCurrentDateInList = true;
				break;
			}
			if (nResultFileName > 0) {
				sb.append(nResultFileName);
				sb.append("\n");
			}
		}
		//не найдены такие минуты, добавим
		if (!bIsFoundCurrentDateInList) {
			sb.append(this._nCurrentDate);
			sb.append("\n");
			this.PHP.file_put_contents(fileName, sb.toString());
		}
	}
	/**
	 * @description  количество_минут_прошедших_с_начала_суток_до_текущей_минуты
	*/
	/*private  long */getCurrentMinute()
	{
		let
		/* long */ result = 0;
		
		result += this.PHP.intval(this.PHP.date("H"))  * 60;
		result += this.PHP.intval(this.PHP.date("i"));
		return result;
	}
	/**
	 * @description  количество_минут_прошедших_с_начала_года_до_текущей_минуты
	*/
	/*private  long */getCurrentMinuteFromYear()
	{
		let
		/* long */ result = this.getCurrentDate();
		
		result += this.PHP.intval(this.PHP.date("H"))  * 60;
		result += this.PHP.intval(this.PHP.date("i"));
		return result;
	}
	/**
	 * @description количество_минут  прошедших с начала года до полуночи текущих суток (имеется ввиду до начала текущих суток)
	 * @return int
	*/
	/*private  long */getCurrentDate()
	{
		let
		/* int */ nMonth, result = 0, i, nDayOfMonth;
		nMonth = this.PHP.intval(this.PHP.date("m") );
		//Тут доходим до текущего месяца
		for (i = 1; i < nMonth; i++) {
			result += this.qDay(i) * 24 * 60;
		}
		nDayOfMonth = this.PHP.intval(this.PHP.date("d"));
		result += (nDayOfMonth - 1)  * 24 * 60;
		return result;
	}
	/**
	 * @description Вернет количество дней в месяце с учётом високосного года
	 * @param  int  nMonth номер месяца, 1 - январь, 12 - декабрь
	 * @return int
	*/
	/*private  int */qDay(/*int */ nMonth)
	{
		if (this._isLeapYear( this.PHP.date('Y') )) {
			this._qDay[2] = 29;
		} else {
			this._qDay[2] = 28;
		}
		return this._qDay[nMonth];
	}
	/**
	 * @description високосный ли год
	 * @param int year
	 * @return boolean
	**/
	/*private  boolean */_isLeapYear(/*int*/ year) {
		year = this.PHP.intval(year);
		let
		//int
		y = year;
		if (y % 4 == 0) {
			if (y % 100 == 0){
				if (y % 400 == 0) return true;
					return false;
				}			
			return true;
		}
		return false;
	}
	/**
	 * @description Сохранить человекопонятную запись, почему была изменена яркость
	**/
	/*private  void */_writeHumanLog() {
		let
		//long
		storedDay, storedMonth, storedMin, storedH, 
		/** @var newYearTimestamp unixtime начала текущего года */
		newYearTimestamp = this.PHP.time() - this.getCurrentMinuteFromYear() * 60 - this.PHP.intval(this.PHP.date("s"));
		
		//тут записывать в журнал вида "13 мая в 12 11 установили яркость 100 потому что 12 мая в 12 11 установили яркость 100"
		//this._nExtrChangetime - время в минутах с начала года, в которое была установлена яркость
		storedDay = this.PHP.date("d", newYearTimestamp + this._nExtrChangetime * 60);
		storedMonth = this.PHP.date("m", newYearTimestamp + this._nExtrChangetime * 60);
		storedMin = this.PHP.date("i", newYearTimestamp + this._nExtrChangetime * 60);
		storedH = this.PHP.date("H", newYearTimestamp + this._nExtrChangetime * 60);
		//storedDay, storedMonth, storedMin, storedH
		this.PHP.file_put_contents(CleverBrightness.filePrefix + "humanlog", this.PHP.date("d m в H:i установлена яркость " + Integer.toString(this.b) + " потому что вы или другое приложение сделали это ранее " + storedDay + " " + storedMonth + " в " + storedH + ":" + storedMin + "\n"), PHPInterface.FILE_APPEND);

	}
}
//TODO comment me
CleverBrightness.filePrefix = "";
