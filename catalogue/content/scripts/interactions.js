//DO NOT MODIFY ↓
define([
    'jquery'
], function($) {
//DO NOT MODIFY ↑

	function initialize() {
		setEvents();
	}

	function setEvents() {
		$(masterStructure)
			.on("Framework:systemReady", function() {
				systemReady();
			})
			.on("Framework:pageLoaded", function() {
				pageLoaded();
			});
	}

	/* is called only once, when the Course has loaded*/
	function systemReady() {
		//console.log("Interactions:systemReady");
	}

	/* is called on every page load, great for adding custom code to all pages*/
	function pageLoaded() {
		$('.supermenu').removeClass('m0 m1 m2 m3 m4').end().find('.supermenu, .top-title, .index-icon, .carte-3, .carte-12, .carte-6').addClass("m"+window.masterStructure.currentNav[0]);
		
		$(document).ready(function(){
			setTimeout(fadeInCards, 700);
			
			var keys = {
				ctrl: false,
				alt: false,
				shift: false,
				up: false,
				down: false,
				left: false,
				right: false
			};
			
			
			$(document).keydown(function(evt){
				switch (evt.keyCode){
					case 16:
						keys.shift = true;
						break;
					case 17:
						keys.ctrl = true;
						break;
					case 18:
						keys.alt = true;
						break;
					case 38:
						keys.up = true;
						break;
					case 40:
						keys.down = true;
						break;
					case 37:
						keys.left = true;
						break;
					case 39:
						keys.right = true;
						break;
				}
				
				if(keys.alt && keys.ctrl && keys.shift){
					var pos = $('.ben').position();
					if(keys.right){
						$('.ben').css({left: (pos.left + 20).toString() + "px"});
						$('.ben').attr("src", "content/medias/images/RunBenRun.png");
					}
					if(keys.left){
						$('.ben').css({left: (pos.left - 20).toString() + "px"});
						$('.ben').attr("src", "content/medias/images/RunBenRung.png");
					}
					if(keys.up){
						$('.ben').css({top: (pos.top - 20).toString() + "px"});	
					}
					if(keys.down){
						$('.ben').css({top: (pos.top + 20).toString() + "px"});
					}
				}
			});
			
			$(document).keyup(function(evt){
				switch (evt.keyCode){
					case 16:
						keys.shift = false;
						break;
					case 17:
						keys.ctrl = false;
						break;
					case 18:
						keys.alt = false;
						break;
					case 38:
						keys.up = false;
						break;
					case 40:
						keys.down = false;
						break;
					case 37:
						keys.left = false;
						break;
					case 39:
						keys.right = false;
						break;
				}
			});
		});
		
		function fadeInCards (){
			$(".carte-3 .mainportfolioindex").each(function(index){
				$(this).delay(100*index).animate({opacity: 1, left: "0px"}, 400);
			});
		}
	}

	initialize();

});