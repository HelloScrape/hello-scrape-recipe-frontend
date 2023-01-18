<script lang="ts">
	import Footer from '$lib/components/footer/footer.svelte';
	import Navbar from '$lib/components/navbar/navbar.svelte';
	import SEO from '$lib/components/SEO/index.svelte';
	import { onMount } from 'svelte';
	import RecipeList from '$lib/components/recipeList/recipeList.svelte';
	import { setupLocale } from '$lib/locale/i18';
	import { _, isLoading } from 'svelte-i18n';
	const SEOTags = {
		metadescription:
			'All the Hello Fresh recipes in one place. Find the best recipes and get cooking!',
		slug: '',
		title: 'All Hello Fresh Recipes'
	};
	setupLocale();
	onMount(async () => {
		await import('@lottiefiles/lottie-player');
	});
</script>

<SEO {...SEOTags} />
<Navbar />
{#if $isLoading}
	<h1>Loading...</h1>
{:else}
	<div class="content">
		<lottie-player
			autoplay={true}
			loop
			mode="normal"
			src="https://assets5.lottiefiles.com/private_files/lf30_e15kjsdl.json"
			style="width: 120px"
			speed="1"
		/>
		<div class="header">
			<h1>{$_('hello_fresh_recipes')}</h1>
			<span class="callToAction">{$_('all_recipes_one_place')}</span>
		</div>
		<div class="recipeCards">
			<RecipeList />
		</div>
	</div>
{/if}
<div class="footerComponent">
	<Footer />
</div>

<style>
	.recipeCards {
		margin: 0 !important;
		width: 75%;
		justify-content: center;
		align-items: center;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		/* min-height: 100vh; */
		background-color: white;
	}

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
	}

	.header span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.header h1 {
		font-size: 3rem;
		font-weight: 900 !important;
		color: #000;
		margin: 0.5rem 0;
		margin-bottom: 0.5em !important;
	}

	.callToAction {
		font-size: 2rem !important;
		font-weight: 700;
		color: rgb(24, 24, 24);
		margin-bottom: 2em !important;
	}

	@media only screen and (max-width: 810px) {
		.content {
			margin-left: 0.5em;
			margin-right: 0.5em;
			text-align: center;
			margin-bottom: 1em;
		}
	}
</style>
