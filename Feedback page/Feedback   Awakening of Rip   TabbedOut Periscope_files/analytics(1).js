function makeLinkTracker(category, action, label, value) {
  return function (event) {
    event.preventDefault();
    var $this = $(this);

    ga('send', 'event', category, action, label, value);

    // Ensure that analytics has time to load and process the tracking
    // queue before navigating away from the page.
    // https://support.google.com/analytics/answer/1136920?hl=en
    setTimeout(function () {
      document.location.href = $this.attr('href');
    }, 100);
  };
}
