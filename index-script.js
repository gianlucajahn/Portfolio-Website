/// <reference path="./typings/globals/jquery/index.d.ts" />

// Fade out body when enter button (link) is being clicked
$('#enter').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  // Fade Out
  $('body').delay(1500).fadeOut(1500, newpage);
  });
  // Open href attribute of target <a> in same window
  function newpage() {
  window.location = newLocation;
}

// Fade out body when a link is being clicked
$('a').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  // Fade Out
  $('body').fadeOut(1500, newpage);
  });
  // Open href attribute of target <a> in same window
  function newpage() {
  window.location = newLocation;
}

// Fade in an entire page upon load
$(document).ready(function(){
    $('body').css('display', 'none');
    $('body').fadeIn(1250);
}); 

// Reload page on EVERY visit, avoiding faded out pages upon using the "back" arrow function in the client's browser
function Reload() {
    try {
      var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
      headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
    }
    catch (e) {}
}

// Responsiveness Feature for iOS users since the reloading function doesn't work on safari.
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
      if (evt.persisted) {
        document.body.style.display = "none";
        location.reload();
        }
    };
}