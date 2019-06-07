$('.owl-one').owlCarousel({
	 autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    loop:true,
    margin:10,
    nav:true,
	
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('.owl-two').owlCarousel({
	loop:true,
    margin: 0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
