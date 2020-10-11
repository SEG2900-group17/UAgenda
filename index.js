$(document).ready(function() {

    let headerHeight = $(".navbar").height() + 20; // Get header height

    // Remove the white link and add a new one
    $(".nav-link").on("click", function(){
        $(".nav-link.active").removeClass("active");
        $(this).addClass("active");

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname)
        {

            var target = $(this.hash),
                headerHeight = $(".navbar").height() + 20; // Get header height
            
            if (target.length)
            {
                $('html,body').animate({
                    scrollTop: target.offset().top - headerHeight
                }, 500);
                return false;
            }
        }
    });
});