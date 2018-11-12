var smoothScroll = function() {
    $('a').on('click', function(event) {
      if (this.hash !== '') {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
          window.location.hash = hash;
        });
      }
    });
  }
  $(document).ready(smoothScroll);
  
  var menuFade = function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('#menu').fadeIn(500);
      } else {
        $('#menu').fadeOut(500);
      }
    })
  }
  $(document).ready(menuFade);
  
  function myFunction(x) {
    x.classList.toggle("change");
  }
  
  function myFunction2() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  