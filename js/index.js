// Code for deciding to render animation or not (depending on browser)

if (detectIE()) { // if IE -> use non-animated background
  document.getElementById("outer-box").style.display = "none";
  document.getElementById("panel1").style.display = "flex";
  console.log("made it")
} else {  // else -> use animated background
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg', // try html renderer
    loop: true,
    autoplay: true,
    path: 'animation/data.json'
  })
}


// returns false if not IE, and returns IE version if IE
// Credits to https://codepen.io/gapcode/pen/vEJNZN
function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // var edge = ua.indexOf('Edge/');
  // if (edge > 0) {
  //   // Edge (IE 12+) => return version number
  //   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  // }

  // other browser
  return false;
}
