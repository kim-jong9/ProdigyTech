$(document).ready(function(){
    $("body").append('<div class="scrollToTop"><i class="fas fa-chevron-up"></i></div>');
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });


    //Counters
    $('.counter-number').counterUp({
        delay: 1,
        time: 500
    });

    //video play/pause on click
    $('.play-icon').attr("src", "/themes/prod2018/static/assets/icons/play-ico.svg");
      var playing = false;

    $('#play-video-btn').click(function() {
        if (playing == false) {
            document.getElementById('intro-video').play();
            playing = true;
            $('#play-video-btn').addClass("ripple-block-opacity");
            $('.play-icon').attr("src", "/themes/prod2018/static/assets/icons/pause-ico.svg");
        }else{
            document.getElementById('intro-video').pause();
             playing = false;
            $('#play-video-btn').removeClass("ripple-block-opacity");
            $('.play-icon').attr("src", "/themes/prod2018/static/assets/icons/play-ico.svg");
        }
    });

    // Search filters
    $("#filterInput").on("keyup", function() {

        $(".op-card-wrapper:hidden").slice(0, 500);
        $("#loadMore").hide();


        var value = $(this).val().toLowerCase();
        $("#opList div").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
    });

    // cards reveal
    $('.teaser-card-front').click(function(e) {
        var card=$(this).attr('id');
        var idb="b"+card.substring(1);
        $("#"+idb).addClass('card-reveal');
    });
    $('.teaser-card-content').click(function(e) {
        $(this).removeClass('card-reveal');
    });

    // Glassdor Icon switch
    $( '#glassdoor-icon' ).attr("src","/themes/prod2018/static/assets/icons/glassdoorlogo_off.png");
    $("#glassdoor-icon").hover(function () {
        $('#glassdoor-icon').attr("src", "/themes/prod2018/static/assets/icons/glassdoorlogo_on.png");
    }, function () {
        $( '#glassdoor-icon' ).attr("src","/themes/prod2018/static/assets/icons/glassdoorlogo_off.png");
    })

});

// Toggle class for active language button
$(".secondary-nav .btn-smart-language").click(function(e){
	e.preventDefault();
	$(".btn-smart-language").toggleClass("active");
});

// Open and close overlay navigation
function openNav() {
    document.getElementById("smart-mobile-nav").style.height = "100%";
}

function closeNav() {
    document.getElementById("smart-mobile-nav").style.height = "0%";
}
$('#main-overlay').click(function(){
    closeNav_big();
    $("#main-overlay").removeClass("show");
});



/* Set the width of the side navigation to 360px and the left margin of the page content to 360px and add a black background color to body */
function openNav_big() {
    document.getElementById("smart-nav-big").style.width = "360px";
    document.getElementById("mainContent").style.marginRight = "360px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav_big() {
    document.getElementById("smart-nav-big").style.width = "0";
    document.getElementById("mainContent").style.marginRight = "0";
  }

// Show and hide main overlay div when open side navigation

$("#open-btn-big").click(function(){
    $("#main-overlay").addClass("show");
});

$(".closebtn-big").click(function(){
    $("#main-overlay").removeClass("show");
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').addClass('nav-up');
        $('.bottom-tab-nav').addClass('nav-down');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up');
            $('.bottom-tab-nav').removeClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}

// Bounce animation for scroll
// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function() {
  var arrow = $(".arrow");
  
  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);

// slick carousel testimonials
$('.testimonials-slider').slick({
  respondeTo: 'window',
  mobileFirst: true,
  dots: true,
  customPaging: function(slider, i) {
    return '<span class="dot"></span>';
  },
  // prevArrow: '<span><i class="fas fa-chevron-left"></i></span>',
  // nextArrow: '<span><i class="fas fa-chevron-right"></i></span>',
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '360px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '200px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

// Contacts tabs script
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Validate fileName on upload to modify the Upload CV File text
$('#cvFile').on('change',function(){
    // Replace by Filename on upload
    var fileName = $(this).val();
    var fileName = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.length);
    $('.custom-file-label').html(fileName);
});
$('#profileFile').on('change',function(){
    // Replace by Filename on upload
    var fileName = $(this).val();
    var fileName = fileName.substring(fileName.lastIndexOf("\\") + 1, fileName.length);
    $('.custom-file-label').html(fileName);
});

// Load More Opportunities
$(function () {
    $(".op-card-wrapper").slice(0, 6).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".op-card-wrapper:hidden").slice(0, 500).fadeIn('slow');
        if ($(".op-card-wrapper:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        /*
        avoid scroll
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
        */
        $("#loadMore").hide();
    });
});

// News Filters
$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
}
$(this).addClass("active");

