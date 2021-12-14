<script lang="ts">
	import Button from '../components/common/Button.svelte';
	import { isHome } from '../store/stores';

	isHome.update(() => false);

	const clickFunction: () => void = () => {
		console.log('click');
	};
</script>

<body>
	<Button {clickFunction} />
</body>
