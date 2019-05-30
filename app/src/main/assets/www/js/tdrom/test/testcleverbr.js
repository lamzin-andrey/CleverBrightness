$(testCleverBrightness);

function testCleverBrightness() {

    CleverBrightness.filePrefix = 'autotest';
    window.localStorage.removeItem(CleverBrightness.filePrefix + 'list');
    

    var cb = new CleverBrightness();
    cb.PHP = new PHPInterface(window);
    var nCm = cb.getCurrentMinute();
    var nCd = cb.getCurrentDate();
    window.localStorage.removeItem(nCd);
    var prevB = 100;
    var b = 200;
    var PHP = new PHPInterface(window);
    cb.writeDetectedChange(prevB, b);
    //После запуска writeDetectedChange должен существовать файл list 
    if (!PHP.file_exists(CleverBrightness.filePrefix + 'list')) {
        console.log(' Error writeDetectedChange - expect file "list" exists but it NOT exusts!');
    }
    //в нем должна существовать одна запись getCurrentDate
    var a = localStorage.getItem(CleverBrightness.filePrefix + 'list').split('\n'), i, nExists = 0;
    for (i = 0; i < a.length; i++) {
        if (parseInt(a[i].trim()) == nCd) {
            nExists++;
        }
    }
    if (nExists != 1) {
        console.log(' Error writeDetectedChange - expect one line with value "' + nCd + '" exists but found ' + nExists + 'values!');
    }

    //Должен существовать файл getCurrentDate
    if (!PHP.file_exists(nCd)) {
        console.log(' Error writeDetectedChange - expect file "' + nCd + '" exists but it NOT exists!');
    }

    //В нем должны существовать ровно одна запись nCm  и ровно одна запись (nCm - 1)
    a = localStorage.getItem(nCd).split('\n');
    nExists = 0;
    var ab,
        nFoundBr = -1,
        nFoundPrevBr = -1,
        nCurrentTimePosition = 10000,
        nPrevTimePosition = 200000,
        nPrevExists = 0;
    for (i = 0; i < a.length; i++) {
        ab = a[i].split(' ');
        if (parseInt(ab[0].trim()) == nCm) {
            nFoundBr = parseInt(ab[1]);
            nCurrentTimePosition = i;
            nExists++;
        }
        if (parseInt(ab[0].trim()) == (nCm - 1))  {
            nFoundPrevBr = parseInt(ab[1]);
            nPrevTimePosition = i;
            nPrevExists++;
        }
    }
    if (nPrevTimePosition >= nCurrentTimePosition) {
        console.log(' Error writeDetectedChange - expect number line with currentTime more then previous time position!');
    }
    if (nExists != 1) {
        console.log(' Error writeDetectedChange - expect one line with value "' + nCm + '" exists but found ' + nExists + ' values!');
    }
    if (nPrevExists != 1) {
        console.log(' Error writeDetectedChange - expect one line with value "' + (nCm - 1) + '" exists but found ' + nPrevExists + ' values!');
    }

    //значения яркости должны быть соответсвующие
    if (nFoundBr != b) {
        console.log(' Error writeDetectedChange - expect brightness value "' + b + '"  but found ' + nFoundBr + '!');
    }

    if (nFoundPrevBr != prevB) {
        console.log(' Error writeDetectedChange - expect previous brightness value "' + prevB + '"  but found ' + nFoundPrevBr + '!');
    }

    test_getNearestLogFile();
    test_getLogfilesList();
    testParseResult();
    test_getExtremum();
    test_setActualBrightness();

}

