//Здесь просто заглушка, в окончательный проект этот код никак не попадёт

class PHPInterface {
	

	/**
	 * @description Записать строку в localStorage
	 * @param {String} file
	 * @param {String} data
	 * @param {Boolean} isAppend
	 * @return String
	*/
	/*String*/ file_put_contents(/*String*/ file, /*String*/ data, isAppend)
	{
		/*console.log('Write file: ' + file);
		console.log('Data:\n' + data);
		console.log('isAppend: ', isAppend);/**/
		if (isAppend) {
			let s = window.localStorage.getItem(file);
			s = s ? s : '';
			s += data;
			window.localStorage.setItem(file, s);
		} else {
			window.localStorage.setItem(file, data);
		}
		return String(data.length);
	}
	/**
	 * @description
	 * @param {Context} ctx 
	 */
	constructor ( ctx) {
		this._ctx = ctx;
	}
	/**
	 * @description Получить строку из localStorage
	 * @param {String} file
	 * @return String
	*/
	/*public String*/ file_get_contents(file) {
		let defErr = "Could not read file " + file + " with error 'not exists'";
		let s = window.localStorage.getItem(file);
		if (s === null) {
			return defErr;
		}
		return s;
	}

	/**
	 * @description Получить строку из localStorage
	 * @param {String} file
	 * @return Boolean
	*/
	/*public String*/ file_exists(file) {
		let s = window.localStorage.getItem(file);
		if (s === null) {
			return false;
		}
		return true;
	}
	/**
	 * @description Вернет длину массива
	 * @param {Array} str
	 * @return Boolean
	*/
	count(a) {
		return a.length;
	}
	/**
	 * @description Вернет длину строки
	 * @param {String} str
	 * @return Boolean
	*/
	strlen(str) {
		return str.length;
	}
	/**
	 * currentTimestamp - в секундах
	*/
	 date(pattern, currentTimestamp){
		var dt = new Date(), map;
		if (currentTimestamp) {
			dt.setTime(currentTimestamp * 1000);
		}
		map = {
			Y : dt.getFullYear(),
			y : dt.getYear(),
			m : dt.getMonth() + 1,
			d : dt.getDate(),
			H : dt.getHours(),
			N : this._dateParseN(dt),
			i : dt.getMinutes(),
			s : dt.getSeconds()
		};
		var key;
		for (key in map) {
			if (key != 'N') {
				map[key] = +map[key] < 10 ? ('0' + map[key]) : map[key];
			}
			pattern = this.str_replace(key, map[key], pattern);
		}
		return pattern;
	}
	_dateParseN(dt) {
		var n = dt.getDay();
		n = (n == 0 ? 7 : n);
		return n;
	}
	str_replace(search, replace, subject, oCount) {
		subject = String(subject);
		var p = subject.indexOf(search);
		while (p != -1) {
			subject = subject.replace(search, replace);
			if (oCount && (oCount instanceof Object)) {
				if (!oCount.v) {
					oCount.v = 0;
				}
				oCount.v++;
			}
			p = subject.indexOf(search, p + 1);
		}
		return subject;
	}

	intval(i) {
		var n = parseInt(i);
		n = isNaN(n) ? 0 : n;
		return n;
	}
	in_array(needle, subject, strict) {
		var i, j, r;
		if (typeof(subject) == 'array') {
			for (i = 0; i < subject.length; i++) {
				j = subject[i];
				r = (j == needle);
				if (strict) {
					r = (j === needle);
				}
				if (r) {
					return true;
				}
			}
		} else if (typeof(subject) == 'object') {
			for (i in subject) {
				j = subject[i];
				r = (j == needle);
				if (strict) {
					r = (j === needle);
				}
				if (r) {
					return true;
				}
			}
		}
		return false;
	}
	/**
	 * @description 
	 * @param {String} sDatetime 'Y-m-d H:i:s' (php date() format)
	 * @return Количество секунд с 01.01.1970 до sDatetime
	*/
	time(sDatetime) {
		var re = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}\s[0-9]{2}:[0-9]{2}:[0-9]{2}$/,
			arr = String(sDatetime).split(' '),
			sDate = arr[0],
			sTime = arr[1], d = new Date(),
			re2 = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;
		if (!re.test(sDatetime) && !re2.test(sDatetime)) {
			return parseInt(new Date().getTime()/1000);
		}
		arr = sDate.split('-');
		d.setDate(parseInt(arr[2], 10));
		d.setFullYear(arr[0]);
		d.setMonth(parseInt(arr[1], 10) - 1);
		
		if (sTime) {
			arr = sTime.split(':');
			d.setHours(parseInt(arr[0], 10));
			d.setMinutes(parseInt(arr[1], 10));
			d.setSeconds(parseInt(arr[2], 10), 0);
		} else {
			d.setHours(0);
			d.setMinutes(0);
			d.setSeconds(0, 0);
		}
		return parseInt(d.getTime()/1000);
	}
	strval(n) {
		return String(n);
	}
}
PHPInterface.FILE_APPEND = 1;