(function () {
  document.querySelectorAll('time[data-published]').forEach(function (el) {
    var published = new Date(el.getAttribute('data-published') + 'T00:00:00');
    var now = new Date();
    var diffMs = now - published;
    var diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    var text;
    if (diffDays < 1) {
      text = 'Today';
    } else if (diffDays < 30) {
      text = diffDays + 'd ago';
    } else if (diffDays < 365) {
      var months = Math.floor(diffDays / 30);
      text = months + 'mo ago';
    } else {
      var years = Math.floor(diffDays / 365);
      text = years + 'y ago';
    }

    el.textContent = text;
  });
})();
