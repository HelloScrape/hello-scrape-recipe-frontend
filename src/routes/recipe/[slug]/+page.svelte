<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import type { Recipe } from '$lib/typeDef/recipeApiResponse';
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import { getRecipeByIdFromApi } from '$lib/util/recipesFromApi';
	export let data: { slug: string };

	let recipe: Recipe | null = null;
	onMount(async () => {
		await import('@lottiefiles/lottie-player');
		const recipeData = await getRecipeByIdFromApi(data.slug);
		if (recipeData.error == null) {
			recipe = recipeData.data[0];
		}
	});
	let SEOTags = {
		metadescription: 'Recipe details',
		slug: 'recipe',
		title: 'Recipe details'
	};
</script>

<SEO {...SEOTags} />
<Navbar />
<div class="content">
	<lottie-player
		autoplay={true}
		loop
		mode="normal"
		src="https://assets6.lottiefiles.com/packages/lf20_p8xtmag7.json"
		style="width: 120px"
		speed="1"
	/>
	{#if recipe == null}
		<h1>Loading recipe...</h1>
		<lottie-player
		autoplay={true}
		loop
		mode="normal"
		src="https://assets5.lottiefiles.com/packages/lf20_MtPQMx.json"
		style="width: 120px"
		speed="1"
	/>
	{:else}
	<div class="header">
		<h1>Recipe: {recipe?.recipeName}</h1>
		<span>{recipe?.description}</span>
	</div>
	<div class="recipeContent">
		<hr />
		<h2>Follow the recipe instructions listed down below</h2>
		{#each recipe?.images ?? [] as image}
			<img class="recipeImage" src={image} alt={`Recipe image ${image}`} />
		{/each}
	</div>
	{/if}
</div>
<div class="footerComponent">
	<Footer />
</div>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		/* justify-content: center; */
		/* min-height: 100vh; */
		background-color: white;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		width: 75%;
	}

	.header span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		width: 75%;
	}

	.header h1 {
		font-size: 3rem;
		font-weight: 900 !important;
		color: #000;
		margin: 0.5rem 0;
		margin-bottom: 0.5em !important;
	}

	.recipeContent {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		width: 75%;
	}

	.recipeImage{
		width: 100%;

	}

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
		.mirrorDescription hr {
			width: 100%;
		}
		.mirrorDescription {
			width: 75%;
		}
	}
</style>
