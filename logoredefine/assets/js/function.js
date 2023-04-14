        //responsive menu
        $(".menu-bottom").on("click", function() {
            $("html").toggleClass("menu-open")
        });
        $(".menu-bottom").click(function() {
            $(this).toggleClass("click")
        });
        $('.owl-testimonial').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots:false,
            autoplay:true,
            autoplayTimeout:13000,
            autoplaySpeed: 800,
            navText: ['<img src="https://www.logoredefine.com/assets/images/owl-prev.png" alt="">','<img src="https://www.logoredefine.com/assets/images/owl-next.png" alt="">'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                },
                360:{
                  items:1
                }
            }
        });
        $('.owl-about').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            autoplay:true,
            autoplayTimeout:13000,
            autoplaySpeed: 800,
            responsive:{
                0:{
                    items:4
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                },
                360:{
                    items:2
                }
            }
        });
    