document.getElementById('toggle-button').addEventListener('click', function() {
  var themeStyle = document.getElementById('theme-style');
  if (themeStyle.getAttribute('href') === 'light-mode.css') {
    themeStyle.setAttribute('href', 'dark-mode.css');
  } else {
    themeStyle.setAttribute('href', 'light-mode.css');
  }
});
