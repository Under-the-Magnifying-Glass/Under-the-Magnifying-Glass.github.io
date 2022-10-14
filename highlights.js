
function addHighlight(concept){
/* Clean up all highlighted elements
document.querySelectorAll(`.highlight`).forEach(node => {
    node.classList.remove('highlight');
})*/

/* Select all elements to highlight, which are the ones that have the specified value of the "property" attribute */
  let nodes = document.querySelectorAll(`[class="${concept}"]`)

  /* Higlhlight all selected elements */
  nodes.forEach(node => {
    node.classList.add('highlight')
  })
};

function removeHighlight(concept){
  let nodes = document.querySelectorAll(`[class="${concept}"]`)

  document.querySelectorAll(`.highlight`).forEach(node => {
      node.classList.remove('highlight');
  })
};

const checkbox = document.querySelectorAll('input[type=checkbox]');

document.querySelectorAll(".showmetadata").forEach(checkbox =>{

  checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
		addHighlight(e.target.getAttribute("data-concept"));
	}
   else {
    removeHighlight(e.target.getAttribute("data-concept"));
  }})
});

</script>