function  test_setActualBrightness() {
    var cb = new CleverBrightness(window);
    cb.PHP = new PHPInterface(cb);

//localStorage.setItem('192960', "193577 110\n193578 120\n");

    localStorage.setItem(CleverBrightness.filePrefix + 'prev', `110`);
    localStorage.setItem(CleverBrightness.filePrefix + 'list', `192960\n`);
    localStorage.setItem('192960', `193577 10\n193578 100\n`);
    cb._nCurrentDate = 192960;//cb.getCurrentDate();
    cb._nCurrentMinute = 193735; //cb.getCurrentMinute();
    cb._ctx = new Context();
    cb.setActualBrightness();
}
function test_getExtremum() {
    var cb = new CleverBrightness();
    cb.PHP = new PHPInterface(window);
    //"голос воздержался" - это когда считает что изменения не нужны

    //Вариант три голоса, голос за+, голос за-, голос воздержался.
    //Должно быть _bNeedChangeBrightness == false
    cb._saveExtremum([1, 100, 1, 1]);
    var x = cb._getExtremum();
    cb._saveExtremum([1, 50, 0, 0]);
    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    cb._clearExtremum();

    //Вариант три голоса, голос за +2 c diff 4, голос за -, голос за +6 с diff 2. 
    //Должно быть _bNeedChangeBrightness == true return 6
    cb._saveExtremum([1, 2, 1, 4]);
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 0, 0]);
    x = cb._getExtremum();
    cb._saveExtremum([1, 6, 1, 2]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 6) {
        console.log(' Error getExtremum - expect x "6"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант три голоса, голос за +2, голос за -1 (diff 5), голос за -6 (diff 0). 
    //Должно быть _bNeedChangeBrightness == true return -6 (всюду, где написано return -N имеется ввиду, что a[2] == 0)
    cb._saveExtremum([1, 2, 1, 0]);
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 0, 5]);
    x = cb._getExtremum();
    cb._saveExtremum([1, 6, 0, 0]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 6) {
        console.log(' Error getExtremum - expect x "6"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант три голоса, голос за +2, голос за -1 (diff 0), голос за -6 (diff 5). 
    //Должно быть _bNeedChangeBrightness == true return -1 (всюду, где написано return -N имеется ввиду, что a[2] == 0)
    //Тут также тестируется humanlog
    window.localStorage.setItem(CleverBrightness.filePrefix + 'humanlog', '');
    cb._saveExtremum([1, 2, 1, 0, 100]);
    
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 0, 0, 60]);
    
    x = cb._getExtremum();
    cb._saveExtremum([1, 6, 0, 5, 200]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 1) {
        console.log(' Error getExtremum - expect x "1"  but found "' + x + '"!');
    }
    cb.b = x;
    cb._nCurrentMinute = cb.getCurrentMinute();
    //cb._nCurrentDate = cb.getCurrentDate();
    cb._writeHumanLog(true);
    var substr = 'потому что вы или другое приложение сделали это ранее 01 01 в 01:00',
    humanlog = window.localStorage.getItem(CleverBrightness.filePrefix + 'humanlog');
    if ( String(humanlog).indexOf(substr) == -1 ) {
        console.log(' Error getExtremum - expect substr "' + substr + '"  but found:\n\n "' + humanlog);
    }
    
    //console.log(  );
    cb._clearExtremum();

    //Вариант три голоса, голос за +2, голос воздержался, голос воздержался. 
    //Должно быть _bNeedChangeBrightness == false

    cb._saveExtremum([1, 2, 1, 0]);
    
    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);
    
    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    cb._clearExtremum();


    //Вариант три голоса, голос воздержался, голос воздержался, голос воздержался. 
    //Должно быть _bNeedChangeBrightness == false
    cb._saveExtremum([0, 0, 0, 0]);

    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);

    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);

    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    cb._clearExtremum();

    //Вариант два голоса, голос за +2, голос за -1 (и он ближе к текущей дате)
    //Должно быть _bNeedChangeBrightness == false
    cb._saveExtremum([1, 2, 1, 5]);
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 0, 0]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    cb._clearExtremum();

    //Вариант два голоса, голос за +2, голос за +1 (и он ближе к текущей дате)
    //Должно быть _bNeedChangeBrightness == true return +1 (текущую дату учитываем)
    cb._saveExtremum([1, 2, 1, 5]);
    
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 1, 0]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 1) {
        console.log(' Error getExtremum - expect x "1"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант два голоса, голос за -2, голос за -1 (и он ближе к текущей дате)
    //Должно быть _bNeedChangeBrightness == true return -1  (текущую дату учитываем)
    cb._saveExtremum([1, 2, 0, 5]);
    
    x = cb._getExtremum();
    cb._saveExtremum([1, 1, 0, 1]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 1) {
        console.log(' Error getExtremum - expect x "1"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант два голоса, голос за -2, голос воздержался (и он ближе к текущей дате)
    //Должно быть _bNeedChangeBrightness == false  (текущую дату не учитываем)
    //Потому что нет решения - один за перемены, второй против перемен - ничего не делаем. Узкое ли это место?
    cb._saveExtremum([1, 2, 0, 5]);
    
    x = cb._getExtremum();
    cb._saveExtremum([0, 0, 0, 0]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 0) {
        console.log(' Error getExtremum - expect x "0"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант один голос за -2
    //Должно быть _bNeedChangeBrightness == true return -2
    cb._saveExtremum([1, 2, 0, 5]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 2) {
        console.log(' Error getExtremum - expect x "2"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант один голос за +2
    //Должно быть _bNeedChangeBrightness == true return 2
    cb._saveExtremum([1, 2, 1, 5]);
    
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != true) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "true"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    if (x != 2) {
        console.log(' Error getExtremum - expect x "2"  but found "' + x + '"!');
    }
    cb._clearExtremum();

    //Вариант один голос воздержался
    //Должно быть _bNeedChangeBrightness == false
    cb._saveExtremum([0, 0, 0, 0]);
    x = cb._getExtremum();
    if (cb._bNeedChangeBrightness != false) {
        console.log(' Error getExtremum - expect _bNeedChangeBrightness "false"  but found "' + cb._bNeedChangeBrightness + '"!');
    }
    cb._clearExtremum();
}
//TODO вариант с двумя записями проверить, он очень реальный
function testParseResult() {
    var cb = new CleverBrightness(window);
    cb.PHP = new PHPInterface(cb);
    
    //Пусть в файле есть три записи 10+1 20+1 29+1 30+1
    //в этом случае при любых n a[0] должно быть равно 0 (нет экстремумов)
    var data =
`10 1
20 1
29 1
30 1`;
    localStorage.setItem('10', data);
    var i, a;
    for (i = 0; i < 32; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] != 0) {
            console.log(' Error parseResult - expect need changes value "0"  but found ' + a[0] + '!');
        }
    }

    //Пусть в файле есть записи 10+1 20+1 29+2 30+1 35+1
    //в этом случае только при n > 30  a[0] должно быть равно 1 и быть равно 0 во всех остальных случаях
    data =
`10 1
20 1
29 2
30 1
35 1`;
    cb.b = 100;
    localStorage.setItem('10', data);
    var nFound = 0;
    for (i = 0; i < 42; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] == 1) {
            //Установили первое найденное
            cb.b = a[1];
            nFound++;
            //заодно удостоверимся, что это тот самый элемент
            if (i < 30) {
                console.log(' Error parseResult - expect need changes value on minute more then "30"  but found ' + i + '!');
            }
            //заодно проверим другие два элемента
            if (a[1] != 1) {
                console.log(' Error parseResult - expect need changes value to "1"  but found ' + a[1] + '!');
            }
            if (a[2] != 0) {
                console.log(' Error parseResult - expect need changes value to less ("0")  but found ' + a[2] + '!');
            }
        }
    }
    if (nFound != 12) {
        console.log(' Error parseResult - expect need changes value "1"  but found ' + nFound + '!');
    }


    //Пусть в файле есть записи 10+1 20+1 29+1 30+2 35+1
    //в этом случае только при n > 30  a[0] должно быть равно 1 и быть равно 0 во всех остальных случаях
    //Но a[2] должен быть 1
    data =
`10 1
20 1
29 1
30 2
35 1`;
    localStorage.setItem('10', data);
    nFound = 0;
    for (i = 0; i < 42; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] == 1) {
            //Установили первое найденное
            cb.b = a[1];
            nFound++;
            //заодно удостоверимся, что это тот самый элемент
            if (i < 30) {
                console.log(' Error parseResult - expect need changes value on minute more then "30"  but found ' + i + '!');
            }
            //заодно проверим другие два элемента
            if (a[1] != 2) {
                console.log(' Error parseResult - expect need changes value to "2"  but found ' + a[1] + '!');
            }
            if (a[2] != 1) {
                console.log(' Error parseResult - expect need changes value to great ("1")  but found ' + a[2] + '!');
            }
        }
    }
    if (nFound != 12) {
        console.log(' Error parseResult - expect need changes value "1"  but found ' + nFound + '!');
    }

    //Пусть в файле есть записи 10+1 19+5 20+3 29+1 30+2 35+1
    //в этом случае только при n = [19,30]  a[0] должно быть равно 1 и быть равно 0 во всех остальных случаях
    //Но a[2] должен быть 1
    data =
`10 1
19 5
20 3
29 1
30 2
35 1`;
    localStorage.setItem('10', data);
    nFound = 0;
    for (i = 0; i < 42; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] == 1) {
            //Установили первое найденное
            cb.b = a[1];
            nFound++;
            //заодно удостоверимся, что это тот самый элемент
            if (i < 20) {
                console.log(' Error parseResult - expect need changes value on minute more then "20"  but found ' + i + '!');
            }
        }
    }
    if (nFound != 22) {
        console.log(' Error parseResult - expect need changes value "2"  but found ' + nFound + '!');
    }

    //Пусть в файле есть записи 10+1 19+5 20+3 25+2 29+1 30+2 35+1 Но отсчёт начинаем с 25
    //в этом случае только при n = [30] и n = [30] a[0] должно быть равно 1 и быть равно 0 во всех остальных случаях
    //Но a[2] должен быть 1
    data =
