$(document).ready(function(){
	jQuery(function( $ ){
        $.localScroll.defaults.axis = 'yx';
        $.localScroll.hash({
            target: '#nav', 
            queue:true,	
            duration:1000,
        });
        
        $.localScroll({
            target: '#nav', 
            queue:true,
            duration:1500,
            hash:false,
            onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
            },
            onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
            }
        });
	});
    $('.nav').localScroll();
});