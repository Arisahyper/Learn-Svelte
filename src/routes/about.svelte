<script lang="ts">
	import PageDescription from '../components/common/PageDescription.svelte';
	import LinkButton from '../components/common/LinkButton.svelte';
	import { isHome } from '../store/stores';
	import { svelteLinks, tailwindLinks, errorLinks } from '../data/collections';
	isHome.update(() => false);

	const title: string = 'Link Collection';
	const description: string = 'お世話になったリンク達';
</script>

<svelte:head>
	<title>Link Collection</title>
</svelte:head>

<body>
	<div class="py-6 text-center">
		<PageDescription {title} {description} />
	</div>

	<h1 class="pl-3 text-lg">Svelte</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each svelteLinks as { name, description, url }}
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<LinkButton {name} {description} {url} />
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Tailwind CSS</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each tailwindLinks as { name, description, url }}
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<LinkButton {name} {description} {url} />
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Error</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each errorLinks as { name, description, url }}
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<LinkButton {name} {description} {url} />
			</div>
		{/each}
	</div>
</body>
