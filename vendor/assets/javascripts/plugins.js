/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);




/**
 * jQuery.LocalScroll - Animated scrolling navigation, using anchors.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 3/11/2009
 * @author Ariel Flesler
 * @version 1.2.7
 **/
;(function($){var l=location.href.replace(/#.*/,'');var g=$.localScroll=function(a){$('body').localScroll(a)};g.defaults={duration:1e3,axis:'y',event:'click',stop:true,target:window,reset:true};g.hash=function(a){if(location.hash){a=$.extend({},g.defaults,a);a.hash=false;if(a.reset){var e=a.duration;delete a.duration;$(a.target).scrollTo(0,a);a.duration=e}i(0,location,a)}};$.fn.localScroll=function(b){b=$.extend({},g.defaults,b);return b.lazy?this.bind(b.event,function(a){var e=$([a.target,a.target.parentNode]).filter(d)[0];if(e)i(a,e,b)}):this.find('a,area').filter(d).bind(b.event,function(a){i(a,this,b)}).end().end();function d(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')==l&&(!b.filter||$(this).is(b.filter))}};function i(a,e,b){var d=e.hash.slice(1),f=document.getElementById(d)||document.getElementsByName(d)[0];if(!f)return;if(a)a.preventDefault();var h=$(b.target);if(b.lock&&h.is(':animated')||b.onBefore&&b.onBefore.call(b,a,f,h)===false)return;if(b.stop)h.stop(true);if(b.hash){var j=f.id==d?'id':'name',k=$('<a> </a>').attr(j,d).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});f[j]='';$('body').prepend(k);location=e.hash;k.remove();f[j]=d}h.scrollTo(f,b).trigger('notify.serialScroll',[f])}})(jQuery);





/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 * Copyright (c) 2010 Trevor Davis (http://trevordavis.net)
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://jquery.org/license
 * @version 0.7
 */
(function(e){e.fn.onePageNav=function(j){var g=e.extend({},e.fn.onePageNav.defaults,j),c={};c.sections={};c.bindNav=function(b,d,a){var f=b.parent(),h=b.attr("href"),i=e(window);if(!f.hasClass(a.currentClass)){a.begin&&a.begin();c.adjustNav(d,f,a.currentClass);i.unbind(".onePageNav");e.scrollTo(h,a.scrollSpeed,{offset:{top:-a.scrollOffset},onAfter:function(){if(a.changeHash)window.location.hash=h;i.bind("scroll.onePageNav",function(){c.scrollChange(d,a)});a.end&&a.end()}})}};c.adjustNav=function(b,
d,a){b.find("."+a).removeClass(a);d.addClass(a)};c.getPositions=function(b,d){b.find("a").each(function(){var a=e(this).attr("href"),f=e(a).offset();f=f.top;c.sections[a.substr(1)]=Math.round(f)-d.scrollOffset})};c.getSection=function(b){var d="",a=Math.round(e(window).height()/2);for(var f in c.sections)if(c.sections[f]-a<b)d=f;return d};c.scrollChange=function(b,d){c.getPositions(b,d);var a=e(window).scrollTop();a=c.getSection(a);a!==""&&c.adjustNav(b,b.find("a[href=#"+a+"]").parent(),d.currentClass)};
c.init=function(b,d){var a=false;b.find("a").bind("click",function(f){c.bindNav(e(this),b,d);f.preventDefault()});c.getPositions(b,d);e(window).bind("scroll.onePageNav",function(){a=true});setInterval(function(){if(a){a=false;c.scrollChange(b,d)}},250)};return this.each(function(){var b=e(this),d=e.meta?e.extend({},g,b.data()):g;c.init(b,d)})};e.fn.onePageNav.defaults={currentClass:"current",changeHash:false,scrollSpeed:500,scrollOffset:0,begin:false,end:false}})(jQuery);




// jquery.tweet.js - See http://tweet.seaofclouds.com/ or https://github.com/seaofclouds/tweet for more info
// Copyright (c) 2008-2011 Todd Matthews & Steve Purcell
(function(a){if(typeof define==="function"&&define.amd)define(["jquery"],a);else a(jQuery)})(function(a){a.fn.tweet=function(b){function n(b){var d={};d.item=b;d.source=b.source;d.screen_name=b.from_user||b.user.screen_name;d.avatar_size=c.avatar_size;d.avatar_url=m(b,document.location.protocol==="https:");d.retweet=typeof b.retweeted_status!="undefined";d.tweet_time=i(b.created_at);d.join_text=c.join_text=="auto"?k(b.text):c.join_text;d.tweet_id=b.id_str;d.twitter_base="http://"+c.twitter_url+"/";d.user_url=d.twitter_base+d.screen_name;d.tweet_url=d.user_url+"/status/"+d.tweet_id;d.reply_url=d.twitter_base+"intent/tweet?in_reply_to="+d.tweet_id;d.retweet_url=d.twitter_base+"intent/retweet?tweet_id="+d.tweet_id;d.favorite_url=d.twitter_base+"intent/favorite?tweet_id="+d.tweet_id;d.retweeted_screen_name=d.retweet&&b.retweeted_status.user.screen_name;d.tweet_relative_time=j(d.tweet_time);d.entities=b.entities?(b.entities.urls||[]).concat(b.entities.media||[]):[];d.tweet_raw_text=d.retweet?"RT @"+d.retweeted_screen_name+" "+b.retweeted_status.text:b.text;d.tweet_text=a([h(d.tweet_raw_text,d.entities)]).linkUser().linkHash()[0];d.tweet_text_fancy=a([d.tweet_text]).makeHeart().capAwesome().capEpic()[0];d.user=e('<a class="tweet_user" href="{user_url}">{screen_name}</a>',d);d.join=c.join_text?e(' <span class="tweet_join">{join_text}</span> ',d):" ";d.avatar=d.avatar_size?e('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>',d):"";d.time=e('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>',d);d.text=e('<span class="tweet_text">{tweet_text_fancy}</span>',d);d.reply_action=e('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>',d);d.retweet_action=e('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>',d);d.favorite_action=e('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>',d);return d}function m(a,b){if(b){return"user"in a?a.user.profile_image_url_https:m(a,false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//,"https://s3.amazonaws.com/twitter_production/")}else{return a.profile_image_url||a.user.profile_image_url}}function l(){var a="https:"==document.location.protocol?"https:":"http:";var b=c.fetch===null?c.count:c.fetch;var d="&include_entities=1&callback=?";if(c.list){return a+"//"+c.twitter_api_url+"/1/"+c.username[0]+"/lists/"+c.list+"/statuses.json?page="+c.page+"&per_page="+b+d}else if(c.favorites){return a+"//"+c.twitter_api_url+"/favorites/"+c.username[0]+".json?page="+c.page+"&count="+b+d}else if(c.query===null&&c.username.length==1){return a+"//"+c.twitter_api_url+"/1/statuses/user_timeline.json?screen_name="+c.username[0]+"&count="+b+(c.retweets?"&include_rts=1":"")+"&page="+c.page+d}else{var e=c.query||"from:"+c.username.join(" OR from:");return a+"//"+c.twitter_search_url+"/search.json?&q="+encodeURIComponent(e)+"&rpp="+b+"&page="+c.page+d}}function k(a){if(a.match(/^(@([A-Za-z0-9-_]+)) .*/i)){return c.auto_join_text_reply}else if(a.match(d)){return c.auto_join_text_url}else if(a.match(/^((\w+ed)|just) .*/im)){return c.auto_join_text_ed}else if(a.match(/^(\w*ing) .*/i)){return c.auto_join_text_ing}else{return c.auto_join_text_default}}function j(a){var b=arguments.length>1?arguments[1]:new Date;var c=parseInt((b.getTime()-a)/1e3,10);var d="";if(c<1){d="just now"}else if(c<60){d=c+" seconds ago"}else if(c<120){d="a minute ago"}else if(c<45*60){d=parseInt(c/60,10).toString()+" minutes ago"}else if(c<2*60*60){d="an hour ago"}else if(c<24*60*60){d=""+parseInt(c/3600,10).toString()+" hours ago"}else if(c<48*60*60){d="a day ago"}else{d=parseInt(c/86400,10).toString()+" days ago"}return"about "+d}function i(a){return Date.parse(a.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i,"$1,$2$4$3"))}function h(a,b){return a.replace(d,function(a){var c=/^[a-z]+:/i.test(a)?a:"http://"+a;var d=a;for(var e=0;e<b.length;++e){var f=b[e];if(f.url==c&&f.expanded_url){c=f.expanded_url;d=f.display_url;break}}return'<a href="'+g(c)+'">'+g(d)+"</a>"})}function g(a){return a.replace(/</g,"<").replace(/>/g,"^>")}function f(b,c){return function(){var d=[];this.each(function(){d.push(this.replace(b,c))});return a(d)}}function e(a,b){if(typeof a==="string"){var c=a;for(var d in b){var e=b[d];c=c.replace(new RegExp("{"+d+"}","g"),e===null?"":e)}return c}else return a(b)}var c=a.extend({username:null,list:null,favorites:false,query:null,avatar_size:null,count:3,fetch:null,page:1,retweets:true,intro_text:null,outro_text:null,join_text:null,auto_join_text_default:"i said,",auto_join_text_ed:"i",auto_join_text_ing:"i am",auto_join_text_reply:"i replied to",auto_join_text_url:"i was looking at",loading_text:null,refresh_interval:null,twitter_url:"twitter.com",twitter_api_url:"api.twitter.com",twitter_search_url:"search.twitter.com",template:"{avatar}{time}{join}{text}",comparator:function(a,b){return b["tweet_time"]-a["tweet_time"]},filter:function(a){return true}},b);var d=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/gi;a.extend({tweet:{t:e}});a.fn.extend({linkUser:f(/(^|[\W])@(\w+)/gi,'$1@<a href="http://'+c.twitter_url+'/$2">$2</a>'),linkHash:f(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi,' <a href="http://'+c.twitter_search_url+"/search?q=&tag=$1&lang=all"+(c.username&&c.username.length==1&&!c.list?"&from="+c.username.join("%2BOR%2B"):"")+'">#$1</a>'),capAwesome:f(/\b(awesome)\b/gi,'<span class="awesome">$1</span>'),capEpic:f(/\b(epic)\b/gi,'<span class="epic">$1</span>'),makeHeart:f(/(<)+[3]/gi,"<tt class='heart'>&#x2665;</tt>")});return this.each(function(b,d){var f=a('<ul class="tweet_list">');var g='<p class="tweet_intro">'+c.intro_text+"</p>";var h='<p class="tweet_outro">'+c.outro_text+"</p>";var i=a('<p class="loading">'+c.loading_text+"</p>");if(c.username&&typeof c.username=="string"){c.username=[c.username]}a(d).unbind("tweet:load").bind("tweet:load",function(){if(c.loading_text)a(d).empty().append(i);a.getJSON(l(),function(b){a(d).empty().append(f);if(c.intro_text)f.before(g);f.empty();var i=a.map(b.results||b,n);i=a.grep(i,c.filter).sort(c.comparator).slice(0,c.count);f.append(a.map(i,function(a){return"<li>"+e(c.template,a)+"</li>"}).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");if(c.outro_text)f.after(h);a(d).trigger("loaded").trigger(i.length===0?"empty":"full");if(c.refresh_interval){window.setTimeout(function(){a(d).trigger("tweet:load")},1e3*c.refresh_interval)}})}).trigger("tweet:load")})}})
