$( // a short-cut for document.ready

	function handleOverlay() {
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
				$(this)
					.css({
						'width': '300px',
						'height': '300px',
					})
				).appendTo($('body')); // we append to the body so we can control the opacity 
				//of the clicked image
		});

		$(':not(#container)').click(function() {
			console.log("i am here");
			$('body').remove("#container");
			$('body').remove("#overlay");
		})
	},

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

	},
	function() {
		handleOverlay();
		animateNavigation();
	

	}


	
);

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
	




