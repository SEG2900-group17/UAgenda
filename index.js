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

gsap.registerPlugin(ScrollTrigger);

gsap.from("#home", {duration: .5, opacity: .5, clearProps: "all"})
gsap.from(".main-logo", {duration: 1.5, opacity: 0, y: 150, clearProps: "all"});
gsap.from(".main-text", {duration: 1.5, opacity: 0, y: 150, clearProps: "all"});
gsap.from(".secondary-text", {duration: 1.5, opacity: 0, y: 150, clearProps: "all"});
gsap.from(".button-container", {duration: 1.5, opacity: 0, y: 150, clearProps: "all"});

gsap.from(".animation-feature-1", {scrollTrigger: ".animation-feature-1", opacity: 0, x: -100, duration: .5, clearProps: "all"})
gsap.from(".animation-feature-2", {scrollTrigger: ".animation-feature-2", opacity: 0, x: -100, duration: .5, delay: .5, clearProps: "all"})
gsap.from(".animation-feature-3", {scrollTrigger: ".animation-feature-3", opacity: 0, x: -100, duration: .5, delay: 1, clearProps: "all"})
gsap.from(".animation-feature-4", {scrollTrigger: ".animation-feature-4", opacity: 0, x: -100, duration: .5, delay: 1.5, clearProps: "all"})

gsap.from(".animation-pricing-1", {scrollTrigger: ".animation-pricing-1", opacity: 0, y: 50, duration: .5, clearProps: "all"})
gsap.from(".animation-pricing-2", {scrollTrigger: ".animation-pricing-2", opacity: 0, y: 50, duration: .5, delay: .5, clearProps: "all"})
gsap.from(".animation-pricing-3", {scrollTrigger: ".animation-pricing-3", opacity: 0, y: 50, duration: .5, delay: 1, clearProps: "all"})

gsap.from(".animation-portrait-1", {scrollTrigger: ".animation-portrait-1", opacity: 0, scale: 0, duration: .5, clearProps: "all"})
gsap.from(".animation-portrait-2", {scrollTrigger: ".animation-portrait-2", opacity: 0, scale: 0, duration: .5, delay: .25, clearProps: "all"})
gsap.from(".animation-portrait-3", {scrollTrigger: ".animation-portrait-3", opacity: 0, scale: 0, duration: .5, delay: .5, clearProps: "all"})
gsap.from(".animation-portrait-4", {scrollTrigger: ".animation-portrait-4", opacity: 0, scale: 0, duration: .5, delay: .75, clearProps: "all"})
gsap.from(".animation-portrait-5", {scrollTrigger: ".animation-portrait-5", opacity: 0, scale: 0, duration: .5, delay: 1, clearProps: "all"})
gsap.from(".animation-portrait-6", {scrollTrigger: ".animation-portrait-6", opacity: 0, scale: 0, duration: .5, delay: 1.25, clearProps: "all"})
gsap.from(".animation-portrait-7", {scrollTrigger: ".animation-portrait-7", opacity: 0, scale: 0, duration: .5, delay: 1.5, clearProps: "all"})