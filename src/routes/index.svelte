<script lang="ts">
	import { isHome } from '../store/stores';
	isHome.update(() => true);
	const urls = [
		{
			name: 'Link Collection',
			description: 'Svelte & Tailwind Links',
			url: 'https://learn-svelte-kappa.vercel.app/about'
		},
		{
			name: 'Store Demo',
			description: 'Demo page of the Store',
			url: 'https://learn-svelte-kappa.vercel.app/storeDemo'
		},
		{
			name: 'Reactive Statement Demo',
			description: 'Demo page of the Reactive Statement',
			url: 'https://learn-svelte-kappa.vercel.app/reactiveStatement'
		}
	];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<body class="flex flex-col m-0">
	<main>
		<div class="text-center py-4 mx-10">
			<h1 class="text-red-500 py-2 leading-6 sm:text-lg sm:leading-7 text-xl">Hello Svelte!</h1>

			<p class="text-center">
				This is a tutorial on an innovative tool called the svelte kit.<br />
			</p>
			<!-- ループ -->
			<div class="py-6">
				{#each urls as { name, description, url }}
					<div class="py-1.5">
						<a href={url}>
							<p class="text-center bg-gray-300 hover:bg-gray-400 py-2 rounded">
								<a href={url} class="text-blue-500 hover:text-blue-700">{name}</a>
								<br />
								{description}
							</p>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</main>
</body>

<style>
</style>
