$( "#menu-mobile" ).click(function() {
    $( ".nav-bar-links" ).css({"display":"flex" , "background-color":"#185c94", "animation" : "puls 1s normal"});
    $("nav-bar").css("background-color","#185c94");
    $("#menu-mobile").css("display", "none");
    $("#close-menu-mobile").css("display","block");
  });

$( "#close-menu-mobile" ).click(function() {
    $( ".nav-bar-links" ).css({"display" :"none", "animation" : "puls 1s reverse"});
    $("#menu-mobile").css("display", "block");
    $("#close-menu-mobile").css("display","none");
    $("nav-bar").css("background-color","#185c94");
  }); 




  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-card");
    if (n > slides.length) {slideIndex = slides.length}
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
   
  }


  