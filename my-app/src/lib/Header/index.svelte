<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
	  <a class="font-sans flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
		<!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-purple-500 rounded-full" viewBox="0 0 24 24">
		  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
		</svg> -->
		<img src="https://zupimages.net/up/21/22/8o3k.png" alt="Les Méduses" class="max-h-9 max-w-9" />
		<span class="ml-3 text-xl">Les Méduses</span>
	  </a>
	  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
		<a sveltekit:prefetch href="/" class="font-sans mr-5 hover:text-gray-900">Homepage</a>
		<a sveltekit:prefetch href="/donation" class="font-sans mr-5 hover:text-gray-900">Donations</a>
		<a sveltekit:prefetch href="/team" class="font-sans mr-5 hover:text-gray-900 font-sans">Team</a>
		<a sveltekit:prefetch href="/app" class="font-sans mr-5 hover:text-gray-900 font-sans">Datas</a>
	  </nav>
	  <button class="font-sans inline-flex items-center bg-gray-100 border-0 py-3 px-7 focus:outline-none hover:bg-gray-200 rounded-full text-base mt-4 md:mt-0"><a sveltekit:prefetch href="/contact" class="font-sans hover:text-gray-900 text-gray-500">Contact</a></button>
</div>
</header>

<!-- <header>
	<div class="corner">
		<a href="https://kit.svelte.dev">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li class:active={$page.path === '/'}><a sveltekit:prefetch href="/">Home</a></li>
			<li class:active={$page.path === '/about'}><a sveltekit:prefetch href="/about">About</a></li>
			<li class:active={$page.path === '/todos'}><a sveltekit:prefetch href="/todos">Todos</a></li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
	</div>
</header> -->

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgb(255, 255, 255);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li.active::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--accent-color);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 600;
		/* font-size: 0.8rem; */
		/* text-transform: uppercase; */
		letter-spacing: 10%;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: #B366A4;
	}
</style>
