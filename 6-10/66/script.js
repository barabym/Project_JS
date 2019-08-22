var collectionImg = document.querySelectorAll('img');
var arrImg = [];
var pageSize = window.pageYOffset + document.documentElement.clientHeight;


collectionImg.forEach(function(item) {
   if(item.hasAttribute('realsrc')) arrImg.push(item);
});

pageSize = window.pageYOffset + document.documentElement.clientHeight;
   arrImg.forEach(function(item, i, arr) {
      if(pageSize > getCoords(item).top) {

         item.setAttribute('src', item.getAttribute('realsrc'));
         arr.splice(i, 1);
      }
})

document.onscroll = function(e) {
   pageSize = window.pageYOffset + document.documentElement.clientHeight;
   arrImg.forEach(function(item, i, arr) {
      if(pageSize - 100 > getCoords(item).top) {
         item.setAttribute('src', item.getAttribute('realsrc'));
         arr.splice(i, 1);
      }
   })
}


function getCoords(element) {
   var box = element.getBoundingClientRect();
   return {
      left: box.left + pageXOffset,
      top: box.top + pageYOffset,
      bottom: box.bottom + pageYOffset
   }
};