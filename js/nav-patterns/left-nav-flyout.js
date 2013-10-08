// Left Nav Flyout ============================================================
// http://codepen.io/bradfrost/pen/IEBrz
// No need to thouch this block of code, only the initialisation line below
var LeftNavFlyout = {
	addListener: function(element, eventName, handler) {
		if (element.addEventListener) {
			element.addEventListener(eventName, handler, false);
		}
		else if (element.attachEvent) {
			element.attachEvent('on' + eventName, handler);
		}
		else {
			element['on' + eventName] = handler;
		}
	},

	hasClass: function (elem, className) {
    	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    },

    addClass: function(elem, className) {
	    if (!this.hasClass(elem, className)) {
	        elem.className += ' ' + className;
	    }
	},

    toggleClass: function(elem, className) {
	    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';

	    if (hasClass(elem, className)) {
	        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
	            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
	        }

	        elem.className = newClass.replace(/^\s+|\s+$/g, '');
	    } 
	    else {
	        elem.className += ' ' + className;
	    }
	},

	init: function(menu, menuLink, wrap, toggleClass) {
		var $menu = document.querySelector(menu);
		var $menulink = document.querySelector(menuLink);
		var $wrap = document.querySelector(wrap);

		this.addClass(document.querySelector("body"), "js");

		this.addListener($menulink, "click", function() {
			LeftNavFlyout.toggleClass($menulink, toggleClass);
			LeftNavFlyout.toggleClass($wrap, toggleClass);

			return false;
		});
	}
};

// START HERE!!
window.onload = function() {
	// Here is where you need to edit. Arguments are as follows:
	// menu - The menu item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// menuLink - The menulink item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// wrap - The wrap item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// toggleClass - The class name to toggle on/off
	//
	// Example:
	// LeftNavFlyout.init(menu, menuLink, wrap, toggleClass);
	LeftNavFlyout.init("#navigation-left-nav-flyout", ".navigation-left-nav-flyout-toggle", "#wrap", "active");
};