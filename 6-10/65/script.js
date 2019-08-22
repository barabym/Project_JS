var arrowTop = document.getElementById('arrowTop');
var arrowBottom = document.getElementById('arrowBottom');
var sizePage = document.documentElement.clientHeight;
var currentCoords;

document.onscroll = function(e) {
   var scrolled = pageYOffset;

   if(scrolled > sizePage) {
      arrowTop.hidden = false;
      arrowTop.style.position = 'fixed';
      arrowBottom.hidden = true;
   }
   if(scrolled < sizePage) arrowTop.hidden = true;
};

arrowTop.onclick = function(e) {
   currentCoords = pageYOffset;
   window.scrollTo(0, 0);

   arrowTop.hidden = true;
   arrowBottom.hidden = false;
   arrowBottom.style.position = 'fixed';
};

arrowBottom.onclick = function(e) {
   window.scrollTo(0, currentCoords);
   arrowBottom.hidden = true;
};
