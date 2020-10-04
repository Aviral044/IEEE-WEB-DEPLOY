
/* Set the width of the side navigation to 400px */
function openNav() {
    document.getElementById("sidenav").style.width = "400px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
  }

  /* ---------------------------------------------------
    TYPING ANIMATION
----------------------------------------------------- */
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #fff }";
  document.body.appendChild(css);
};

$(document).ready(function() {
  //Preloader
  preloaderFadeOutTime = 1500;
  function hidePreloader() {
  var preloader = $('.spinner-wrapper');
  preloader.fadeOut(preloaderFadeOutTime);
  }
  hidePreloader();
  });

   /* ---------------------------------------------------
    PAGE LINKING AND REDIRECTING
----------------------------------------------------- */

var fromPlaceValue;
var settlementValue;
var toPlaceValue;
var val;
var settlementValue1;


function fromLinker(){
   var x = document.getElementById("from-first-form").selectedIndex;
   fromPlaceValue = document.getElementsByTagName("option")[x].value;
   document.getElementById("firstlink").href = `from_${fromPlaceValue}.html`;
  localStorage.setItem("fromPlaceValue",fromPlaceValue);
};


function toLinker(){
  var z = document.getElementById("to-form-link").selectedIndex;
  toPlaceValue = document.getElementById("to-form-link").value;
  localStorage.setItem('settle1',toPlaceValue);
  document.getElementById("to-btn").href = `destination_${toPlaceValue}.html`;
};

function setVal(){
  document.getElementById("from-settlement-name").textContent = localStorage.settle;
  }

function settoVal1(){
  document.getElementById("from-settlement-name2").textContent = localStorage.settle2;
  document.getElementById("from-settlement-name").textContent = localStorage.settle;
}


  /* ---------------------------------------------------
    CHECKOUT PAGE
----------------------------------------------------- */

function showSettlementfrom(){
  document.getElementById("from-settlement-name").textContent = localStorage.settle;
  }


  function setDest(){
    var x=document.getElementById("dest");
    var y = x.selectedIndex;
    localStorage.setItem('settle2',`${localStorage.settle1} ${x[y].value}`);
  }