var curr="home";
function func(p) {
  var elList = document.getElementById(curr).classList.remove('active');
  document.getElementById(p).classList.add("active");
  curr=p;
  const req = new window.XMLHttpRequest();
  req.open("GET", p + ".html", false);
  req.send();
  document.getElementById("loadcontent").innerHTML = req.response;
}
func("home");

$(document).click(function (event) {
  var text = $(event.target.id);
  text.classList.add("active");
  console.log(text);
});