`10 1
19 5
20 3
25 2
29 1
30 2
35 1
`;
    localStorage.setItem('10', data);
    nFound = 0;
    cb.b = 10;
    for (i = 25; i < 42; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] == 1) {
            //Установили первое найденное
            cb.b = a[1];
            nFound++;
            //заодно удостоверимся, что это тот самый элемент
            if (i < 20) {
                console.log(' Error parseResult - expect need changes value on minute more then "20" but found ' + i + '!');
            }
        }
    }
    if (nFound != 17) {
        console.log(' Error parseResult - expect need changes value "1"  but found ' + nFound + '!');
    }

    //Вариант с двумя записями. Пусть в файле есть записи 19+5 20+31 
    //в этом случае только при n = [20]  a[0] должно быть равно 1 и быть равно 0 во всех остальных случаях
    //Но a[2] должен быть 1
    data =
`19 5
20 3`;
    localStorage.setItem('10', data);
    nFound = 0;
    cb.b = 10;
    for (i = 0; i < 42; i++) {
        cb._nCurrentMinute = i;
        a = cb.parseResult(10);
        if (a[0] == 1) {
            //Установили первое найденное
            cb.b = a[1];
            nFound++;
            //Заодно удостоверимся, что это тот самый элемент
            if (i < 20) {
                console.log('Error parseResult - expect need changes value on minute "20"  but found ' + i + '!');
            }
        }
    }
    if (nFound != 22) {
        console.log(' Error parseResult - expect need changes value "1"  but found ' + nFound + '!');
    }

    
}

