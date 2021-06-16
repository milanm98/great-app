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



fetch("imageSlider.JSON")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                alert('error: ' + err);
            });

function appendData(data) {
    $("#construction-img").attr("src", data[0].path);
    $("#image2slider").attr("src", data[1].path);
    $("#image3slider").attr("src", data[2].path);
    $("#image4slider").attr("src", data[3].path);

}
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
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = slides.length}
  if (n < 1) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}