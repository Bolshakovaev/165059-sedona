<script>
var link = document.querySelector(".booking h3");
var popup = document.querySelector(".booking");
 var form = popup.querySelector("form");

var checkin = popup.querySelector("[name=check-in]");

var checkout = popup.querySelector("[name=check-out]");


link.addEventListener("click", function(event) {
event.preventDefault();
    
popup.classList.add("booking-form-show");  
 checkin.focus();   
});
  form.addEventListener("submit", function(event) {
       
      if (!checkin.value || !checkout.value) {
          event.preventDefault();
          console.log("Нужно ввести даты заезда и даты выезда"); 
        }
      
      });
</script>
