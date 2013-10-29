(function () {

	var browse = document.querySelector("#browse");
	if (browse) {
		browse.onclick = function () {
			var openB = new MozActivity({
				name: "open"
				data: {
					type: "photos"
				}
			});
		};	

		browse.onsuccess = function () {
			var picture = this.result;
			console.log("A picture has been retrieved");
		}; 

		browse.onerror = function () {
			console.log(this.error);
		}
	}

});