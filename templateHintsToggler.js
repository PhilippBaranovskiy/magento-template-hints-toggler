(function(document){

	var search = document.location.search;
	var codeCheck = /(code=\w+)/.test(search);
	var tpCheck = /(tp=\d)/.test(search);
	var params = [];

	if (!codeCheck) {
		params.push('code=magento');
	}

	if (tpCheck) {
		var currentTp = parseInt( search.match(/tp=(\d+)/)[1] );
		var newTp = new Number( !!!currentTp );
		search = search.replace(/(tp=\d+)/gi, 'tp=' + newTp);
	} else {
		params.push('tp=1');
	}

	if (params.length && search != '') {
		search += '&';
	}

	document.location.search = search + params.join('&');

})(document);