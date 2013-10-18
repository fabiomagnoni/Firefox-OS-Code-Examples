(function () {

	var openBrowser = document.querySelector("#open-browser");
	if (openBrowser) {
		openBrowser.onclick = function () {
			var openB = new MozActivity({
				name: "open"
			});
		};	

		openB.onsuccess = function () {
			var open = window.open(apps/browser/manifest.webapp,blank);
		}; 
	}

});