
$(document).ready(function() {
    var typed = new Typed ('#animated', {
        strings: ['websites','web apps','web things'],
        typeSpeed: 150,
        backspeed: 150,
        loop: true
    })
    

    $("#search-icon").click(function() {
        $(".nav").toggleClass("search");
        $(".nav").toggleClass("no-search");
        $(".search-input").toggleClass("search-active");
        });

    $('.menu-toggle').click(function(){
        $(".nav").toggleClass("mobile-nav");
        $(this).toggleClass("is-active");
    });

    var controller = new ScrollMagic.Controller;

    $(".cont2-first").each(function() {
        var Scene1 = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $(".cont2-second").each(function() {
        var Scene2 = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in1')
        .addTo(controller);
    });

    $('.skills-divs').each(function(){
        var Scene6 = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $('.progress-title').each(function(){
        var Scene7 = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $('.languages').each(function() {
        var scene19 = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false,
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    
    

    var scene16 = new ScrollMagic.Scene({
        triggerElement: 'h6',
        reverse: false
    })
    .setClassToggle('h6', 'fade-in')
    .addTo(controller);


    $(".cont5-divs").each(function() {
        var Scene3 = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $('.inputs').each(function() {
        var scene16 = new ScrollMagic.Scene({
            triggerElement: this,
            reverse: false
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $(".container6-divs").each(function() {
        var Scene4 = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in1')
        .addTo(controller);
    });

    var scene17 = new ScrollMagic.Scene({
        triggerElement: '.contact-par',
        reverse: false
    })
    .setClassToggle('.contact-par', 'fade-in')
    .addTo(controller);

    var scene5 = new ScrollMagic.Scene({
        triggerElement : "#img-div1",
        reverse : false
    })
    .setClassToggle("#img-div1", "fade-in")
    .addTo(controller);

    $(".about-text").each(function() {
        var Scene6 = new ScrollMagic.Scene({
            triggerElement : "#container2-text",
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    $(".port-p").each(function() {
        var scene18 = new ScrollMagic.Scene({
            triggerElement : this,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    })

    

    $(".contact-img").each(function() {
        var Scene7 = new ScrollMagic.Scene({
            triggerElement : this,
            triggerHook: 0.96,
            reverse : false
            
        })
        .setClassToggle(this, 'fade-in')
        .addTo(controller);
    });

    var swat = document.getElementById("switch");
        var img = document.getElementById("image");
        swat.onclick = function() {
            document.body.classList.toggle("dark-theme");
            img.style.transform = "translateX(50px)"
            if(document.body.classList.contains("dark-theme")) {
                img.style.transform = "translateX(50px)";
                img.src= "images/moon.png";
            }else {
                img.style.transform = "translateX(0px)";
                img.src= "images/sun.png";
            }
        }

    


    
    $("#get-vpn2").on("click", () => {
        $("html,body").animate({scrollTop: 3300}, 500);
    });

    $('#my-button').on('click', () => {
        $('html,body').animate({scrollTop: 3300}, 500);
    });

    $("#nav1").on("click", () => {
        $("html,body").animate({scrollTop: 0}, 500);
    });

    $("#nav2").on("click", () => {
        $("html,body").animate({scrollTop: 830}, 500);
    });

    $("#nav3").on("click", () => {
        $("html,body").animate({scrollTop: 1900}, 500);
    });

    $("#nav4").on("click", () => {
        $("html,body").animate({scrollTop: 3100}, 500);
    });

    if (screen.width < 600) {
        $(".nav-a").on("click",()=> {
            $(".burger").click();
        })
    }

    var coverDiv1 = $("#cover-div1");
    var coverDiv2 = $("#cover-div2");
    var coverDiv3 = $("#cover-div3");
    var coverDiv4 = $("#cover-div4");
    var coverDiv5 = $("#cover-div5");
    var coverDiv6 = $("#cover-div6");
    var coverDivs = $(".cover-div");
    var coverp = $(".cover-p");
    var portButton = $('.portfolio-button')

    const slideEvent1 = e => {
        e.stopPropagation();
        coverDiv1.css("opacity", "0.9");
        coverDiv1.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };

    const slideEvent2 = e => {
        e.stopPropagation();
        coverDiv2.css("opacity", "0.9");
        coverDiv2.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };

    const slideEvent3 = g => {
        g.stopPropagation();
        coverDiv3.css("opacity", "0.9");
        coverDiv3.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };

    
    const slideEvent4 = g => {
        g.stopPropagation();
        coverDiv4.css("opacity", "0.9");
        coverDiv4.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };

    const slideEvent5 = g => {
        g.stopPropagation();
        coverDiv5.css("opacity", "0.9");
        coverDiv5.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };

    const slideEvent6 = g => {
        g.stopPropagation();
        coverDiv6.css("opacity", "0.9");
        coverDiv6.css("z-index", "1");
        coverp.css("transform", "translateY(0)");
        portButton.css('transform', "translate(0)");
    };
    

    const undoEvent1 = () => {
        coverDivs.css("opacity", "0");
        coverDivs.css("z-index", "-1");
        coverp.css("transform", "translateY(-30px)")
        portButton.css("transform", "translateY(30px)")
    };
    
    

    $("#cont5-img1").click(slideEvent1);
    $("#cont5-img2").click(slideEvent2);
    $("#cont5-img3").click(slideEvent3);
    $("#cont5-img4").click(slideEvent4);
    $("#cont5-divs5").click(slideEvent5);
    $("#cont5-divs6").click(slideEvent6);
    $(document).on("click", undoEvent1);

    
});