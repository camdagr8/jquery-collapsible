$(function() {
	$('[data-toggle="collapse"]').on('animations:complete', function (e) {
		$('html,body').animate({
			scrollTop: $(this).offset().top
		});
	});
});
