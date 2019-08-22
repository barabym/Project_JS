

function checkSpam(spam) {
   spam = spam.toLowerCase();
   if (~spam.indexOf("viagra")) { return true; }
   if (~spam.indexOf("xxx")) { return true; }
   return false;
}


var stroka = prompt("Напиши спам", "");
alert(checkSpam(stroka));