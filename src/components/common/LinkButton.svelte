<script lang="ts">
	export let urls: data[];

	type data = {
		name: string;
		description: string;
		url: string;
	};
</script>

<body>
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
</body>
