<script lang="ts">
	import Button from '../components/common/Button.svelte';

	const clickFunction: () => void = () => {
		console.log('click');
	};
</script>

<body>
	<Button {clickFunction} />
</body>
