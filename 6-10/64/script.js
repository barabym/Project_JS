var coordsTop = getCoords(avatar).top + avatar.offsetHeight;

document.onscroll = function(e) {
   var scrolled = pageYOffset;

   if(scrolled > coordsTop) {
      avatar.style.position = 'fixed';
      avatar.style.top = 0;
      avatar.style.left = 0;
      console.log(scrolled > coordsTop)
   } else {
      avatar.style.position = '';
      console.log(scrolled > coordsTop)
   }
};

function getCoords(element) {
   var box = element.getBoundingClientRect();

   return {
      left: box.left + pageXOffset,
      top: box.top + pageYOffset
   }
};
