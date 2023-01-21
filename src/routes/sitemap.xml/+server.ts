import type { Recipe } from '$lib/typeDef/recipeApiResponse';
import { allRecipesFromApi } from '$lib/util/recipesFromApi';
import { error } from '@sveltejs/kit';

export const prerender = true;

const siteUrl = 'https://helloscrape.com';
let allRecipes: Recipe[] = [];

const render = (recipes: Recipe[], origin: string) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
	xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
  xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
	>

    <url>
  <loc>${siteUrl}/</loc>
  <lastmod>2023-01-17T15:29:50+00:00</lastmod>
</url>

	${recipes
		.map((element) => {
			const { updatedAt, _id } = element;
			return `
	<url>
	  <loc>${siteUrl}/recipe/${_id}</loc>
		<lastmod>${`${new Date(updatedAt).toISOString()}`}</lastmod>
	</url>
	`;
		})
		.join('')}
</urlset>`;

/** @type {import('./$types').RequestHandler} */
export async function GET({ setHeaders, url }: any) {
	try {
		allRecipes = (await allRecipesFromApi(1, 9999)).data;

		setHeaders({
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml'
		});

		return new Response(render(allRecipes, url.origin));
	} catch (err: any) {
		console.error(`Error in sitemap.xml: ${err}`);
		throw error(500, err);
	}
}
