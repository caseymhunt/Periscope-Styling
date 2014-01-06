$(function ($) {
  $('tr.consumer-expansion').hide();

  $('tr.consumer-row a').on('click', function (event) {
    event.preventDefault();
    var $this = $(this);
    var $row = $this.closest('tr');
    var consumerId = $row.data('consumerId');
    var currentExpander = 'tr.consumer-' + consumerId + '-expansion';
    $(currentExpander).fadeToggle();
    $('tr.consumer-expansion').not(currentExpander).fadeOut();
  })
})