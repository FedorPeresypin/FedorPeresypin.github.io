document.addEventListener( 'DOMContentLoaded', function () {
    VANTA.NET({
      el: "#main",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x35d780,
      backgroundColor: 0xf0520,
      points: 23.00,
      maxDistance: 25.00,
      spacing: 20.00
    });

    $('.slider').slick({
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      prevArrow:'<img src="img/left.png" class="slick-prev"></img>',
      nextArrow:'<img src="img/right.png" class="slick-next"></img>',
      responsive: [
          {
            breakpoint: 1024,
            settings: {
                arrows: false
            }
          }
        ]
    });
} );