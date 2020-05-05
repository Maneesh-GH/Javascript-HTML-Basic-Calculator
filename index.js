// Function to read the passed value and display on screen
var sc = document.getElementById('screen');

function pass(v) {
  if (sc.value != "Mathmatical Error..") {
    sc.value += v;
  }
}

function cl(){
  sc.value  = "";
}

function back(){
  var sign = sc.value.substring(sc.value.length-2 , sc.value.length-1);
  // console.log(sign);
  if (sc.value != "Mathmatical Error..") {
    if (sign == '+' || sign == '-' || sign == '*' || sign == '/') {
      sc.value = sc.value.substring(0 , sc.value.length - 3);
    }else{
      sc.value = sc.value.substring(0 , sc.value.length - 1);
    }
  }
}

function ans(){
  if (sc.value == ' + ' || sc.value == ' - ' || sc.value == ' * ' || sc.value == ' / ') {
    sc.value = "Mathmatical Error..";
  }else{
    sc.value = eval(sc.value);
  }
}

window.onload = function() {
  var credit = document.getElementById('brand').innerHTML;
  var ind = credit.search("Maneesh");
  if (ind < 0) {
    alert("Please do not remove the branding section or give proper copyright to Maneesh and try again.");
    document.body.style.display = 'none';
  }
  console.log('%cThis site was created by Maneesh. You can contact him for more source codes or help.\n\nHe\'s also writing a JS Library for making work of developers easy. To get the library for free, contact Maneesh in instagram:\nhttps://www.instagram.com/_maneesh_pandey\nOr visit his website:\nhttp://maneesh.dx.am','color:green;font-size: 15px;');
}
