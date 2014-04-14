// Responsive breadcrumbs
// http://codepen.io/bradfrost/pen/DCgax
// No need to thouch this block of code, only the initialisation line below
var ResponsiveBreadcrumbs = {
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
		if (!ResponsiveBreadcrumbs.hasClass(elem, className)) {
			elem.className += ' ' + className;
		}
	},

	toggleClass: function(elem, className) {
		var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';

		if (ResponsiveBreadcrumbs.hasClass(elem, className)) {
			while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
				newClass = newClass.replace( ' ' + className + ' ' , ' ' );
			}

			elem.className = newClass.replace(/^\s+|\s+$/g, '');
		}
		else {
			elem.className += ' ' + className;
		}
	},

	init: function(crumbsContainerSelector, activeClassName) {
		var breadCrumbsContainer = document.querySelector(crumbsContainerSelector);

		var crumbsTrigger = document.createElement("a");
		crumbsTrigger.setAttribute("id", "crumbs-trigger");
		crumbsTrigger.setAttribute("href", "#");
		crumbsTrigger.appendChild(document.createTextNode("+"));

		breadCrumbsContainer.appendChild(crumbsTrigger);

		this.addListener(document.querySelector("#crumbs-trigger"), "click", function(event) {
			event.preventDefault();

			ResponsiveBreadcrumbs.toggleClass(breadCrumbsContainer, activeClassName);

			if (ResponsiveBreadcrumbs.hasClass(breadCrumbsContainer, activeClassName)) {
				this.replaceChild(document.createTextNode("-"), this.childNodes[0]);
			}
			else {
				this.replaceChild(document.createTextNode("+"), this.childNodes[0]);
			}
		});
	}
};

// START HERE!!
window.onload = function() {
// Here is where you need to edit. Arguments are as follows:
// crumbsContainerSelector - The container item (if it is referenced by ID, prefix with "#". Classes require a ".")
// activeClassName - The class name to toggle on/off when the container is in small-screen mode
//
// Example:
// ResponsiveBreadcrumbs.init(crumbsContainerSelector, activeClassName);

	ResponsiveBreadcrumbs.init(".crumbs-container", "active");
};
