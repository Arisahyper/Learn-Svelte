<script lang="ts">
	import LinkButton from '../components/common/LinkButton.svelte';
	import PageDescription from '../components/common/PageDescription.svelte';
	import { pageLinks } from '../data/pageLinks';
	import { isHome } from '../store/stores';
	isHome.update(() => true);

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
			{#each pageLinks as { name, description, url }}
				<div class="py-1.5">
					<LinkButton {name} {description} {url} />
				</div>
			{/each}
		</div>
	</main>
</body>

<style>
</style>
