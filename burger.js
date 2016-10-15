// Menu button
$("#menuButton").click(function(e) {
  $( this ).toggleClass('is-active');
  e.preventDefault();
});
// Card
$("#openClose").change(function() {
  $( ".card" ).toggleClass('collapsed');
});
// Loading
$("#loading").change(function() {
  $( ".loading-bar" ).toggleClass('hide');
});

// Modal
var openModal = function() {
  $( "body" ).addClass('modal-open');
}

var closeModal = function() {
  $( "body" ).removeClass('modal-open');
}

$("#openModal").click(function(e) {
  openModal();
  e.preventDefault();
});

$("#closeModal").click(function(e) {
  closeModal();
  e.preventDefault();
});

$(".overlay").click(function(e) {
  closeModal();
  e.preventDefault();
});
// Modal


$( document ).ready(function() {
  // Doc ready
  console.log( "ready!" );
});

$(document).keyup(function(e) {
  // Keyup
  if (e.keyCode == 27) { // escape key maps to keycode `27`
    closeModal();
  }
});
