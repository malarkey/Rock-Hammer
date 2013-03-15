// Toggle Navigation ============================================================
// http://codepen.io/bradfrost/pen/sHvaz
// No need to thouch this block of code, only the initialisation line below
var NavigationToggle = {
	init: function(menu, menuLink, toggleClass) {
		$('body').addClass('js');
		var $menu = $(menu),
		$menulink = $(menuLink);

		$menulink.click(function() {
			$menulink.toggleClass(toggleClass);
			$menu.toggleClass(toggleClass);
			return false;
		});
	}
};

// START HERE!!
$(document).ready(function() {
	// Here is where you need to edit. Arguments are as follows:
	// menu - The menu item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// menuLink - The menulink item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// toggleClass - The class name to toggle on/off
	//
	// Example:
	// NavigationToggle.init(menu, menuLink, toggleClass);

	NavigationToggle.init("#navigation-toggle", ".navigation-toggle", "active");
});