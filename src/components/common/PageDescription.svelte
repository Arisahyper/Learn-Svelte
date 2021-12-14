<script lang="ts">
	export let title: string;
	export let description: string[];
</script>

<body>
	<div class="text-center">
		<h1 class="text-xl mb-3">{title}</h1>
		{#each description as d}
			<p>{d}</p>
		{/each}
	</div>
</body>

<style>
</style>
