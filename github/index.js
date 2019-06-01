// header
$(function () {
	$a = $("#logo");
	$b = $("#logoHide");
	$a.mouseenter(function() {
		$b.slideDown(1000);
	}).mouseleave(function() {
		$b.slideUp(1000);
	});
	return false;
});