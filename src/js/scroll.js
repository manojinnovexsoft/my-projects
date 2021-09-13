window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.querySelector(".navbar-container").classList.add("new-header");
  } else {
      if(document.querySelector(".navbar-container").classList.contains("new-header")){
    document.querySelector(".navbar-container").classList.remove("new-header");
      }
  }
}