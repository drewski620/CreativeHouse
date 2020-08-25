 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('white');
                  $('nav ul li a').addClass('black');
                  $('.logo').addClass('green');
            }

            else {
                  $('nav').removeClass('white');
                  $('nav ul li a').removeClass('black');
            }
      })