function test_getLogfilesList() {
    
    var cb = new CleverBrightness();
    cb.PHP = new PHPInterface(window);
    //При пустом списке файлов должен вернуть пустой массив
    localStorage.removeItem(CleverBrightness.filePrefix + 'list');
    var a = cb._getLogfilesList(), i;
    if (a.length != 0) {
        console.log(' Error getLogfilesList - expect  length "0"  but found ' + (a.length) + '!');
    }
    //В массиве 1 элемент
    _fillList('12');
    a = cb._getLogfilesList();
    if (a.length != 1) {
        console.log(' Error getLogfilesList - expect  length "1"  but found ' + (a.length) + '!');
        //console.log(a);
    }
    //И он тот, что нужен
    if (a[0] != '12') {
        console.log(' Error getLogfilesList - expect  first element  "12"  but found ' + (a[0]) + '!');
    }
    for (i = 0; i < cb._nSzBuf*2; i++) {
        var k = Math.round( Math.random() * 100 );
        _fillList(k);
    }
    a = cb._getLogfilesList();
    if (a.length > cb._nSzBuf) {
        console.log(' Error getLogfilesList - expect  max length "' + cb._nSzBuf + '"  but found ' + (a.length) + '!');
    }
    //Проверка того, что возвращаются именно три ближайших
    localStorage.removeItem(CleverBrightness.filePrefix + 'list');
    _fillList('12');
    _fillList('1');
    _fillList('42');
    _fillList('2');
    cb._nCurrentDate = 1;
    a = cb._getLogfilesList();

    var ctrl = [1, 2, 12], j;
    found = 0;
    for (i = 0; i < ctrl.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] == ctrl[i]) {
                found++;
            }
        }
    }
    if (found != 3) {
        console.log(' Error getLogfilesList - expect 3 items but found ' + (found) + '!');
    }

    cb._nCurrentDate = 40;
    a = cb._getLogfilesList(true);

    ctrl = [42, 2, 12];
    found = 0;
    for (i = 0; i < ctrl.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] == ctrl[i]) {
                found++;
            }
        }
    }
    if (found != 3) {
        console.log(' Error getLogfilesList - expect 3 items but found ' + (found) + '!');
        console.log(a);
    }


    localStorage.removeItem(CleverBrightness.filePrefix + 'list');
    _fillList('42');
    _fillList('2');

    cb._nCurrentDate = 30;
    a = cb._getLogfilesList(true);

    ctrl = [42, 2];
    found = 0;
    for (i = 0; i < ctrl.length; i++) {
        for (j = 0; j < a.length; j++) {
            if (a[j] == ctrl[i]) {
                found++;
            }
        }
    }
    if (found != 2) {
        console.log(' Error getLogfilesList - expect 2 items but found ' + (found) + '!');
        console.log(a);
    }

}

