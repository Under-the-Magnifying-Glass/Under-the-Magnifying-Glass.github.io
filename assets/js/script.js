


$(document).ready(function(){



  var start_style = sessionStorage.getItem('href');
  switch (start_style) {
    case 'assets/css/screenStyle.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/screenStyle.css');
      break;
    case 'assets/css/1500.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/1500.css');
      break;
    case 'assets/css/XIX.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/XIX.css');
      break;
    case 'assets/css/bauhaus.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/bauhaus.css');
      break;
     case 'assets/css/sixties.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/sixties.css');
      break;
    case 'assets/css/vapo.css':
      document.getElementById('theme').setAttribute('href', 'assets/css/vapo.css');
      break;
    case 'assets/css/future.css':
        document.getElementById('theme').setAttribute('href', 'assets/css/future.css');
        break;}


// separate function for issues navbar
        $('#navbarTogglerDemo03 a').click(function () {
          $('#navbarTogglerDemo03 a').removeClass('active');
          $(this).addClass('active');
        });

// separate function for issues navbar collapse/toggle

        $('.navbar-toggler').click(function() {
          $('.navbar-collapse').toggle();
        });

  });




/* change themes*/
function changeTheme(newTheme) {
  const elem = document.getElementById('theme');
  elem.href = newTheme;
  sessionStorage.setItem('href', newTheme);
}



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


//
// $(document).ready(function(){
//
// });


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("DisclaimerBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// add statement to prevent error on issues page

if (modal !== null && btn !== null && span !== null) {
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
}


// Missing issues

function missingIssue() {
  alert("This issue is not yet available. Stay tuned to read the magazine's upcoming issues!");
}

//

const audio = document.querySelector('#vaporwave-audio');
const playPauseButton = document.querySelector('#play-pause-button');
const playPauseImage = document.querySelector('#play-pause-image');

playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseImage.classList.add('playing');
  } else {
    audio.pause();
    playPauseImage.classList.remove('playing');
  }
});
