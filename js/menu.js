$( "#menu-mobile" ).click(function() {
    $( "#nav-bar-links" ).css({"display":"flex" , "background-color":"#7799bb"});
    $("nav").css("background-color","#7799bb");
    $("#menu-mobile").css("display", "none");
    $("#close-menu-mobile").css("display","block");
  });

$( "#close-menu-mobile" ).click(function() {
    $( "#nav-bar-links" ).css("display","none");
    $("#menu-mobile").css("display", "block");
    $("#close-menu-mobile").css("display","none");
    $("nav").css("background-color","#f7f9fb");
  });


