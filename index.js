window.onload = function() {
    var table = document.querySelector('.pcpp-part-list');
    var opacity = 0;
    table.style.opacity = opacity;
    table.classList.remove('hide');
    var interval = setInterval(function() {
      opacity += 0.01;
      table.style.opacity = opacity;
      if (opacity >= 1) {
        clearInterval(interval);
      }
    }, 10);
  }