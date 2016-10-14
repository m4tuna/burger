var menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function (e) {
  menuButton.classList.toggle('is-active');
  e.preventDefault();
});
$("#openClose").change(function() {
  $( ".card" ).toggleClass('collapsed');
});

$("#loading").change(function() {
  $( ".loading-bar" ).toggleClass('hide');
  $(this).parent().toggleClass('relative');
});
