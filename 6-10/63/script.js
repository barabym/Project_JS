var i = 0;
textarea.onwheel = function(e) {
   var max = this.scrollHeight;
   var min = 0;

   if(e.deltaY > 0) {
      i += 100;
      if(i > max) i = max;
   }

   if(e.deltaY < 0) {
      i -= 100;
      if(i < min) i = min;
   }

   if(i >= max || i <= min) return false;

};