
// mobile menu_bar
	$(".beforeMenu").on("click", function () {
		$(".wrapper1").slideDown();
		$(".beforeMenu").hide();
		$(".afterMenu").show();
	});
	
		$(".afterMenu").on("click", function () {
		$(".wrapper1").slideUp();
		$(".afterMenu").hide();
		$(".beforeMenu").show();
	});