jQuery(function($) {
//     $('.booking-form').hide();
  $('.booking h3').on('click', function() {
    $(this).next('.booking-form').toggle();
});
  
//   $('.social-btn').wrapInner('<span class="hidden"></span>');
  
  $('.counter_input').each(function() {
    $(this).wrap('<div class="counter"></div>').before('<span class="minus">-</span>').after('<span class="plus">+</span>');
  });
  
  
});