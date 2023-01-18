import type { RecipeResponse } from '$lib/typeDef/recipeApiResponse';
import { getLocaleFromNavigator } from 'svelte-i18n';

export async function allRecipesFromApi(page = 1, pageSize = 25): Promise<RecipeResponse> {
	const response = await fetch(`http://localhost:8080/recipe?page=${page}&pageSize=${pageSize}`);
	const data = await response.json();
	return data;
}

export async function allRecipesFromApiByLanguage(
	language: string,
	page = 1,
	pageSize = 25
): Promise<RecipeResponse> {
	const response = await fetch(
		`http://localhost:8080/recipe/language/${language}?page=${page}&pageSize=${pageSize}`
	);
	const data = await response.json();
	return data;
}

export async function getRecipeByIdFromApi(id: string): Promise<RecipeResponse> {
	console.log(`Getting data for ${id}`);
	const response = await fetch(`http://localhost:8080/recipe/id/${id}`);
	const data = await response.json();
	return data;
}

export function detectLanguage(): string {
	let language = getLocaleFromNavigator() ?? 'en';
	language = language.split('-')[0].toLowerCase();
	if (language === 'en' || language === 'nl' || language === 'fr') {
		return language;
	}
	return 'en';
}