// Load More News
$(function () {
    $(".news-card").slice(0, 6).show();
    $("#loadMoreNews").on('click', function (e) {
        e.preventDefault();
        $(".news-card:hidden").slice(0, 100).fadeIn('slow');
        if ($(".news-card:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        /*
        avoid scroll
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
        */
        $("#loadMoreNews").hide();
    });
});

$(window).scroll(function(){

    if (!$('article').length) return; // Check if element exists
    var articleLength = $('article').height();
    var top = $('article').offset().top;
    var scroll = $(window).scrollTop() - $('article').offset().top;
    var progress = (scroll / articleLength) * 100;

    if (progress >= 3) {
        $('.progressContainer').addClass('fixed');
        $('.progress').show();
    }

    else {
        $('.progressContainer').removeClass('fixed');
        $('.progress').hide();
    }

    $('.progress').css('width',(progress + 5 )+ '%');
 
    });


// Values Smart
$(function() {
    $("#simplicidade-btn").click(function(){
        $("#simplicidade-content").slideToggle("slow");
        $("#motivacao-content,#adaptabilidade-content,#relacoes-content,#talento-content").slideUp('slow');
    });
    $("#motivacao-btn").click(function(){
        $("#motivacao-content").slideToggle("slow");
        $("#simplicidade-content,#adaptabilidade-content,#relacoes-content,#talento-content").slideUp('slow');
    });
    $("#adaptabilidade-btn").click(function(){
        $("#adaptabilidade-content").slideToggle("slow");
        $("#simplicidade-content,#motivacao-content,#relacoes-content,#talento-content").slideUp('slow');
    });
    $("#relacoes-btn").click(function(){
        $("#relacoes-content").slideToggle("slow");
        $("#simplicidade-content,#motivacao-content,#adaptabilidade-content,#talento-content").slideUp('slow');
    });
    $("#talento-btn").click(function(){
        $("#talento-content").slideToggle("slow");
        $("#simplicidade-content,#motivacao-content,#adaptabilidade-content,#relacoes-content").slideUp('slow');
    });
});
//accordion vertical (simplicidade,motivacao,adaptabilidade,relacoes,talento) click outside
$(window).click(function() {
  $("#simplicidade-content,#motivacao-content,#adaptabilidade-content,#relacoes-content,#talento-content").slideUp('slow');
});
//accordion vertical stop propagation (simplicidade,motivacao,adaptabilidade,relacoes,talento) 
$('.values-section-small').click(function(event){
    event.stopPropagation();
});

// Rotate arrow inside card header
$(".area_link").click(function(e){
   e.preventDefault();
   // console.log($(this));
   var parent = $(this).parent();
   var currentclass = $(this).attr("class");

   // Remove class from other classes
   $(".arrowStop").not(this).removeClass("arrowRotate");
   $(".arrowPrivacyStop").not(this).removeClass("arrowRotate");

   // add class to clicked children
   if (currentclass == "area_link collapsed") {

       parent.children(".arrowStop").addClass("arrowRotate");
       parent.children(".arrowPrivacyStop").addClass("arrowRotate");

   }

});

// Carousel About
$('#carouselSmart').carousel({
  interval: 4000
})

// Terms Txt inside modal
$(".showTerms").click(function(e){
    event.stopImmediatePropagation();
    $(".termsTxt").fadeIn("slow");
});

$(".closeTerms").click(function(e){
    event.stopImmediatePropagation();
    $(".termsTxt").fadeOut("slow");
});

// Search
$(".openSearch").click(function(){
    $("#smartSearch").fadeIn("slow");
});

$(".closeSearch").click(function(){
    $("#smartSearch").fadeOut("slow");
});

/**
 * Open all external links in a new window
 */
$(document).ready(function($) {
    $('a')
        .filter('[href^="http"], [href^="//"]')
        .not('[href*="' + window.location.host + '"]')
        .attr('rel', 'noopener noreferrer')
        .attr('target', '_blank');

    $('#modalLoginRegister').on('hide.bs.modal',function (){
        $('.op-form-auth').hide();
        $('#op-form-login').fadeIn();
    });
});
// Smooth scroll
$('#slidedown').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Auth actions
$(".auth-toggle").click(function(){

    $('.op-form-auth').hide();

});
$(".auth-toggle-register").click(function(){

    $('#op-form-register').fadeIn();

});
$(".auth-toggle-login2").click(function(){

    $('#op-form-login2').fadeIn();

});
$(".auth-toggle-recover").click(function(){

    $('#op-form-recover').fadeIn();

});

$(".auth-toggle-login").click(function(){

    $('#op-form-login').fadeIn();

});