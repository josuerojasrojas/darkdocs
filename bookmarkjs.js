// to use in a bookmark (for non chrome users (i only tested on safari))
// use the minidified version instead....

javascript:(function(){
  document.addEventListener("DOMContentLoaded", function(event){
    // code from http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
    var fileref=document.createElement("link");
    fileref.setAttribute("rel", "stylesheet");
    fileref.setAttribute("type", "text/css");
    fileref.setAttribute("href", "https://josuerz.xyz/darkdocs/style.css", "css");
    document.getElementsByTagName("head")[0].appendChild(fileref);
    document.querySelector("body").classList.add("darkdocs");
  })
})()
