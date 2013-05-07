$( // a short-cut for document.ready

    function() {
    	$('#contentPane').hide();

		animateNavigation();
		showAbout();

		handleOverlay();


});

	function showAbout() {
		$('.leftPanel .navigation li').click(function() {
			if ($(this).text() == "About") {
				$('#contentPane').toggle();
			}
		});

	}

	function addOverlay() {
		// child selectors '>' refer to direct descendants
		$('#picPane > .inner > img').click(function(e) {
			$('<div id="overlay"></div>')
			.css('top', $(document).scrollTop())
			.css('opacity', 0)
			.animate({'opacity':'0.5'}, 'slow')
			.appendTo('body');
         
			$('<div id="container"></div>')
				.css({
					'top': ($(window).height() - $(this).height())/2,
					'left': ($(window).width() - $(this).width())/2,
					'position': 'fixed'
				}).fadeIn().html(
				// must clone because appendTo removes 
				// $(this) from its original place
				$(this).clone() 
					.css({
						'width': '300px',
						'height': '300px',
					})
				).appendTo($('body')); // we append to the body so we can control the opacity 
				//of the clicked image
		});

	}

	function removeOverlay() {
		var coord = null;
		var ele = null;
		$('#container > img').live('click', function() {
			var self = this;
			$(this).Jcrop({
				setSelect:[75,75,250,250],
				minSize:[50,50],
				onChange: function(coords) {

				},
				onSelect: function(coords) {
					coord = coords;
					ele = self;
				}
			})
		});
		$('#overlay').live('click', function() {
			$('#container').fadeOut('slow', function() {
				$(this).remove();
			});
		    $(this).fadeOut('slow', function() {
		    	$(this).remove();
		    });
		    // rudimentary client side cropping code
		    if (ele && coord) {
		    	var src = $(ele).attr('src');

		    	var image = $('img[src="'+src+'"]');

		    	// image.css({
		    	// 	'position':'absolute',
		    	// 	//'clip': 'rect(0px,50px,50px,0px)'
		    	// })
		    }

		});

	}

	function handleOverlay() {
		addOverlay();
		removeOverlay();
	}

	function animateNavigation() {
		// this selector looks for .navigation in all the descendants of .leftPanel..etc.
		$('.leftPanel .navigation li').hover(function() {
			// the 'stop' stops the animation to make it less jumpy,
			// and here, the clearqueue parameter is set to true
			// so it prevents animations from queueing up
			$(this).stop(true).removeClass('crooked');
		},
		function() {
			$(this).stop(true).addClass('crooked');
		});

	}


				// var table = "<table border='1'><th>First name</th><th>Last name</th>" +
		// 			"<tr><td>John</td><td>Smith</td></tr>" +
		// 			"<tr><td>Edward</td><td>Smith</td></tr>"+
		// 			"<tr><td>Another</td><td>Name</td></tr></table>";
		// var paragraph = "<textarea rows='4' cols='50'></textarea>";

		// $('#data').html(table);
		// $('#description').html(paragraph);
		// $('#data tbody tr:odd').css({'background-color':'#dddddd', 'color':'#666666'});
		// $('#data td').click(
		// 	function() {
		// 		$('#description textarea').text($('#description textarea').text() + ' ' + $(this).text());
		// 	}
		// );
	




