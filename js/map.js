function initMap(){
	var element = document.querySelector("#map");

	var options = {
		zoom: 15,
		center: {
			lat: 59.720504,
			lng: 30.418335
		}
	};

	var myMap = new google.maps.Map(element, options);

	var marker = new google.maps.Marker({
		position: {lat: 59.718504, lng: 30.412335},
		map: myMap,
		icon: "img/marker.png"
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<p>ул. Конюшенная 19/8</p>"
	});

	marker.addListener("click", function(){
		infoWindow.open(myMap, marker);
	});
};