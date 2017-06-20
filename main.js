$(document).ready(function() {
	$('#random').on('click', function() {
		window.open('https://en.wikipedia.org/wiki/Special:Random');
	});

	function getValue() {
		const search = $('input').val();
		const api = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + search + '&format=json&callback=?';
		$.ajax({
			type: 'GET',
			url: api,
			async: false,
			dataType: 'jsonp',
			success: function(data){
				$('.list').html('');
				for(var i = 0; i < data[1].length; i++) {
						$('.list').append('<li><a href="' + data[3][i] + '" target="blank"><h2>' + data[1][i] + '</h2><p>' + data[2][i] + '</p></a></li>');
				}
			}
		});
	}

	$('#search').click(function() {
		$('h1').removeClass('title');
		getValue();
	});
	
	$('input').keypress(function(e){
	if(e.which===13){
		$('h1').removeClass('title');
		getValue();
	}
});


});