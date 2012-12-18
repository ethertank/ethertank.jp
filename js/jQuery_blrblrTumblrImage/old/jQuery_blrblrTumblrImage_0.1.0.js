/*
 * jQuery_blrblrTumblrImage.js
 *
 * Varsion: 0.1.0
 * PublishDate: 2012-03-03 23:30
 * LastUpdate : 2012-03-11 10:15
 * Copyright (c) 2012 ethertank.jp
 * Licensed under the MIT
 *
 * jQuery required (tested on 1.7.1)
 *
 */

;(function($,undefined){$.fn.blrblrTumblrImage=function(config){if(!config.username){alert("blrblrTumblr : username is required !");return false;}config=$.extend({start:"0",num:"10",interval:6000,speed:"slow"},config);var jsonp,jsonURL="http://"+config.username+".tumblr.com/api/read/json?type=photo",jsonParam="",wraps=$(this),interval=config.interval,speed=config.speed,htmlEsc=(function(map){var replaceStr=function(s){return map[s];};return function(str){return str.replace(/<|>|&|'|"/g,replaceStr);};})({"<":"&lt;",">":"&gt;","&":"&amp;","'":"&apos;",'"':"&quot;"});delete config.username;delete config.interval;delete config.speed;$(config).each(function(i){jsonParam+=$.param(this);});if(jsonParam.length){jsonURL+="&"+jsonParam;}$.ajax({url:jsonURL,dataType:"jsonp",timeout:5000,error:function(jqXHR,textStatus,errorThrown){wraps.html("<p><small>error</small></p>");},success:function(jsonData){json=jsonData;parse(json);}});function parse(j){$.each(j.posts,function(i,p){wraps.each(function(){var $this=$(this);$this.css("min-height","200px").append($("<a>").css("display","inline-block").attr("href",htmlEsc(p.url)).append($("<img>").attr("src",htmlEsc(p["photo-url-250"]))).hide()).find("a:first-child").slideDown(speed);});});initSlideShow();}function initSlideShow(){wraps.each(function(){var $this=$(this);var timer;function slideShow(){var a=$this.find("a"),f=a.eq(0),s=a.eq(1);f.slideUp(speed,function(){s.slideDown(speed);f.appendTo($this);});}function setTimer(){timer=setInterval(slideShow,interval);}function clearTimer(){clearInterval(timer);}$this.find("a").hover(clearTimer,setTimer);setTimer();});}};})(jQuery);