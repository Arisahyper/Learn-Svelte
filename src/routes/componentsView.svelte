<script lang="ts">
	import Button from '../components/common/Button.svelte';
	import PageDescription from '../components/common/PageDescription.svelte';
	import { isHome } from '../store/stores';

	isHome.update(() => false);

	const clickFunction: () => void = () => {
		console.log('click');
	};

	const pageData = {
		title: 'Page Title',
		description: 'Page Description'
	};
</script>

<body>
	<Button {clickFunction} />
	<!-- ↓これでもいける -->
	<PageDescription {...pageData} />
</body>
