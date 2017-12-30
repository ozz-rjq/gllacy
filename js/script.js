;(function(){

	// popup variables
	var popup = document.querySelector(".modal-content");
	var popupOpen = document.querySelector(".feedback-btn");
	var popupClose = document.querySelector(".modal-content-close");
	var overlay = document.querySelector(".modal-overlay");
	var nameField = document.querySelector("[name=feedback-name]");

	//popup methods
	popupOpen.addEventListener("click", function(event){
		event.preventDefault();

		if(!popup.classList.contains("modal-content-show")){
			popup.classList.add("modal-content-show");
			nameField.focus();
			overlay.classList.add("js-show");
		}

	});

	popupClose.addEventListener("click", function(event){
		event.preventDefault();

		if(popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
			overlay.classList.remove("js-show");
		}
	});

	overlay.addEventListener("click", function(event){
		event.preventDefault();

		if(popup.classList.contains("modal-content-show"))
			popup.classList.remove("modal-content-show");

		overlay.classList.remove("js-show");
	});

	window.addEventListener("keydown", function(event){
		if(event.keyCode === 27){
			if(popup.classList.contains("modal-content-show")){
				popup.classList.remove("modal-content-show");
				overlay.classList.remove("js-show");
			}
		}
	});

}());