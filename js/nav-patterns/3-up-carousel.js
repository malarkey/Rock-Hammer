// 3-up carousel ============================================================
// http://codepen.io/bradfrost/pen/pgjav

// You do not need to do anything with this file. Get off my land already!
(function(w){
var sw = document.body.clientWidth,
current = 0,
breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content'),
multiplier = 1, 
$carousel = $('.c'),
$cList = $('.c-list'),
$cWidth = $carousel.outerWidth(),
$li = $('.c li'),
$liLength = $li.size(),
numPages = $liLength/multiplier,
$prev = $('.c-nav .prev'),
$next = $('.c-nav .next');

$(document).ready(function() {
buildCarousel();
});


$(window).resize(function(){ 
sw = document.body.clientWidth;
$cWidth = $carousel.width();
breakpointSize = window.getComputedStyle(document.body,':after').getPropertyValue('content');  
sizeCarousel();
posCarousel();
});

function sizeCarousel() { 
current = 0;
if (breakpointSize == '768') {
multiplier = 2;

} else if (breakpointSize == '992') {
multiplier = 3;
} else {
multiplier = 1;
}

animLimit = $liLength/multiplier-1;

$li.outerWidth($cWidth/multiplier);

}

function buildCarousel() {
sizeCarousel();
}

function posCarousel() { .
var pos = -current * $cWidth;
$cList.css("left",pos);
}

$prev.click(function(e){ 
e.preventDefault();
if(current>0) {
current--;
}
posCarousel();

});
$next.click(function(e){ 
e.preventDefault();
if(current<animLimit) {
current++;
}
posCarousel();
});
})(this);
*/