/// Referencing jQuery's typing path to use jQuery intelliSense
/// <reference path="../typings/globals/jquery/index.d.ts" />

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
    // Change the body's display value to none, then fade it in
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

// Responsiveness Feature for iOS users since the reloading function doesn't work on safari
if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
    window.onpageshow = function(evt) {
      if (evt.persisted) {
        document.body.style.display = "none";
        location.reload();
        }
    };
}

// Toggling between making the "most recent project" category hidden and visible, based on clicking the arrow above
function visibility() {
    let item = document.getElementById('main-right-bottom');
    if (item.style.opacity === '1') {
        item.style.opacity = '0';
        item.style.transition = '1s opacity';
    } else {
        item.style.opacity = '1';
        item.style.transition = '1s opacity';
    }
}

let arrow = document.getElementById('arrow');
arrow.addEventListener('click', visibility);

// Add Sounds on Clicks
$('button, img, a, h3').click(function(e) {
    let clicked = e.target;
    // Check for elements with the 'blob' class
    if (clicked.classList.contains('blob')) {
        let audio = new Audio('../audiofiles/blob.mp3');
        audio.play();
    // Check for elements with the 'stick' class
    } else if (clicked.classList.contains('stick')) {
        let audio = new Audio('../audiofiles/stick.mp3');
        audio.play();
        audio.addEventListener('ended', function () {
            if (clicked.parentNode.href) {
                window.location = clicked.parentNode.href
            } else window.location = clicked.href;
        });
    // Check for elements with the 'click' class
    } else if (clicked.classList.contains('click')) {
        let audio = new Audio('../audiofiles/click.mp3');
        audio.play();
    } else return
});
