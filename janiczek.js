// code inspired by https://www.sitepoint.com/scroll-based-animations-jquery-css3/
var $window = $(window);
var $animated_elements = $('.scroll-animated');

var full_refresh = function() {
	var win_top = $window.scrollTop();
	var win_bottom = (win_top + $window.height());

	$.each($animated_elements, function() {
		var $element = $(this);
		var height = $element.outerHeight();
		var top = $element.offset().top;
		var bottom = top + height;
		$element.attr('data-top', top);
		$element.attr('data-bottom', bottom);

		if ((top <= win_bottom) && (bottom >= win_top)) {
			$element.addClass('visible');
		} else {
			$element.removeClass('visible');
		}
	});
};

var small_refresh = function() {
	var win_top = $window.scrollTop();
	var win_bottom = (win_top + $window.height());

	$.each($animated_elements, function() {
		var $element = $(this);
		var top = $element.attr('data-top');
		var bottom = $element.attr('data-bottom');
		if ((top <= win_bottom) && (bottom >= win_top)) {
			$element.addClass('visible');
		} else {
			$element.removeClass('visible');
		}
	});
};

$window.on('resize', full_refresh);
$window.on('scroll', small_refresh);
$window.trigger('resize');