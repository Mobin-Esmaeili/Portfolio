$(document).ready(function () {
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".sticky").addClass("stickyadd");
    } else {
      $(".sticky").removeClass("stickyadd");
    }
  });

  //type animation

  var typed = new Typed(".element", {
    strings: ["Mike", "a Developer", "a Designer"],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 80,
    loop: true,
    loopCount: Infinity,
    startDelay: 1000,
  });

  //progress bars

  var waypoint = new Waypoint({
    element: document.getElementById("exp-id"),
    handler: function () {
      var p = document.querySelectorAll(".progress-bar");
      p[0].setAttribute("style", "width:95%;transition:1s all;");
      p[1].setAttribute("style", "width:85%;transition:1.5s all;");
      p[2].setAttribute("style", "width:70%;transition:2s all;");
      p[3].setAttribute("style", "width:75%;transition:2.5s all;");
      p[4].setAttribute("style", "width:60%;transition:2.7s all;");
    },

    offset: "90%",
  });

  //adding fadeInUp animation to child of div with class .way-col

  var $child = $(".way-fade-up").children();
  $child.each(function () {

    var self = $(this);

    $(this).waypoint(
      function () {
        self.addClass("animated fadeInUp");
      },
      { offset: "90%" }
     );


  });

  var $child = $(".way-fade-left").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInLeft");
      },
      { offset: "90%" }
    );
  });

  var $child = $(".way-fade-right").children();
  $child.each(function () {
    var self = $(this);
    $(this).waypoint(
      function () {
        self.addClass("animated fadeInRight");
      },
      { offset: "90%" }
    );
  });

  //filter

  var filterizd = $(".filter-container").filterizr({
    animationduration: 0.5,
  });

  //Owl Carousel

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4800,
    items: 1,
  });

  $('a').smoothScroll({

    speed:2000,
  });

});


