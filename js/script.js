<script>
var link = document.querySelector(".booking h3");
var popup = document.querySelector(".booking-form");

link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("booking-form-show");    
});
  
</script>

//var close = popup.querySelector(".modal-content-close");
//var form = popup.querySelector("form");
//var login = popup.querySelector("[name=login]");
//var password = popup.querySelector("[name=password]");
//var storage = localStorage.getItem("login");



//if (storage) {
//login.value = storage;
//password.focus();
//} else {
//login.focus();
//}
//});
//close.addEventListener("click", function(event) {
//event.preventDefault();
//popup.classList.remove("modal-content-show");
//});
//form.addEventListener("submit", function(event) {
//if (!login.value || !password.value) {
//event.preventDefault();
//console.log("Нужно ввести логин и пароль");
//} else {
//localStorage.setItem("login", login.value);
//}
//});
//window.addEventListener("keydown", function(event) {
//if (event.keyCode === 27) {
//if (popup.classList.contains("modal-content-show")) {
//popup.classList.remove("modal-content-show");
//}
//}
//});
//</script>



//jQuery(function($) {
//     $('.booking-form').hide();
//  $('.booking h3').on('click', function() {
 //   $(this).next('.booking-form').toggle();
//});
  
//   $('.social-btn').wrapInner('<span class="hidden"></span>');
  
 // $('.counter_input').each(function() {
 //   $(this).wrap('<div class="counter"></div>').before('<span class="minus">-</span>').after('<span class="plus">+</span>');
  //});
  
  
//});