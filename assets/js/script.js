


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




  });




/* change themes*/
function changeTheme(newTheme) {
  const elem = document.getElementById('theme');
  elem.href = newTheme;
  sessionStorage.setItem('href', newTheme);
  console.log(newTheme);
}


$(document).ajaxComplete(function(){

  // add/remove classes for layout in issues
  // Get the elements to apply the classes
  // var article = document.querySelector('#canvas')
  var titleDiv = document.querySelector('#style-title');
  var innerDiv = document.querySelector('#row-style-title');
  var innerCol = document.querySelector('#col-style-title');
  var innerColAuthor = document.querySelector('#col-style-author');

  // add the classes when the themed CSS file is applied
  function addClasses() {
    console.log(titleDiv);
    if (titleDiv !== null && innerDiv !== null && innerCol !== null && innerColAuthor !== null) {

    titleDiv.classList.add('style-title', 'flex', 'container', 'align-items-center', 'justify-content-center');
    innerDiv.classList.add('style-title', 'flex', 'row', 'justify-content-center');
    innerCol.classList.add('style-title', 'col', 'col-md-6', 'col-lg-6', 'col-6');
    innerColAuthor.classList.add('style-title', 'flex', 'col', 'col-md-1', 'col-lg-1', 'col-1');
  }
}
  //remove the classes when theme file is not applied
  function removeClasses() {
    if (titleDiv !== null && innerDiv !== null && innerCol !== null && innerColAuthor !== null) {


    titleDiv.classList.remove('style-title', 'flex', 'container', 'align-items-center', 'justify-content-center');
    innerDiv.classList.remove('style-title', 'flex', 'row', 'justify-content-center');
    innerCol.classList.remove('style-title', 'col', 'col-md-6', 'col-lg-6', 'col-6');
    innerColAuthor.classList.remove('style-title', 'flex', 'col', 'col-md-1', 'col-lg-1', 'col-1');

  }
}
//
// if (sessionStorage.getItem('href') === 'assets/css/bauhaus.css') {
//   addClasses();
// } else {
//   removeClasses();
// }

// console.log(newTheme);    // rest of the code ...
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
