<script>
	import Header from '$lib/Header/index.svelte';
	import '../app.postcss';
	
</script>

<Header />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/1.4.6/tailwind.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.9/css/all.css" integrity="sha384-5SOiIsAziJl6AWe0HWRKTXlfcSHKmYV4RBF18PPJ173Kzn7jzMyFuTtk8JA7QQG1" crossorigin="anonymous">
<main>
	<slot />
</main>

<!-- <footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer> -->

<footer class="footer-1 bg-gray-200 py-8 sm:py-12">
	<div class="container mx-auto px-20">
		<div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
			<div >
				<h5 class="text-xl font-bold mb-6 sm:text-center xl:text-left">Follow us!</h5>
				<div class="flex sm:justify-center xl:justify-start">
					<a href="https://www.facebook.com/collectiflesmeduses/" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300">
						<i class="fab fa-facebook"></i>
					</a>
					<a href="https://www.instagram.com/_les_meduses/" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-blue-400 hover:border-blue-400 transition-colors duration-300">
						<i class="fab fa-instagram"></i>
					</a>
					<a href="https://fr.linkedin.com/company/les-m%C3%A9duses" class="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-colors duration-300">
						<i class="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>
		</div>
	</div>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
