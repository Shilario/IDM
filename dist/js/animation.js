!function(){for(var e,i=function(){},s=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],n=s.length,a=window.console=window.console||{};n--;)a[e=s[n]]||(a[e]=i)}(),jQuery(document).ready(function(e){var s,n,a=2500,t=3800,d=t-3e3,r=50,l=150,o=500,c=o+800,p=600,h=1500;function u(i){var s=w(i);if(i.parents(".cd-headline").hasClass("type")){var n=i.parent(".cd-words-wrapper");n.addClass("selected").removeClass("waiting"),setTimeout(function(){n.removeClass("selected"),i.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},o),setTimeout(function(){f(s,l)},c)}else if(i.parents(".cd-headline").hasClass("letters")){var h=i.children("i").length>=s.children("i").length;!function i(s,n,t,d){s.removeClass("in").addClass("out");s.is(":last-child")?t&&setTimeout(function(){u(w(n))},a):setTimeout(function(){i(s.next(),n,t,d)},d);if(s.is(":last-child")&&e("html").hasClass("no-csstransitions")){var r=w(n);C(n,r)}}(i.find("i").eq(0),i,h,r),m(s.find("i").eq(0),s,h,r)}else i.parents(".cd-headline").hasClass("clip")?i.parents(".cd-words-wrapper").animate({width:"2px"},p,function(){C(i,s),f(s)}):i.parents(".cd-headline").hasClass("loading-bar")?(i.parents(".cd-words-wrapper").removeClass("is-loading"),C(i,s),setTimeout(function(){u(s)},t),setTimeout(function(){i.parents(".cd-words-wrapper").addClass("is-loading")},d)):(C(i,s),setTimeout(function(){u(s)},a))}function f(e,i){e.parents(".cd-headline").hasClass("type")?(m(e.find("i").eq(0),e,!1,i),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},p,function(){setTimeout(function(){u(e)},h)})}function m(e,i,s,n){e.addClass("in").removeClass("out"),e.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),s||setTimeout(function(){u(i)},a)):setTimeout(function(){m(e.next(),i,s,n)},n)}function w(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function C(e,i){e.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}e(".cd-headline.letters").find("b").each(function(){var s=e(this),n=s.text().split(""),a=s.hasClass("is-visible");for(i in n)s.parents(".rotate-2").length>0&&(n[i]="<em>"+n[i]+"</em>"),n[i]=a?'<i class="in">'+n[i]+"</i>":"<i>"+n[i]+"</i>";var t=n.join("");s.html(t).css("opacity",1)}),s=e(".cd-headline"),n=a,s.each(function(){var i=e(this);if(i.hasClass("loading-bar"))n=t,setTimeout(function(){i.find(".cd-words-wrapper").addClass("is-loading")},d);else if(i.hasClass("clip")){var s=i.find(".cd-words-wrapper"),a=s.width()+10;s.css("width",a)}else if(!i.hasClass("type")){var r=i.find(".cd-words-wrapper b"),l=0;r.each(function(){var i=e(this).width();i>l&&(l=i)}),i.find(".cd-words-wrapper").css("width",l)}setTimeout(function(){u(i.find(".is-visible").eq(0))},n)})});