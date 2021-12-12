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
	<button on:click={increment}>+1</button>
	<p>{$count}</p>
</body>
