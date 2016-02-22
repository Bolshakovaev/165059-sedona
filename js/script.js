var link = document.querySelector(".booking h3");
var popupform = document.querySelector(".booking-form");

var checkin = popupform.querySelector("[name=check-in]");

var checkout = popupform.querySelector("[name=check-out]");


link.addEventListener("click", function() {
    if (popupform.classList.contains('booking-form-show')) {
		popupform.classList.remove("booking-form-show");  
	} else {
		popupform.classList.add("booking-form-show");  
		checkin.focus();   
	}
});

popupform.addEventListener("submit", function(event) {
    if (!checkin.value || !checkout.value) {
        event.preventDefault();
        alert("Нужно ввести даты заезда и даты выезда"); 
    }
});