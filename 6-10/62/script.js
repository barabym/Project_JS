var i = 1;
elem.onwheel = function(e) {
   if(e.deltaY > 0) {
      i += 0.05;
      elem.style.transform = elem.style.WebkitTransform = elem.style.MsTransform = `scale(${i})`;
   } else {
      i -= 0.05;
      elem.style.transform = elem.style.WebkitTransform = elem.style.MsTransform = `scale(${i})`;
   }
   return false;
}