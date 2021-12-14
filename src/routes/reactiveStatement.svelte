<script lang="ts">
	import PageDescription from '../components/common/PageDescription.svelte';
	let count: number = 0;
	const title: string = 'Reactive Statement';
	const description: string[] = [
		'Reactive Statementのデモページです',
		'`$:`を使用することで変数の変更を監視して、',
		'関数等を再度発火させることができます。'
	];

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
	<button on:click={handleClick}>
		Clicked {count}
		{count === 1 ? 'time' : 'times'}
	</button>
</body>
