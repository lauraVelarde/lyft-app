$(document).ready(function() {
  var $number = $('#numberphone');
  $number.on('input', function(event) {
    // console.log(event.target.value);
    if ($(this).val().length >= 9) {
      alert('Tu codigo de verificacion es ');
    } else {
      alert('no cumple');
    }
  });
});