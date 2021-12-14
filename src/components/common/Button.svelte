<script lang="ts">
	export let clickFunction: () => void;
</script>

<body>
	<button
		class="bg-blue-400 hover:bg-blue-500 hover:drop-shadow-md duration-300 rounded"
		on:click={clickFunction}
	>
		<p class="m-2	">increment</p>
	</button>
</body>
