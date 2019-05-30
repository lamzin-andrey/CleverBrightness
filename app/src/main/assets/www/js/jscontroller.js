'use strict'
document.addEventListener('deviceready', init, false);
window.addEventListener('load', init, false);
window.addEventListener('orientationchange', function(){alert(101);}, false);
window.isInit = false;

function enableButtons() {
	//$('.random')[0].disabled = false;
	//$('#search')[0].disabled = false;
}

function init() {
	if (!window.PHP) {
		_setQtShim();
		return;
	}

	
	window.bNeedQuitOnMenuHidden = false;
	window.hTest = $('#hTest');
	
	window.hLoadScr = $('#hLoadScr');
	/** Главный экран приложения, он же О программе */
	window.hWorkScreen  = $('#help');
	/** bStopMonitor - кнопка остановки или запуска сервиса мониторинга */
	window.bStopMonitor = $('#bStopMonitor');
	/** hMonitorStatePreview - Сообщение "определяем состояние мониторинга" */
	window.hMonitorStatePreview = $('#hMonitorStatePreview');
	/** hMonitorState - Сообщение "Мониторинг включен или выключен" */
	window.hMonitorState = $('#hMonitorState');
	/** hMonitorStateValue- Часть сообщения "Мониторинг включен или выключен" */
	window.hMonitorStateValue = $('#hMonitorStateValue');
	window.hLocalEditor = $('#hLocalEditor');
	
    window.hLog = $('#hLog');
    window.bStopMonitor = $('#bStopMonitor');
    window.bSave = $('#bSave');
    window.bLoad = $('#bLoad');
    window.bMenu = $('#bMenu');
    window.iFilename = $('#iFilename');
	window.iFilecontent = $('#iFilecontent');
	window.hMenuItems = $('#hMenuItems');
	window.hControlScr = $('#hControlScr');
	window.bGotoControlScr = $('#bGotoControlScr');
	window.hViewLogScr = $('#hViewLogScr');
	window.bOutDebugNotices = $('#bOutDebugNotices');
	window.bWriteDevlog = $('#bWriteDevlog');
	window.hSettings = $('#hSettings');
	window.bLangRu = $('#bLangru');
	window.bLangEn = $('#bLangen');
	
	//menu items
	window.hMenuBack = $('#hBack');
	window.hMenuGoToControlScr = $('#hGoToControlScr');
	window.hMenuViewlog = $('#hViewlog');
	window.hMenuExit = $('#hExit');
	window.hMenuDevscreen = $('#hDevscreen');
	window.hMenuHelp = $('#hMenuHelp');
	window.hMenuSettings = $('#hMenuSettings');
	// / menu items

	


	//активный в самом начале элемент меню
	window.hActiveMenuItem = hMenuHelp;

    
    setTimeout(hideLoadScrn, 10*1000);//change me to 10*1000!
    try {
		var b = Droid.getDisplayBrightness();
		//hTest.text(b);
		var s = Droid.getLastErr();
		if (s) {
			//hTest[0].innerHTML += '<br>Java err: ' + s;
		}
		
		//set lang
		var lang = PHP.file_get_contents('selectedlang').trim();
		if (lang != 'ru' && lang != 'en') {
			lang = Droid.getSystemLocale();
		}
		if (lang != 'ru' && lang != 'en') {
			lang = 'en';
		}
		lang_setLocale(lang);
		if (lang == 'ru') {
			bLangRu.prop('checked', true);
		}
		if (lang == 'en') {
			bLangEn.prop('checked', true);
		}
		// /set lang

		_setBrightnessListeners();
		_getMonitoringState();
		_getDebugState();
		setInterval(_getMonitoringState, 2*1000);
		
		//set debug info
		$('#hUserAgent').text( navigator.userAgent );
		$('#hDevRes').text( screen.width + 'x' + screen.height );
		
	} catch (err) {
		//hTest[0].innerHTML += '<br>JS err: ' + err;
	}
	
    
	//Выход из приложения
	$('#bTestQuit').click(onClickQuitElement);
	$('#bQuitFromLogScr').click(onClickQuitElement);
	$('#bQuitFromEditorScr').click(onClickQuitElement);
	$('#bQuitFromControlScr').click(onClickQuitElement);
	$('#bQuitFromSettingsScr').click(onClickQuitElement);
	
}
/**
 * @description  Получить состояние элементов управления отладкой (экран разработчика)
*/
function _getDebugState() {
	var dbgToastOn = +PHP.file_get_contents('dbgToastOn');
	var dbgDevlogOn = +PHP.file_get_contents('dbgDevlogOn');
	if (!isNaN(dbgToastOn) && dbgToastOn == 1) {
		bOutDebugNotices.prop('checked', true);
	} else {
		bOutDebugNotices.prop('checked', false);
	}
	if (!isNaN(dbgDevlogOn) && dbgDevlogOn == 1) {
		bWriteDevlog.prop('checked', true);
	} else {
		bWriteDevlog.prop('checked', false);
	}
}
/**
 * @description  Показать меню
*/
function onClickMenu() {
	antMenuShow(bMenu, hMenuItems);
}
/**
 * @description Принyдительно останавливает или запускает сервис
*/
function onClickStopSrv(){ 
	Droid.setLastErr('');
	var b;
	if (_getMonitoringState()) {
		b = Droid.stopDMService();
		setTimeout( function() {
			PHP.file_put_contents("lastmodtime", PHP.time() - 120);
		}, 2*1000 );
		
	} else {
		b = Droid.startDMService();
		
	}
	
	if (Droid.getLastErr()) {
		//hTest[0].innerHTML += 'bool = "' + b + '", lastErr = ' + Droid.getLastErr();
	}
}
/**
 * @description Получает последнее время записи предыдущего значения, если оно отличается от текущего менее чем на минуту считает что мониторинг включен
 * @return Boolean true если серис запущен
*/
function _getMonitoringState() {
	var lastmodtime = parseInt(PHP.file_get_contents("lastmodtime"), 10);
	var bRes = false;
	if (!isNaN(lastmodtime)) {
		if (PHP.time() - lastmodtime < 60) {
			bRes = true;
		}
	}
	_setMonitoringStateView(bRes);
	return bRes;
}
/**
 * @description Устанавливает значение текста на кнопке Включить или Выключить монитор и на информативном тексте
 * @param {Boolean} bState
*/
function _setMonitoringStateView(bState) {
	var stateValue = l('Off');
	var sBtnText = l('Run service');
	var bRes = bState;
	if (bRes) {
		stateValue = l('On');
		sBtnText = l('Stop service');
	}
	hMonitorStatePreview.addClass('hide');
	hMonitorStateValue.text(stateValue);
	hMonitorState.removeClass('hide');
	bStopMonitor.attr('value', sBtnText);
}
/**
 * @description Устанавливает слушатели событий элементов управления
*/
function _setBrightnessListeners() {
    bMenu.click(onClickMenu);
    bLoad.click(onClickLoad);
    bSave.click(onClickSave);
	bStopMonitor.click(onClickStopSrv);
	bGotoControlScr.click(onClickBtnGotoCtrlScreen);
	bWriteDevlog.on('change', onChangeWriteLog);
	bOutDebugNotices.on('change', onChangeDebugNotices);
	bLangEn.on('change', onChangeLangEn);
	bLangRu.on('change', onChangeLangRu);
	_setMenuItemListeners();
}
/**
 * @description Смена состояния радиокнопки En
*/
function onChangeLangEn() {
	if (bLangEn.prop('checked') == true) {
		var s = bLangEn.val();
		lang_setLocale(s);
		PHP.file_put_contents('selectedlang', s);
	}
}
/**
 * @description Смена состояния радиокнопки Ru
*/
function onChangeLangRu() {
	if (bLangRu.prop('checked') == true) {
		var s = bLangRu.val();
		lang_setLocale(s);
		PHP.file_put_contents('selectedlang', s);
	}
}
/**
 * @description Смена состояния чекбокса Вывода отладочных нотайсов
*/
function onChangeDebugNotices() {
	//console.log('call onChangeDebugNotices');
	var v = '1';
	if (bOutDebugNotices.prop('checked') != true) {
		v = '0';
	}
	PHP.file_put_contents('dbgToastOn', v);
}
/**
 * @description Смена состояния чекбокса записи лога разработчика
*/
function onChangeWriteLog() {
	var v = '1';
	if (bWriteDevlog.prop('checked') != true) {
		v = '0';
	}
	PHP.file_put_contents('dbgDevlogOn', v);
}
/**
 * @description Устанавливает слушатели событий элементов меню
*/
function _setMenuItemListeners() {
	hMenuBack.click(onClickMenuClose);
	hMenuExit.click(onClickMenuExit);
	hMenuGoToControlScr.click(onClickGotoCtrlScreen);
	hMenuHelp.click(onClickMenuHelp);
	hMenuViewlog.click(onClickMenuViewlog);
	hMenuDevscreen.click(onClickMenuDevscreen);
	hMenuSettings.click(onClickMenuSettings);
}
/**
 * @description Клик на элементе меню Настройки
*/
function onClickMenuSettings() {
	antSwitchMenuItem(hMenuSettings);
	showScrn(hSettings);
	_menuHide();
}
/**
 * @description Клик на элементе меню Помощь
*/
function onClickMenuHelp() {
	showScrn(hWorkScreen);
	_menuHide();
	if (window.hActiveMenuItem) {
		window.hActiveMenuItem.removeClass('hide');
	}
	window.hActiveMenuItem = hMenuHelp;
	hMenuHelp.addClass('hide');
}
/**
 * @description Клик на элементе меню Экран разработчика
*/
function onClickMenuDevscreen() {
	antSwitchMenuItem(hMenuDevscreen);
	showScrn(hLocalEditor);
	_menuHide();
}
/**
 * @description Клик на элементе меню Журнал
*/
function onClickMenuViewlog() {
	try {
		_showLog();
		antSwitchMenuItem(hMenuViewlog);
		showScrn(hViewLogScr);
		_menuHide();
	} catch (e) {
		//hTest[0].innerHTML += '<br>JS err: ' + e;
	}
}
/**
 * @description Клик на элементе меню Управление
*/
function onClickGotoCtrlScreen() {
	_setControlScreenActive();
	_menuHide();
}
/**
 * @description Клик на кнопке Управление на экране Помощь (он же главный)
*/
function onClickBtnGotoCtrlScreen(){
	_setControlScreenActive();
}
/**
 * @description Делаем экран управления активным
*/
function _setControlScreenActive() {
	antSwitchMenuItem(hMenuGoToControlScr);
	showScrn(hControlScr);
}
/**
 * @description Клик на элементе меню Выход
*/
function onClickMenuExit() {
	_menuHide();
	window.bNeedQuitOnMenuHidden = true;
}
/**
 * @description Клик на элементе меню Закрыть
*/
function onClickMenuClose() {
	_menuHide();
}
/**
 * @description Удобно скрываем меню
*/
function _menuHide() {
	antMenuHide(bMenu, hMenuItems);
}
function onClickSave() {
    var s = iFilename.val();
    if (s.trim()) {
        PHP.file_put_contents(s, iFilecontent.val());
    } else {
        alert('You must enter filename!');
    }
}
function onClickLoad() {
    var s = iFilename.val();
    if (s.trim()) {
        if (PHP.file_exists(s)) {
            iFilecontent.val( PHP.file_get_contents(s) );
        } else {
            alert('File not found!');
        }
    }
}
function _showLog() {
	var file = 'humanlog';
	if (bLangEn.prop('checked') == true) {
		file = 'humanlogen';
	}
	if (!PHP.file_exists(file)) {
		hLog.html('<p>' + l('The application is still collecting data for future activities') + '</p>');
		return;
	}

    var s = PHP.file_get_contents(file), a = [], ab = [], i;
    if (s) {
        a = s.split('\n');
    } else {
        s = '';
    }
    for (i = a.length - 1; i > -1 ; i--) {
        ab.push('<p>' + a[i] + '</p>');
    }
    s = PHP.file_get_contents('prev');
    s = s ? s : '';
    ab.push('<p>' + 'Prev: ' + s + '</p>');
	hLog.html(ab.join(''));
	//hLog[0].scrollTo(0, 0);
	hLog.scrollTop(0);
}

