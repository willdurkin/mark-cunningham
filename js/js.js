$(document).ready(function(){

    $(function() {
        $("img.item").lazyload();
    });

// LOCALSCROLL

	jQuery(function( $ ){
        $.localScroll.defaults.axis = 'yx';
        $.localScroll.hash({
            target: '#header', 
            queue:true,	
            duration:1000,
        });
        
        $.localScroll({
            target: '#header', 
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
            resizeContainer: false,
            filter: '.mv'
            // sortBy: [ 'order' ]
        });
    });

// BUTTONS

    // var closeMenu = function() {
    //     $('.nav').animate({height: '100%' });
    //     $('.sub-nav').slideToggle();
    // }

    var screenWidth = $(window).width();
    var subNavClosed = false;


    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
        // $('#logo').toggleClass('fixed');
        $('.nav').animate({height: 'toggle'});
    });

    $('#project-link2').click(function (event) {
        event.preventDefault();
        $('.sub-nav2').slideToggle();
    });

// nav-icon

    $('.button').click(function() {
        if(screenWidth <= 876){
            $('#nav-icon3').toggleClass('open');
            $('.nav').animate({height: 'toggle'});
            $('.sub-nav').slideToggle();
            $('#header').animate({height: '55px' }); 
        subNavClosed = true;
        }
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        console.log('hi');
    });

    $('.project-link1').click(function (event) {
        event.preventDefault();
        if (screenWidth <= 876) {
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

            $('.sub-nav').slideToggle();
        }
    }); 

    $('.all-button').click(function() {
        $content.isotope({ 
            filter: '*',  
            sortBy: 'original-order'
        });
    });


    $('.gw-button').click(function() {
        $content.isotope({
            filter: '.gw',
            // sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
            console.log('hide');
        }
        // $content.css({'margin-top':"60px"})
    });

    $('.fif-button').click(function() {
        $content.isotope({
            filter: '.fif',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.nc-button').click(function() {
        $content.isotope({
            filter: '.nc',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.sag-button').click(function() {
        $content.isotope({
            filter: '.sag',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.li-button').click(function() {
        $content.isotope({
            filter: '.li',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.sr-button').click(function() {
        $content.isotope({
            filter: '.sr',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.un-button').click(function() {
        $content.isotope({
            filter: '.un',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.wa-button').click(function() {
        $content.isotope({
            filter: '.wa',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.mv-button').click(function() {
        $content.isotope({
            filter: '.mv',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.sh-button').click(function() {
        $content.isotope({
            filter: '.sh',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.mf-button').click(function() {
        $content.isotope({
            filter: '.mf',
            sortBy: [ 'order' ]
        });
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.wv-button').click(function() {
        $content.isotope({
            filter: '.wv',
            sortBy: [ 'order' ]
        });
        $('html, body').animate({
                  scrollTop: $("#header")
              }, 100);
        if(screenWidth > 600) {
            
            $('#arrow').hide();    
        }
    });

    $('.mad-button').click(function() {
        $content.isotope({
            filter: '.mad',
            sortBy: [ 'order' ]
        });
        $('html, body').animate({
                  scrollTop: $("#header")
              }, 100);
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


});