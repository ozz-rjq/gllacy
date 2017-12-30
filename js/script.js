;(function(){

	// popup variables
	var popup = document.querySelector(".modal-content");
	var popupOpen = document.querySelector(".feedback-btn");
	var popupClose = document.querySelector(".modal-content-close");
	var overlay = document.querySelector(".modal-overlay");

	//popup methods
	popupOpen.addEventListener("click", function(event){
		event.preventDefault();

		if(!popup.classList.contains("modal-content-show")){
			popup.classList.add("modal-content-show");
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
	})

	//header interactive

	var catalogLink = document.querySelector("#catalog");
	var auxNav = document.querySelector(".auxiliary-navigation");

	auxNav.addEventListener("mouseover", function(event){
		catalogLink.classList.add("catalog-hover");
	});

	auxNav.addEventListener("mouseout", function(event){
		catalogLink.classList.remove("catalog-hover");
	});

}());