/*!
    * Start Bootstrap - SB UI Kit Pro v1.0.2 (https://shop.startbootstrap.com/product/sb-ui-kit-pro)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under SEE_LICENSE (https://github.com/BlackrockDigital/sb-ui-kit-pro/blob/master/LICENSE)
    */
    (function($) {
    "use strict";

    // Enable Bootstrap tooltips via data-attributes globally
    $('[data-toggle="tooltip"]').tooltip();

    // Enable Bootstrap popovers via data-attributes globally
    $('[data-toggle="popover"]').popover();

    $(".popover-dismiss").popover({
        trigger: "focus"
    });

    // Activate Feather icons
    feather.replace();

    // Activate Bootstrap scrollspy for the sticky nav component
    $("body").scrollspy({
        target: "#stickyNav",
        offset: 82
    });

    // Scrolls to an offset anchor when a sticky nav link is clicked
    $('.nav-sticky a.nav-link[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top - 81
                    },
                    200
                );
                return false;
            }
        }
    });

    // Collapse Navbar
    // Add styling fallback for when a transparent background .navbar-marketing is scrolled
    var navbarCollapse = function() {
        if($(".navbar-marketing.bg-transparent.fixed-top").length === 0) {
            return;
        }
        if ($(".navbar-marketing.bg-transparent.fixed-top").offset().top > 0) {
            $(".navbar-marketing").addClass("navbar-scrolled");
        } else {
            $(".navbar-marketing").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

})(jQuery);

function copyText(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
}

function CopyToClipboard(containerid) {
  console.log(containerid)

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    document.getSelection().removeAllRanges();
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.getElementById(containerid.concat("check")).style.display = "block";
    document.getElementById(containerid.concat("check")).style.display = "block";
    document.getElementById(containerid.concat("clipboard")).style.display = "none";
    // alert("Text has been copied, now paste in the text-area")
  }
}

// let observer = new IntersectionObserver(entries => {
//   console.log(entries);
//   if (entries[0].boundingClientRect.y < 0) {
//     $("#startBtn").fadeIn(200);
//   } else {
//     console.log("Not past 100pt");
//     $("#startBtn").fadeOut(200);
//   }
// });
// observer.observe(document.querySelector("#pixel-to-watch"));

var colorImageSources = ["assets/img/colordemo3.png", "assets/img/colordemo2.png", "assets/img/colordemo1.png"]

var colorIDX = 0;
setInterval (function(){
  if (colorIDX === colorImageSources.length) {
    colorIDX = 0;
  }
  document.getElementById("imgRotateColors").src = colorImageSources[colorIDX];
  colorIDX++;
} , 700);

var offsetTop = 10;

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();
  if(scrollTop > offsetTop){
    console.log("faffle")
    $("#navcity").css({ "box-shadow":'0 0 7px 5px rgba(100, 100, 100, 0.15)'});
  }
  if (scrollTop < offsetTop){
    console.log("not faffle")
    $("#navcity").css({ "box-shadow":'0 0 7px 5px rgba(100, 100, 100, 0.0)'});
  }
});


var imageSources = ["assets/img/demo2.gif", "assets/img/demo3.gif", "assets/img/demo4.gif", "assets/img/demo1.gif"]

var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("imgRotate").src = imageSources[index];
  index++;
} , 1000);
