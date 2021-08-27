document.getElementById("Title").innerHTML = "<h2>TEMPLE'S WEBSITE</h2>";
document.getElementById("Title").style.textAlign = "center";

document.getElementById("aboutMe").addEventListener("click", function () {
  alert("My name is Temple Miles. I am 15 years old and I was born on 11/03/05. Currently I go to Phillips Exeter, and am a rising sophmore. I enjoy computer programming, video games, playing the piano, photography and more!");
});
document.getElementById("thisSite").addEventListener("click", function () {
  alert("This is a website I made. Its a work in progress, so more will be added later. Right now it just has a few pictures I've taken over the past couple of years, as well as some info about me!");
});
document.getElementById("contactMe").addEventListener("click", function () {
  alert("Phone #: 202-570-8029|Instagram: temple_miles1|School Email: tmiles@exeter.edu|Personal Email: temple.miles@icloud.com|Steam: Lambknight1|Discord: Oatladd#3222|Epic Games: Oatladd|XBox: Oatladd");
});

/*document.getElementById("myParagraph").style.textAlign = "center";*/
document.getElementById("myParagraph").style.color = "white";


document.getElementById("photo1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_4133.jpg?v=1629910932269"
document.getElementById("photo2").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_3856.jpg?v=1629911746326"
document.getElementById("photo3").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_4100.jpg?v=1629911912657"

document.getElementById("noPhoto1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_3459.jpg?v=1629923103089"
document.getElementById("prev").innerHTML = "";

/*___________*/

document.getElementById("prev").addEventListener("click", function (){
  
  document.getElementById("photo1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_4133.jpg?v=1629910932269"
  document.getElementById("photo2").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_3856.jpg?v=1629911746326"
  document.getElementById("photo3").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_4100.jpg?v=1629911912657"

  document.getElementById("noPhoto1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_3459.jpg?v=1629923103089"
  
  
});

/*___________*/

document.getElementById("next").addEventListener("click", function (){
  
  document.getElementById("photo1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_0436.jpg?v=1629923167202"
  document.getElementById("photo2").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_0423.jpg?v=1629923278628"
  document.getElementById("photo3").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_0415.jpg?v=1629923336633"

  document.getElementById("noPhoto1").src = "https://cdn.glitch.com/3dd3f809-d8e5-441a-ab9d-4ca413c5d577%2FIMG_4062.jpg?v=1629923386097"
  
  
});

