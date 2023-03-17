var currentpage="home";
function func(p) {
  var elList = document.getElementById(curr).classList.remove('active');
  document.getElementById(p).classList.add("active");
  currentpage=p;
  const req = new window.XMLHttpRequest();
  req.open("GET", p + ".html", false);
  req.send();
  document.getElementById("loadcontent").innerHTML = req.response;
}
func("home");