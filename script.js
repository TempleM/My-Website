document.getElementById("Title").innerHTML = "<h2>Temple's Website</h2>";


document.getElementById("changeText").addEventListener("click", function () {
  document.getElementById("myHeader").innerHTML = "Event Listeners are Cool!";
});

document.getElementById("myParagraph").style.textAlign = "center";
document.getElementById("myParagraph").style.color = "lightblue";

document.getElementById("sendAlert").addEventListener("click", function () {
  alert("This is an alert that be used to notify the user");
});

document.getElementById("changeImage").addEventListener("click", function () {
  document.getElementById("funImage").src = "https://secure.img1-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"
});
