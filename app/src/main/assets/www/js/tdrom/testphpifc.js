$(testPHPClass);
function testPHPClass(){
    var PHP = new PHPInterface(window);
    if (PHP.intval('05') !== 5) {
        console.log('05 === 5 Error!');
    }
    var t = 'testfile';
    window.localStorage.removeItem(t);
    if (PHP.file_exists(t)) {
        console.log(' Error file_exists - file not exists but PHP thing that it exists!');
    }
    PHP.file_put_contents(t, 'one');
    if (!PHP.file_exists(t)) {
        console.log(' Error file_exists - file exists but PHP thing that it NOT exists!');
    }
    if (PHP.file_get_contents(t) !== 'one') {
        console.log(' Error file_put_contents without FILE_APPEND!');
    }
    PHP.file_put_contents(t, '\ntwo', PHPInterface.FILE_APPEND);
    if (PHP.file_get_contents(t) !== 'one\ntwo') {
        console.log(' Error file_put_contents with FILE_APPEND!');
    }
}