$( "#menu-mobile" ).click(function() {
    $( ".nav-bar-links" ).css({"display":"flex" , "background-color":"#185c94"});
    $("nav").css("background-color","#185c94");
    $("#menu-mobile").css("display", "none");
    $("#close-menu-mobile").css("display","block");
  });

$( "#close-menu-mobile" ).click(function() {
    $( ".nav-bar-links" ).css("display","none");
    $("#menu-mobile").css("display", "block");
    $("#close-menu-mobile").css("display","none");
    $("nav").css("background-color","#185c94");
  });