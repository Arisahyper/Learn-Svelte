<script lang="ts">
	import Button from '../components/common/Button.svelte';
	import PageDescription from '../components/common/PageDescription.svelte';
	let count: number = 0;
	const title: string = 'Reactive Statement';
	const description: string =
		"Reactive statement is a statement that can be changed by the user. It's a kind of variable that can be changed by the user.";

	// countの変更で発火
	$: if (count >= 10) {
		alert('countが最大を超えます');
		count = 9;
	}

	// countの変更で発火
	$: {
		console.log(count);
	}

	function handleClick() {
		count += 1;
	}
</script>

<body>
	<div class="py-4">
		<PageDescription {title} {description} />
	</div>
	<div class="text-center">
		<Button clickFunction={handleClick} />
		<p>{count}</p>
		<p>{count % 2 === 0 ? '偶数' : '奇数'}</p>
	</div>
</body>
