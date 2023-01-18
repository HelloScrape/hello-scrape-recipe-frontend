import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';
import en from '$lib/locale/en.json';
import nl from '$lib/locale/nl.json';
import fr from '$lib/locale/fr.json';
export function setupLocale() {
	addMessages('en', en);
	addMessages('nl', nl);
	addMessages('fr', fr);

	init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
}
