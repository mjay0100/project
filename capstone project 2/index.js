// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//dark mode
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}