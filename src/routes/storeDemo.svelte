<!-- Incrementer.svelte -->
<script>
	import { count } from '../store/stores';
	import { isHome } from '../store/stores';
	isHome.update(() => false);

	function increment() {
		$count++; // 「$」を付けると、ストアの変数にアクセスできる
	}
</script>

<svelte:head>
	<title>Store Demo</title>
</svelte:head>

<body class="flex flex-wrap">
	<div class="py-3 mx-auto text-center">
		<button class="bg-blue-500 hover:bg-blue-700 rounded" on:click={increment}>
			<p class="m-2">increment</p>
		</button>
		<p>{$count}</p>
	</div>
</body>
