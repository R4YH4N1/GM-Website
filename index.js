/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {

    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns2.length; i++) {
      var openDropdown2 = dropdowns2[i];
      if (openDropdown2.classList.contains('show')) {
        openDropdown2.classList.remove('show');
      }
    }
  }
}

//Hover Over Me - Jack Of All Trades//
$(function() {
$('#Joat').hover(function() { 
    $('#Joat2').fadeIn(); 
}, function() { 
    $('#Joat2').fadeOut(); 
});
});

//Hover Over Me-Kappa Shirt//
$(function() {
$('#Kappa').hover(function() { 
    $('#Kappa2').fadeIn(); 
}, function() { 
    $('#Kappa2').fadeOut(); 
});
});

//Hover Over Me-FeelsIlyaMan//
$(function() {
$('#FeelsIlyaMan').hover(function() { 
    $('#FeelsIlyaMan2').fadeIn(); 
}, function() { 
    $('#FeelsIlyaMan2').fadeOut(); 
});
});

