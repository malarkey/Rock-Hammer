// Rock Hammer by Stuff and Nonsense
// Version: <!-- $version -->
// URL: http://stuffandnonsense.co.uk/projects/rock-hammer/
// Version: <!-- $license -->

// Entry point for our JavaScript code
$(document).ready(function() {

	// Initialise the navigation manager object
	NavigationManager.init("navigation-toggle", "rock-hammer");

	// Used to store responsive nav state
	var navigation;
	
	// Navigation Patterns =========
	if (config.navpatterns.responsivenav.use === true) {
		navigation = responsiveNav(config.navpatterns.responsivenav.navelement);
	};

	// Widgets ===============

	// Initialise the carousel
	if (config.widgets.carousel.use === true) {
		$(config.widgets.carousel.container).carousel();
	}

	// Initiaslise tooltips
	if (config.widgets.tooltips.use === true) {
		$(config.widgets.tooltips.container).tooltip({
  			selector: "a[data-toggle=tooltip]"
		});
	}

	// Initialise Popovers
	if (config.widgets.popovers.use === true) {
	    $("a[data-toggle=popover]").popover().click(function(e) {
	        e.preventDefault()
	    });
	}
});