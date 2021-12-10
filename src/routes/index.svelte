<script lang="ts">
	import Header from '../components/Pages/Root/Header.svelte';
	import Footer from '../components/Pages/Root/Footer.svelte';

	const script_name = 'Svelte';
	const word = 'This is a tutorial on an innovative tool called the svelte kit.\n';
	const urls = [
		{
			name: 'svelte',
			description: 'svelte is a framework for building interactive UIs',
			url: 'https://svelte.dev/'
		},
		{
			name: 'svelte-kit',
			description: 'svelte-kit is a collection of tools for building svelte applications',
			url: 'https://kit.svelte.dev/'
		},
		{
			name: 'svelte-kit-docs',
			description: 'svelte-kit-docs is a collection of documentation for svelte-kit',
			url: 'https://kit.svelte.dev/docs'
		},
		{
			name: 'svelte-tutorial',
			description: 'svelte-tutorial is a collection of tutorials for svelte',
			url: 'https://svelte.dev/tutorial/basics'
		}
	];
</script>

<body class="flex flex-col min-h-screen m-0">
	<div class="">
		<Header />
	</div>
	<main class="flex-grow bg-gray-100">
		<div class="text-center py-4 mx-10">
			<h1 class="text-red-500 py-2 leading-6 sm:text-lg sm:leading-7 text-xl">
				Hello {script_name}!
			</h1>

			<p class="text-center">
				{word}<br />
			</p>
			<!-- ループ -->
			<div class="py-6">
				{#each urls as { name, description, url }}
					<div class="py-1.5">
						<p class="text-center bg-gray-300 rounded">
							<a href={url} class="text-blue-500 hover:text-blue-700">{name}</a>
							<br />
							{description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</main>

	<div>
		<Footer />
	</div>
</body>

<style>
</style>
