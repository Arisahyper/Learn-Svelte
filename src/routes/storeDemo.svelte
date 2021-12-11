<!-- Incrementer.svelte -->
<script>
	import { count } from '../store/stores';

	function increment() {
		$count++; // 「$」を付けると、ストアの変数にアクセスできる
	}
</script>

<body>
	<button on:click={increment}>+1</button>
	<p>{$count}</p>
</body>
