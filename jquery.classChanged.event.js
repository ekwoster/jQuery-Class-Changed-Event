(function(){
    var originalAddClassMethod = jQuery.fn.addClass;
    var originalRemoveClassMethod = jQuery.fn.removeClass;
    jQuery.fn.addClass = function(){
        var result = originalAddClassMethod.apply( this, arguments );
        jQuery(this).trigger('classChanged');
        return result;
    }
    jQuery.fn.removeClass = function(){
        var result = originalRemoveClassMethod.apply( this, arguments );
        jQuery(this).trigger('classChanged');
        return result;
    }
})();