<!-- Incrementer.svelte -->
<script>
	import { count, isHome } from '../store/stores';
	import PageDescription from '../components/common/PageDescription.svelte';
	import Button from '../components/common/Button.svelte';

	isHome.update(() => false);

	const title = 'Incrementer';
	const description = 'A simple counter that increments by one.';

	function increment() {
		$count++; // 「$」を付けると、ストアの変数にアクセスできる
	}
</script>

<svelte:head>
	<title>Store Demo</title>
</svelte:head>

<body class="flex flex-wrap">
	<div class="py-3 mx-auto text-center">
		<div class="py-4">
			<PageDescription {title} {description} />
		</div>
		<Button clickFunction={increment} />
		<p>{$count}</p>
	</div>
</body>
