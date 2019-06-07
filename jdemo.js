function expand() {
  $(".search").toggleClass("close");
  $(".input-1").toggleClass("square");
  if ($('.search').hasClass('close')) {
    $('input-1').focus();
  } else {
    $('input-1').blur();
  }
}
$('button').on('click', expand);