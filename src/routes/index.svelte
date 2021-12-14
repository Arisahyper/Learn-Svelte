<script lang="ts">
	import LinkButton from '../components/common/LinkButton.svelte';
	import PageDescription from '../components/common/PageDescription.svelte';
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

	const title: string = 'Hello Svelte!';
	const description: string = 'This is a tutorial on an innovative tool called the svelte kit.';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<body class="flex flex-col m-0">
	<main>
		<div class="text-center py-6 mx-10">
			<PageDescription {title} {description} />
			{#each urls as { name, description, url }}
				<div class="py-1.5">
					<LinkButton {name} {description} {url} />
				</div>
			{/each}
		</div>
	</main>
</body>

<style>
</style>
