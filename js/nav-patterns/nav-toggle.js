// Toggle Navigation ============================================================
// http://codepen.io/bradfrost/pen/sHvaz
// No need to thouch this block of code, only the initialisation line below
var NavigationToggle = {
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
	    if (!hasClass(elem, className)) {
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

	init: function(menu, menuLink, toggleClass) {
		this.addClass(document.querySelector("body"), "js");
		
		var $menu = document.querySelector(menu);
		var $menulink = document.querySelector(menuLink);

		this.addListener($menuLink, "click", function() {
			NavigationToggle.toggleClass($menulink, toggleClass);
			NavigationToggle.toggleClass($menu, toggleClass);

			return false;
		});
	}
};

// START HERE!!
window.onload = function() {
	// Here is where you need to edit. Arguments are as follows:
	// menu - The menu item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// menuLink - The menulink item (if it is referenced by ID, prefix with "#". Classes require a ".")
	// toggleClass - The class name to toggle on/off
	//
	// Example:
	// NavigationToggle.init(menu, menuLink, toggleClass);

	NavigationToggle.init("#navigation-toggle", ".navigation-toggle", "active");
};