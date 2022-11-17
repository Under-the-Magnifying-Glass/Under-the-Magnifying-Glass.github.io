


$(document).ready(function(){
  var start_style = sessionStorage.getItem('href');
  switch (start_style) {
    case 'assets/css/screenStyle.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/screenStyle.css');
      break;
    case 'assets/css/sixties.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/sixties.css');
      break;
    case 'assets/css/XIX.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/XIX.css');
      break;
  case 'assets/css/bauhaus.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/bauhaus.css');
      break;
      case 'assets/css/future.css':
        document.getElementById('theme').setAttribute('href', 'assets/css/future.css');
        break;}
  });


function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("page_logo").style.marginLeft = "200px";
    document.getElementById("metadata").style.marginLeft = "300px";
    document.getElementById("toggler").style.marginLeft = "250px";
  }
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("page_logo").style.marginLeft = "0";
    document.getElementById("metadata").style.marginLeft = "0";
    document.getElementById("toggler").style.marginLeft = "0";
  }


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("DisclaimerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* change themes*/
function changeTheme(newTheme) {
  const elem = document.getElementById('theme');
  elem.href = newTheme;
  sessionStorage.setItem('href', newTheme);
}
