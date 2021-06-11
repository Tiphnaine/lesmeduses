<script context="module">
	export const prerender = true;
</script>

<script>
	import Counter from '$lib/Counter/index.svelte';
  import Contact from '$lib/Contact/index.svelte';
</script>

<svelte:head>
	<title>Homepage</title>
</svelte:head>

<section>
	<h1>
		<div class="welcome">
			<picture>
				<img class= "object-left-top" src="https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8" alt="Les Méduses" />
        <img class= "object-right-top" src="https://www.zupimages.net/up/21/22/8o3k.png?fbclid=IwAR1pB6euzVFT6imo5Lx9AYLDbLTqi_NSc9l1nGp5zPGJdJZp4eMSs489Sk8" alt="Les Méduses" />
			</picture>
		</div>

		Les Méduses<br />
	</h1>

	<h2>
		An ESSEC Initiative
	</h2>

</section>
<section class="text-indigo-600 font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Who we are</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Les Méduses is involved in various working groups dealing with Sexual and Sexist Violence (SSV). Each working group analyses the existing dispositives and works with the school administration in question to propose recommendations.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-purple-500 inline-flex"></div>
      </div>
    </div>
  </section>
<section class="text-gray-600 body-font"> 
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="py-12 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our objectives</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        A better comprehension of Sexist and Sexual Violence
      </p>
      <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Discover the pillars of our actions
      </p>
    </div>

    <div class="mt-10">
      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: outline/globe-alt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Raise awareness and overcome taboos</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            We want to raise awareness of SSV issues among students through more appropriate formats and communication.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: outline/scale -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">Support Structures</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Create supportive and understandable support structures available to every student and promote them to students.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: outline/lightning-bolt -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900"> Student training</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            In order to be able to recognise and react to SSV, it is important to provide all students with appropriate and up-to-date training.
          </dd>
        </div>

        <div class="relative">
          <dt>
            <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <!-- Heroicon name: outline/annotation -->
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900">SSV in the working environment</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
            Preparing and accompanying students to the existence of SSV in the professional world.
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
  </section>
  
  <Contact/>
<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: absolute;
		width: 200px;
    height: 200px;
	}
</style>
