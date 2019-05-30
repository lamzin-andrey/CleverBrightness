function l(s) {
	if (window.lang[s]) {
		return window.lang[s];
	}
	return s;
}

/**
 * Проходит по всем элементам DOM и ставит выбранную локаль
 * @param {String} lang 
*/
function lang_setLocale(lang) {
	console.log(lang);
	window.lang = window['lang' + lang];

	var i, item, type;
	for (i in window.lang) {
		if (!i) {
			continue;
		}
		item = document.getElementById(i);
		if (item && item.tagName) {
			switch (item.tagName) {
				case 'DIV':
				case 'SPAN':
				case 'LABEL':
				case 'P':
					item.innerHTML = window.lang[i];
					break;
				case 'INPUT':
					type = item.getAttribute('type');
					switch (type) {
						case 'button':
						case 'submit':
						item.value = window.lang[i];
						break;
					}
					break;
			}
		}
	}
}