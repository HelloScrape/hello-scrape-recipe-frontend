<script lang="ts">
</script>

<div class="footer">
	<span>© {new Date().getFullYear()} - Hello Fresh Recipes</span>
	<span>
		Made with <span class="emojiFont">❤️</span> by
		<a
			class="githubProfile"
			target="_blank"
			rel="noreferrer"
			href="https://github.com/GewoonJaap/">Jaap</a
		>
	</span>
	<span class="disclaimer">
		This app is neither affiliated with nor endorsed by Hello Fresh. The official Hello Fresh
		website can be found at <a href="https://hellofresh.com/" target="_blank" rel="noreferrer"
			>https://hellofresh.com</a
		>
	</span>
</div>

<style>
	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: white;
		margin-top: 2rem;
		flex-shrink: 0;
	}

	.footer span {
		font-size: 1.5rem;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
		text-align: center;
	}

	.githubProfile {
		color: #000;
		text-decoration: underline;
	}

	.disclaimer {
		font-size: 1em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}

	.addYourProxy {
		font-size: 1.25em !important;
		font-weight: 500;
		color: #000;
		margin: 0.5rem 0;
	}
</style>
