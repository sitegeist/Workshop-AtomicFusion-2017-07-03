import Header from './Component/Organism/Header/Header';

//
// Hashmap of all available components
//
const components = {
	'Organism/Header': Header
};

//
// Iterate over all dom elements that have a 'data-component' attribute.
//
const bootstrap = () => [].slice.call(document.querySelectorAll('[data-component]')).forEach(
	el => {
		const componentIdentifier = el.getAttribute('data-component');
		const component = components[componentIdentifier];

		if (component) {
			//
			// Inject props via 'data-props' attribute
			//
			const props = JSON.parse(el.getAttribute('data-props') || '{}');

			//
			// Initialize the component
			//
			component(el);
		}
	}
);

//
// Run bootstrap on page load, and whenever the Neos Backend UI updates
//
document.addEventListener('DOMContentLoaded', bootstrap);
document.addEventListener('Neos.PageLoaded', bootstrap);
