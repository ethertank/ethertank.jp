/*
 * jQuery_Simasimaizer.js
 *
 * Varsion: 0.0.1
 * Date: 2012-02-07 18:30 
 * Copyright (c) 2012 ethertank.jp
 * Licensed under the MIT
 *
 * jQuery required (tested on 1.7.1)
 *
 */

(function($){jQuery.fn.jQ_Simasimaizer=function(options){var o=jQuery.extend({prefix:"",oddeven:true,step:2},options),s=o.step,p=o.prefix,w=o.oddeven;if(s===2&&w===true){$(this).each(function(i){i%2?$(this).addClass(p+"even"):$(this).addClass(p+"odd")})}else{$(this).each(function(i){$(this).addClass(p+(i%s+1))})}}})(jQuery);