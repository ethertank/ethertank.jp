/*
 * jQuery_DropShadowText.js Varsion 0.0.1 ( Modify from jQdrop.js )
 *
 * Copyright (c) 2012 ethertank.jp
 * Licensed under the MIT
 * jQuery required (tested on 1.7.1)
 * $Date: 2012-02-06 18:50
 *
 *    jQdrop.js
 *
 *    Copyright (c) 2008 nori (norimania@gmail.com)
 *    http://moto-mono.net
 *    jQuery required (tested on 1.2.6)
 *    $Date: 2008-09-19 22:00
 */

(function($){jQuery.fn.jQ_dropShadowText=function(options){var _d,c=jQuery.extend({color:"#999",top:"0.125em",left:"0.125em"},options);$(this).each(function(){var txt=$(this).html(),d=document.createElement("span");d.className="dropShadowText";$(d).html(txt).css({color:c.color,position:"absolute",top:c.top,left:c.left,zIndex:-1,fontWeight:this.style.fontWeight});(c&&c.left)?$(d).css("right","-"+c.left):$(d).css("right","-0.1em");if($(d).children().length>0){$(d).children().css({color:c.color})}$(this).css({position:"relative",display:($(this).css("display")==="inline")?"inline-block":"",zIndex:1}).prepend(d)})}})(jQuery);
