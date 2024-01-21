// Возврат на страницу
const entranceButton = document.querySelector('.entrance-button');
if (entranceButton) {
	document.querySelector('.entranceButton').addEventListener('click', () => {
		window.location='screamer.html';	
	})
}

const pageName = window.location.pathname.split("/").pop().split('.')[0];

if (pageName === 'screamer') {
	setTimeout(() => {
		history.back();
	}, 5000);
}

// Геолокация пользователя
navigator.geolocation.getCurrentPosition(
        function(position) {
    	    alert('Вы находитесь здесь: ' +
    		    position.coords.latitude + ", " + position.coords.longitude);
    	}
    );