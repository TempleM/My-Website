document.getElementById("Title").innerHTML = "<h2>Temple's Website</h2>";
document.getElementById("Title").style.textAlign = "center";

document.getElementById("aboutMe").addEventListener("click", function () {
  alert("My name is Temple Miles");
});
document.getElementById("thisSite").addEventListener("click", function () {
  alert("My name is Temple Miles");
});
document.getElementById("contactMe").addEventListener("click", function () {
  alert("My name is Temple Miles");
});

document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.color = "lightblue";

document.getElementById("sendAlert").addEventListener("click", function () {
  alert("This is an alert that be used to notify the user");
});

document.getElementById("changeImage").addEventListener("click", function () {
  document.getElementById("funImage").src = "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"
});