/**
 * @description Вызывается из java кода с целью скрыть "красивый" экран
*/
function hideLoadScrn() {
	if (hLoadScr.hasClass('hide')) {
		return;
	}
	hLoadScr.addClass('hide');
	hWorkScreen.removeClass('hide');
	bMenu.removeClass('hide');
}
/**
 * @description Скрывает все экраны, показывает переданный аргумент
 * @param {JQueryHtmlElement} screen
*/
function showScrn(screen) {
	var ls = $('.main'), i;
	for (i = 0; i < ls.length; i++) {
		$(ls[i]).addClass('hide');
	}
	screen.removeClass('hide');
}
/**
 * @description Если браузер определен как firefox для desktop, подключает SimpleActivity как Qt PHPInterface как PHP
 * (в java приложении это делает само приложение)
*/
function _setQtShim() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.indexOf('firefox') != -1) {
		var head = document.getElementsByTagName('head')[0];
		
		var scr = document.createElement('script');
		scr.type = 'text/javascript';
		scr.src = 'js/tdrom/SimpleActivity.es6.js';
		head.appendChild(scr);
		
		scr = document.createElement('script');
		scr.type = 'text/javascript';
		scr.src = 'js/tdrom/PHPInterface.es6.js';
		head.appendChild(scr);

		scr = document.createElement('script');
		scr.type = 'text/javascript';
		scr.src = 'js/tdrom/DisplayManager.es6.js';
		head.appendChild(scr);

		setTimeout( function(){
			//console.log('Debug start');
			window.PHP = new PHPInterface(window);
			window.Qt = new SimpleActivity();
			init();
		}, 1*1000);
		
	}
}
function onClickQuitElement() {
	Droid.setLastErr('');
	Droid.quit();
	if (Droid.getLastErr()) {
		//$('#hTest').html('lastErr = ' + Droid.getLastErr());
	}
}
