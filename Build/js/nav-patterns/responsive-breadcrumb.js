// http://codepen.io/bradfrost/pen/DCgax
(function(w){
	var $crumbsContainer = $('.crumbs-container');
	$(document).ready(function() {
		buildCrumbs();
	});
	
	function buildCrumbs() {
		$('<a href="#" id="crumbs-trigger">+</a>').appendTo($crumbsContainer);
		
		$('#crumbs-trigger').bind('click', function(e) {
			e.preventDefault();
			var $this = $(this);
			$crumbsContainer.toggleClass('active');
			
			if($crumbsContainer.hasClass('active')) {
				$this.text('-');
			} else {
				$this.text('+');
			}
		});
	}
})(this);