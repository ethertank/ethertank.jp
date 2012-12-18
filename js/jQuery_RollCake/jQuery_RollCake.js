/*
 * jQuery_RollCake.js
 *
 * Varsion: 0.0.1
 * Date: 2012-02-23 20:30 
 * Copyright (c) 2012 ethertank.jp
 * Licensed under the MIT
 *
 * jQuery required (tested on 1.7.1)
 *
 */

;(function(a){jQuery.fn.jQuery_RollCake=function(c){var b=c||"_on";a(this).each(function(){var f=a(this),e=f[0].tagName.toUpperCase()=="IMG"?f:f.find("img"),g=e.attr("src"),d=g.substring(0,g.lastIndexOf("."))+b+g.substring(g.lastIndexOf("."),g[g.length]);a("<img>").attr("src",d);f.bind("mouseenter focus",function(){e.not('[src*="'+b+'."]').attr("src",d);});f.bind("mouseleave blur",function(){e.attr("src",g);});});};})(jQuery);