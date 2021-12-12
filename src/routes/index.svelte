<script lang="ts">
	const script_name = 'Svelte';
	const word = 'This is a tutorial on an innovative tool called the svelte kit.\n';
	const urls = [
		{
			name: 'Svelte',
			description: 'Svelte is a framework for building interactive UIs',
			url: 'https://svelte.dev/'
		},
		{
			name: 'Svelte-Kit',
			description: 'Svelte-Kit is a collection of tools for building svelte applications',
			url: 'https://kit.svelte.dev/'
		},
		{
			name: 'Svelte-Kit-docs',
			description: 'Svelte-Kit-docs is a collection of documentation for Svelte-Kit',
			url: 'https://kit.svelte.dev/docs'
		},
		{
			name: 'Svelte-Tutorial',
			description: 'svelte-tutorial is a collection of tutorials for Svelte',
			url: 'https://svelte.dev/tutorial/basics'
		},
		{
			name: 'Link Collection',
			description: 'Svelte & Tailwind Links',
			url: 'https://learn-svelte-kappa.vercel.app/about'
		},
		{
			name: 'Store Demo',
			description: 'Demo page of the Store',
			url: 'https://learn-svelte-kappa.vercel.app/storeDemo'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<body class="flex flex-col m-0">
	<main>
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
</body>

<style>
</style>
