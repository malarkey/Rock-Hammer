// Rock Hammer by Stuff and Nonsense
// Version: <!-- $version -->
// URL: http://stuffandnonsense.co.uk/projects/rock-hammer/
// Version: <!-- $license -->

// Set required JavaScript's on/off using this file (the "use" statements in particular). 
// true means it is required, false means it isn't. Simples.

// NOTE: Not all scripted items require config/invocation. Accordion is a perfect example.

// Below are the settings to make Rock Hammer work.
// Change these as needed for your own projects.
var config = {

	// Decide which navigation patterns you wish to use
	navpatterns : {
		
		// Responsive Nav JavaScript plugin
		// http://www.smashingmagazine.com/2013/04/09/responsive-nav-a-simple-javascript-plugin-for-responsive-navigation/
		responsivenav : {
			use 		: true,
			// The "handle" to the element that contains the navigation.
			// By ID starts with "#"
			// By class name starts with "."
			navelement  : "#navigation-toggle"
		}

	},

	// Decide which Bootstrap widgets you wish to use (note: not all 
	// Bootstrap JavaScript items require explicit JavaScript initialisation)
	widgets : {

		// Carousel - loops round a pre-defined number of images/text elements
		carousel : {
			use 		: true,
			// The "handle" to the element designated as the carousel.
			// By ID starts with "#"
			// By class name starts with "."
			container 	: ".carousel"
		},

		// Tooltips - small popup upon hovering over a specified element
		tooltips : {
			use 		: true,
			// The "handle" to the element that contains the tooltip items.
			// By ID starts with "#"
			// By class name starts with "."
			container	: ".tooltips"
		},

		// Popovers - small popup that requires a click on a specified element to show and hide
		popovers : {
			use 		: true
		}

	}
};