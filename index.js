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


  