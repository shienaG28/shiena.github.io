var fname = ["andy","alfred","jonas","stecy","sara","michele","robert"] ;
var lname = ["yap","mendoza","mendiola","agustine","yuson"];

function getname() {
  var randomName = fname[Math.floor(Math.random()* fname.length)]+ ' '+ lname[Math.floor(Math.random()*lname.length)];
  return randomName;
}
function generate() {
    document.querySelector('.namelist').style.textTransform = "capitalize";
  var user = document.querySelector('.qwe').value;
  if (user > 10){
    document.querySelector('.namelist').innerHTML = "maximun of 10";
  }
  else {

    document.querySelector('.namelist').innerHTML = "";
    for (var i = 0; i < user; i++) {
    document.querySelector('.namelist').innerHTML += getname() + "<br>";
    }
  }
}
