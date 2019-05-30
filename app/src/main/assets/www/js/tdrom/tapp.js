$(initTestApp);

function initTestApp() {
    window.bPlus = $('#bPlus');
    window.bMinus = $('#bMinus');
    window.hTest = $('#hTest');
    window.hLog = $('#hLog');
    window.bShowLog = $('#bShowLog');
    window.bSave = $('#bSave');
    window.bLoad = $('#bLoad');
    window.bMenu = $('#bMenu');
    window.iFilename = $('#iFilename');
    window.iFilecontent = $('#iFilecontent');
    
    var b = DisplayManager.getDisplayBrightness(window);
    DisplayManager.setDisplayBrightness(b, window);
    hTest.text(b);
    _setBrightnessListeners();
}
function _setBrightnessListeners() {
    bPlus.click(onClickBtnPlus);
    bMinus.click(onClickBtnMinus);
    bShowLog.click(onClickShowLog);
    bMenu.click(onClickMenu);
    bLoad.click(onClickLoad);
    bSave.click(onClickSave);
}
function onClickLoad() {
    var s = iFilename.val();
    var PHP = new PHPInterface(window);
    if (s.trim()) {
        if (PHP.file_exists(s)) {
            iFilecontent.val( PHP.file_get_contents(s) );
        } else {
            alert('File not found!');
        }
    }
}
function onClickSave() {
    var s = iFilename.val();
    var PHP = new PHPInterface(window);
    if (s.trim()) {
        PHP.file_put_contents(s, iFilecontent.val());
        
    } else {
        alert('You must enter filename!');
    }
}
function onClickMenu() {
    appWindow('hLocalEditor', 'Редактирование данных в localStorage', onC);
}
function onClickShowLog() {
    var s = localStorage.getItem('humanlog'), a = [], ab = [], i;
    if (s) {
        a = s.split('\n');
    } else {
        s = '';
    }
    for (i = a.length - 1; i > -1 ; i--) {
        ab.push(`<p>${a[i]}</p>`);
    }
    s = localStorage.getItem('prev');
    s = s ? s : '';
    ab.push(`<p>Prev: ${s}</p>`);
    hLog.html(ab.join(''));
}
function onClickBtnPlus(e) {
    var b = DisplayManager.getDisplayBrightness(window) + 10;
    b = b > 255 ? 255 : b;
    DisplayManager.setDisplayBrightness(b);
    hTest.text(b);
}
function onClickBtnMinus(e) {
    var b = DisplayManager.getDisplayBrightness(window) - 10;
    b = b < 0 ? 0 : b;
    DisplayManager.setDisplayBrightness(b);
    hTest.text(b);
}
function onC() {
    //alert('It Will close!');
}
