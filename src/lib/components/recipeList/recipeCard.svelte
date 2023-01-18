<script lang="ts">
	import { goto } from '$app/navigation';
	import { RecipeRoute } from '$lib/const/routes';
	import type { Recipe } from '$lib/typeDef/recipeApiResponse';
	import { setupLocale } from '$lib/locale/i18';
	import { _, isLoading } from 'svelte-i18n';
	export let recipe: Recipe;
	setupLocale();
	function openRecipeDetails() {
		goto(`${RecipeRoute}/${recipe._id}`);
	}
</script>

<!-- material UI like card -->
<div class="card">
	<div style={`background-image: url('${recipe.images[0]}'); back`} class="card-image" />
	<div class="card-title defaultFont">
		{recipe.recipeName}
	</div>
	<div class="card-desc defaultFont">
		{recipe.description.split('.')[0].split('!')[0]}.
	</div>
	<div class="card-actions">
		{#if !$isLoading}
			<button type="button" on:click={openRecipeDetails} class="card-action-readMore"
				>{$_('read_recipe')}</button
			>
		{/if}
	</div>
</div>

<style>
	.card {
		display: inline-block;
		width: 300px;
		box-sizing: border-box;
		box-shadow: 2px 2px 25px 0px rgba(0, 0, 0, 0.7);
		border-radius: 3px;
		margin: 1em 1.5%;
		animation: scl 0.5s ease-in-out;
		transform-origin: left center;
		background-color: #fff;
	}
	.card-title {
		margin-top: -1.5em;
		padding-bottom: 0.5em;
		padding-left: 0.5em;
		padding-right: 0.5em;
		color: #fff;
		font-size: 1.25em;
		font-weight: 500;
		text-align: center;
		background: rgba(0, 0, 0, 0.5);
		border-bottom: 1px solid rgba(128, 128, 128, 0.3);
	}
	.card-image {
		width: 100%;
		height: 162px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.card-desc {
		padding: 0 1em 1em 1em;
		border-bottom: 1px solid rgba(128, 128, 128, 0.3);
		height: 100px;
		overflow: hidden;
		text-align: center;
	}
	.card-action-readMore {
		margin: 1em 0 1em 1em;
		height: 3em;
		width: 8em;
		background: #ff1d8e;
		border: none;
		font-weight: light;
		color: #fff;
		position: relative;
		overflow: hidden;
		outline: none;
		border-radius: 2px;
	}
	.card-action-readMore:hover {
		background: rgba(255, 29, 142, 0.8);
		transition: all 0.1s ease-in;
	}
	.card:hover {
		box-shadow: 7px 7px 15px 2px rgba(0, 0, 0, 0.5);
		transition: box-shadow 0.3s ease-in;
	}

	.ripple {
		border-radius: 50%;
		background: #ff8ec7;
		position: absolute;
		transform: scale(0);
		opacity: 1;
		animation: ripple 0.4s linear;
	}

	@keyframes ripple {
		to {
			transform: scale(2.5);
			opacity: 0;
		}
	}
	@keyframes scl {
		0% {
			opacity: 0;
			transform: scaleX(0.9) translateX(-50px);
		}
		75% {
			opacity: 0.2;
		}
		100% {
			transform: scaleX(1) translateX(0);
			opacity: 1;
		}
	}
	@media only screen and (max-width: 810px) {
		.card {
			width: 100%;
		}
	}
</style>
