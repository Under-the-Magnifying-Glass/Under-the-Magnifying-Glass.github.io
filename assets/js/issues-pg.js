
  //change article
    $(document).ready(function(){
      $("#btn1").click(function(){
        $.ajax({
          url: 'texts/dainty-hands.html',
          success: function(data) {
            $("#articles").html(data);

          }
        });
      });
    });

    $(document).ready(function(){
      $("#btn2").click(function(){
        $.ajax({
          url: 'texts/musgrave-ritual.html',
          success: function(data) {
            $("#articles").html(data);
          }
        });
      });
    });

    $(document).ready(function(){
      $("#btn3").click(function(){
        $.ajax({
          url: 'texts/scandal-in-bohemia.html',
          success: function(data) {
            $("#articles").html(data);
          }
        });
      });
    });

    $(document).ready(function(){
      $("#btn4").click(function(){
        $.ajax({
          url: 'issues-compare.html',
          success: function(data) {
            $("#articles").html(data);
          }
        });
      });
    });


    $(document).ready(function(){

       $('#first_scroll').load("texts/scandal-in-bohemia.html");

    });

    $(document).ready(function(){

       $('#second_scroll').load("texts/musgrave-ritual.html");

    });

    $(document).ready(function(){

       $('#third_scroll').load("texts/dainty-hands.html");

    });

// <!-- Highlight function -->

function addHighlight(concept){
/* Select all elements to highlight, which are the ones that have the specified value of the "property" attribute */
  let nodes = document.querySelectorAll(`[class="${concept}"]`)
  let space=document.getElementById(concept);

  let x= new Set();

  /* Higlhlight all selected elements and show instances*/
  nodes.forEach(node => {
    x.add(node.getAttribute("about"));
    node.classList.add('highlight');
  })

  nodes[0].scrollIntoView({ behavior: 'smooth', block: "center" }, true);

  let strings=""

  x.forEach(s=>{
    strings=strings+s+"\n";
  })
  space.innerHTML=strings;

  $('#btn1').click(function(){
  space.innerHTML="";
})  ;
$('#btn2').click(function(){
  space.innerHTML="";
})  ;
$('#btn3').click(function(){
  space.innerHTML="";
})  ;
$('#btn4').click(function(){
  space.innerHTML="";
})  ;

};

function removeHighlight(concept){
  let nodes = document.querySelectorAll(`[class="${concept} highlight"]`)

  nodes.forEach(node => {
      node.classList.remove('highlight')
  })
};

const checkbox = document.querySelectorAll('input[type=checkbox]');

document.querySelectorAll(".showmetadata").forEach(checkbox =>{

  checkbox.addEventListener("change", (e) => {
  if (e.currentTarget.checked) {
		addHighlight(e.currentTarget.getAttribute("data-concept"));
	}
   else {
    removeHighlight(e.currentTarget.getAttribute("data-concept"));
  }})
});


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
