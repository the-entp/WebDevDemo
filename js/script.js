$(
	function() {
		var table = "<table border='1'><th>First name</th><th>Last name</th>" +
					"<tr><td>John</td><td>Smith</td></tr>" +
					"<tr><td>Edward</td><td>Smith</td></tr>"+
					"<tr><td>Another</td><td>Name</td></tr></table>";
		var paragraph = "<textarea rows='4' cols='50'></textarea>";

		$('#data').html(table);
		$('#description').html(paragraph);
		$('#data tbody tr:odd').css({'background-color':'#dddddd', 'color':'#666666'});
		$('#data td').click(
			function() {
				$('#description textarea').text($('#description textarea').text() + ' ' + $(this).text());
			}
		);
	}
	
);
	




