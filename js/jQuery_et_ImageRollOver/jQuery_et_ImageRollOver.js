/*
 * jQuery_et_RollOverImage.js
 *
 * Varsion: 0.0.2
 * Date: 2012-02-14 17:30 
 * Copyright (c) 2012 ethertank.jp
 * Licensed under the MIT
 *
 * jQuery required (tested on 1.7.1)
 *
 */

(function(a){jQuery.fn.jQuery_et_imagerollover=function(c){var b=c||"_on";a(this).not('[src*="'+b+'."]').each(function(){var e=a(this).attr("src"),d=e.substr(0,e.lastIndexOf("."))+b+e.substring(e.lastIndexOf("."),e.length);a("<img>").attr("src",d);a(this).hover(function(){a(this).attr("src",d)},function(){a(this).attr("src",e)})})}})(jQuery);