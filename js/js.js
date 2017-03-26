$(document).ready(function(){
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
            duration:1500,
            hash:true,
            onBefore:function( e, anchor, $target ){
                    // The 'this' is the settings object, can be modified
            },
            onAfter:function( anchor, settings ){
                    // The 'this' contains the scrolled element (#content)
            }
        });
	});
});