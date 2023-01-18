<script lang="ts">
	import { onMount } from 'svelte';
	import {
		allRecipesFromApi,
		allRecipesFromApiByLanguage,
		detectLanguage
	} from '$lib/util/recipesFromApi';
	import type { Recipe } from '$lib/typeDef/recipeApiResponse';
	import RecipeCard from './recipeCard.svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _, isLoading } from 'svelte-i18n';
	setupLocale();

	let recipeList: Recipe[] = [];
	let currentPage = 1;
	let pageSize = 25;
	let maxPages = 10;

	onMount(async () => {
		getMoreRecipes();
	});

	async function getMoreRecipes() {
		const recipeData = await allRecipesFromApiByLanguage(detectLanguage(), currentPage++, pageSize);
		if (recipeData.error == null) {
			recipeList = recipeList.concat(recipeData.data);
			maxPages = recipeData.total ?? maxPages;
		}
	}
</script>

<div class="recipeCardList" id="recipeCards">
	<hr />
	{#if recipeList.length != 0}
		<div class="recipeCards">
			{#each recipeList as recipe}
				<RecipeCard {recipe} />
			{/each}
		</div>
		{#if maxPages >= currentPage}
			{#if !$isLoading}
				<button class="btn" type="button" on:click={getMoreRecipes}>
					<span class="defaultFont">{$_('load_more_recipes')}</span>
				</button>
			{/if}
		{/if}
	{:else if !$isLoading}
		<span>{$_('loading_recipes')}</span>
	{/if}
</div>

<style>
	.recipeCards {
		margin: 0px auto;
		justify-content: center;
		align-items: center;
	}

	.recipeCardList {
		margin: 0 !important;
		padding: 0 !important;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.recipeCardList span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.recipeCardList hr {
		width: 100%;
		border: 1px solid #000;
	}

	.loadMoreButton {
		margin: 0 auto;
	}

	.btn {
		position: relative;

		display: block;
		margin: 30px auto;
		padding: 0;

		overflow: hidden;

		border-width: 0;
		outline: none;
		border-radius: 2px;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

		background-color: #2ecc71;
		color: #ecf0f1;

		transition: background-color 0.3s;
	}

	.btn:hover,
	.btn:focus {
		background-color: #27ae60;
	}

	.btn > * {
		position: relative;
	}

	.btn span {
		display: block;
		padding: 12px 24px;
		color: white;
	}

	.btn:before {
		content: '';

		position: absolute;
		top: 50%;
		left: 50%;

		display: block;
		width: 0;
		padding-top: 0;

		border-radius: 100%;

		background-color: rgba(236, 240, 241, 0.3);

		-webkit-transform: translate(-50%, -50%);
		-moz-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		-o-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
	}

	.btn:active:before {
		width: 120%;
		padding-top: 120%;

		transition: width 0.2s ease-out, padding-top 0.2s ease-out;
	}

	.btn.orange {
		background-color: #e67e22;
	}

	.btn.orange:hover,
	.btn.orange:focus {
		background-color: #d35400;
	}

	.btn.red {
		background-color: #e74c3c;
	}

	.btn.red:hover,
	.btn.red:focus {
		background-color: #c0392b;
	}

	/* on phone screen */
	@media only screen and (max-width: 810px) {
		.recipeCardList {
			width: 95%;
		}
		.table {
			width: 100%;
		}
	}
</style>
