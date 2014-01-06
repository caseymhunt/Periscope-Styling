$(function () {
  // Select all/none via the checkbox in the table header.
  $('.action-list th input[type=checkbox]').change(function (event) {
    $('.action-list td input[type=checkbox]').prop('checked', $(this).prop('checked'));
  });

  // List actions
  $('.action-select li a').click(function (event) {
    event.preventDefault();
    var $this = $(this);

    var $form = $('<form method="post"></form>');
    $form.attr('action', $this.data('formAction'));
    $form.attr('method', $this.data('formMethod'));

    var $action = $('<input type="text" name="action_type" />');
    $action.val($this.data('actionType'));

    if ($form.attr('method').toLowerCase() !== 'get') {
      $form.append($($('input[name=csrfmiddlewaretoken]')[0]).clone())
    }
    
    $form.append($('.action-list input[type=checkbox]').clone());
    $form.append($action);

    $form.submit();
  });
});