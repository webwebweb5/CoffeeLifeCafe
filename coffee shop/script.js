/*window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0);
});*/

$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .nav_lists').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

});

/*$(document).ready(function(){
    $('.menu-btn').click(function(){
        $('.navbar .nav_lists').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });
});*/