function _fillList(s) {
    localStorage.setItem(s, 1);
    var str = localStorage.getItem(CleverBrightness.filePrefix + 'list');
    str = str ? str : '';
    var ls = [], i, found = 0;
    if (str) {
        ls = str.split('\n');
    }
    for (i = 0; i < ls.length; i++) {
        if (ls[i] == s) {
            found = 1;
            break;
        }
    }
    if (!found) {
        ls.push(s);
    }
    localStorage.setItem(CleverBrightness.filePrefix + 'list', ls.join('\n'));
}

function test_getNearestLogFile() {
    var cb = new CleverBrightness();
    cb.PHP = new PHPInterface(window);
    
    cb.result = ['12', '56', '3', '46'];
    localStorage.setItem('12', 1);
    localStorage.setItem('56', 1);
    localStorage.setItem('3', 1);
    localStorage.setItem('46', 1);

    cb._nCurrentDate = 5;
    var ex = cb._getNearestLogFile([]);
    if (ex != 3) {
        console.log(' Error getNearestLogFile - expect nearest value "5"  but found "' + ex + '"!');
    }
    if (cb._isEmptySet) {
        console.log('Error getNearestLogFile - expect _isEmptySet value "false"  but found "true"!');
    }

    var a = [];
    a.push(ex);
    ex = cb._getNearestLogFile(a);
    if (ex != 12) {
        console.log(' Error getNearestLogFile - expect nearest value "12"  but found "' + ex + '"!');
    }
    if (cb._isEmptySet) {
        console.log('Error getNearestLogFile - expect _isEmptySet value "false"  but found "true"!');
    }

    cb.result = [];
    cb.result.push('12');
    localStorage.setItem('12', 1);
    localStorage.removeItem('56');
    localStorage.removeItem('3', 1);
    localStorage.removeItem('46', 1);
    ex = cb._getNearestLogFile([]);
    if (ex != 12) {
        console.log(' Error getNearestLogFile - expect nearest value "12"  but found "' + ex + '"!');
    }
    if (cb._isEmptySet) {
        console.log('Error getNearestLogFile - expect _isEmptySet value "false"  but found "true"!');
    }
    a = [];
    a.push(ex);
    ex = cb._getNearestLogFile(a);
    if (!cb._isEmptySet) {
        console.log('Error getNearestLogFile - expect _isEmptySet value "true"  but found "false"!');
    }

    cb.result = ['12', '1', '42', '2'];
    localStorage.setItem('12', 1);
    localStorage.setItem('1', 1);
    localStorage.setItem('42', 1);
    localStorage.setItem('2', 1);

    cb._nCurrentDate = 40;
    cb._isEmptySet = false;
    ex = cb._getNearestLogFile([]);
    if (ex != 42) {
        console.log(' Error getNearestLogFile - expect nearest value "42"  but found "' + ex + '"!');
    }
    if (cb._isEmptySet) {
        console.log('Error getNearestLogFile - expect _isEmptySet value "false"  but found "true"!');
        console.log(ex);
    }

}