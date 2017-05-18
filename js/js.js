$(document).ready(function(){

    $(function() {
        $("img.item").lazyload();
    });

// LOCALSCROLL

	jQuery(function( $ ){
        $.localScroll.defaults.axis = 'yx';
        $.localScroll.hash({
            target: '#content', 
            queue:true,	
            duration:1000,
        });
        
        $.localScroll({
            target: '#content', 
            queue:true,
            duration:1000,
            hash:false,
            onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
            },
            onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
            }
        });
	});
    $.localScroll();

// init Isotope

    var $content = $('#content')

    $content.imagesLoaded(function(){
        $content.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            getSortData: {
              order: '[data-order]',
            },
            hiddenStyle: {
              opacity: 0,
            },
            visibleStyle: {
              opacity: 1,
            },
            transitionDuration: 1000,
            containerStyle: null,
            filter: '.gw',
            sortBy: [ 'order' ]
        });
    });

// BUTTONS

    var closeMenu = function() {
        $('.nav').animate({height: '100%' });
        $('.sub-nav').slideToggle();
    }

    var subNavClosed = false;

    $('#project-link1').click(function (event) {
        event.preventDefault();
        // if(subNavClosed){
        //     $('#header').animate({height: '100px' }); 
        //     subNavClosed = false;   
        // } else {
        //     $('#header').animate({height: '55px' });    
        //     subNavClosed = true;
        // }
        
        // $('#header').toggle(function() {
        //     $(this).animate({height:'100px'});
        // }, function() {
        //     $(this).animate({height:'55px'});
        // });
        // $('.sub-nav').slideToggle();
    }); 

    $('.all-button').click(function() {
        $content.isotope({ 
            filter: '*',  
            sortBy: 'original-order'
        });
    });

    $('.button').click(function() {
        var screenWidth = $(window).width();
        if(screenWidth > 600) {
            
            $('#arrow').fadeIn();
        }
        if(screenWidth <= 600){
            $('#nav-icon3').toggleClass('open');
            $('.nav').animate({height: 'toggle'});
        }
        // $('.sub-nav').slideToggle();
        // $('#header').animate({height: '55px' }); 
        subNavClosed = true;
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });

    $('.gw-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.gw',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
            console.log('hide');
        }
        // $content.css({'margin-top':"60px"})
    });

    $('.fif-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.fif',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.nc-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.nc',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.sag-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.sag',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.li-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.li',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.sr-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.sr',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.un-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.un',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.wa-button').click(function() {
        var screenWidth = $(window).width();
        $content.isotope({
            filter: '.wa',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    // filter items on button click

    // $('.filter-button-group').on( 'click', 'button', function() {
    //   var filterValue = $(this).attr('data-filter');
    //   $grid.isotope({ filter: filterValue });
    // });

    // $('.button-group').each( function( i, buttonGroup ) {
    //   var $buttonGroup = $( buttonGroup );
    //   $buttonGroup.on( 'click', 'button', function() {
    //     $buttonGroup.find('.is-checked').removeClass('is-checked');
    //     $( this ).addClass('is-checked');
    //   });
    // });

    $hamburger  = $('#hamburger');

    $('#nav-icon3').click(function(){
        $('.nav').animate({height: 'toggle'});
    });

    $('#project-link2').click(function (event) {
        event.preventDefault();
        $('.sub-nav2').slideToggle();
    });

// nav-icon
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });

});