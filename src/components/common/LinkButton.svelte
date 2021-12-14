<script lang="ts">
	// export let urls: data[];
	// export let padding: string;

	type data = {
		name: string;
		description: string;
		url: string;
	};

	export let name: string;
	export let description: string;
	export let url: string;
</script>

<body>
	<div class="hover:drop-shadow-md duration-300">
		<a href={url}>
			<p class="text-center bg-gray-300 hover:bg-gray-400 py-2 rounded">
				<a href={url} class="text-blue-500 hover:text-blue-700">{name}</a>
				<br />
				{description}
			</p>
		</a>
	</div>
</body>
