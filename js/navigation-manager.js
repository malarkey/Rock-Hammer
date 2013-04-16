// Rock Hammer by Stuff and Nonsense
// Version: <!-- $version -->
// URL: http://stuffandnonsense.co.uk/projects/rock-hammer/
// Version: <!-- $license -->

// Navigation Manager object takes care of registering the click handlers for our nav patterns
NavigationManager = {
	// Behaviour for the "Top" links
	// Scroll up to the "backToTopTarget" supplied, based on the link having 
	// "backToTopTarget" as the value of its href attribute
	initialiseBackToTopLinks: function(backToTopTarget) {
		$("a[href='#" + backToTopTarget + "']").click(function() {
			$.scrollTo($("#" + backToTopTarget), 600);
		});
	},

	// Behaviour for navigation links
	// Scroll to the destination and automatically open the target panel
	initialiseNavigationLinks: function(navElementId) {
		$("#" + navElementId + ">ul>li>a").click(function() {
			$.scrollTo($($(this).attr("href")), 600);
			$($(this).attr("href") + "-hidden").collapse('show');
		});
	},

	// Supress dead links
	supressDeadLinks: function() {
		// Supress clicks on any navigation item
		$("#panel-navigation-hidden").click(function(e){
			e.preventDefault();
		});

		// Supress buttons on modules
		$("#panel-modules-hidden .btn").click(function(e){
			e.preventDefault();
		});

		// Supress buttons on forms
		$("#panel-forms-hidden .btn").click(function(e){
			e.preventDefault();
		});
	},

	// Entry point for the object
	init: function(navElementId, backToTopTarget) {
		$('body').addClass('js');
		this.initialiseNavigationLinks(navElementId);
		this.initialiseBackToTopLinks(backToTopTarget);
		this.supressDeadLinks();
	}
};