// JavaScript Document
$(document).ready(function() {
	var segundos = 3; //3segundos

setTimeout(function(){
  $('#section1').fadeIn();
}, segundos*1000)
	
			// Plugin intialization
	    	$('#pagepiling').pagepiling({
				direction: 'horizontal',
	    		menu: '#menu',
	    		anchors: ['page1', 'page2', 'page3'],
			    //sectionsColor: ['#d1d2d3', '#091a2e', '#2C3E50', '#39C'],
			    navigation: {
			    	'position': 'right',
			   		'tooltips': ['Participe', 'Como Funciona']
			   	},
				normalScrollElements: '.pp-scrollable',
			    afterRender: function(){
			    	$('#pp-nav').addClass('custom');
			    },
			    afterLoad: function(anchorLink, index){
			    	if(index>1){
			    		$('#pp-nav').removeClass('custom');
			    	}else{
			    		$('#pp-nav').addClass('custom');
			    	}
			    }
			});

});

