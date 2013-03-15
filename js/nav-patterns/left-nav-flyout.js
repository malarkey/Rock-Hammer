// Left Nav Flyout ============================================================
// http://codepen.io/bradfrost/pen/IEBrz
// No need to thouch this block of code, only the initialisation line below
var LeftNavFlyout = {
	init: function(menu, menuLink, wrap, toggleClass) {
		$('body').addClass('js');

		var $menu = $(menu),
		$menulink = $(menuLink),
		$wrap = $(wrap);

		$menulink.click(function() {
			$menulink.toggleClass(toggleClass);
			$wrap.toggleClass(toggleClass);
			return false;
		});
	}
};

// START HERE!!
$(document).ready(function() {
	// Here is where you need to edit. Arguments are as follows:
	// menu - The menu item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// menuLink - The menulink item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// wrap - The wrap item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// toggleClass - The class name to toggle on/off
	//
	// Example:
	// LeftNavFlyout.init(menu, menuLink, wrap, toggleClass);
	LeftNavFlyout.init("#navigation-left-nav-flyout", ".navigation-left-nav-flyout-toggle", "#wrap", "active");
});