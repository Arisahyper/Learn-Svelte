<script lang="ts">
	import { fade } from 'svelte/transition';
</script>

<body>
	<div id="stripe">123456789</div>
	<p transition:fade={{ delay: 250 }}>Hello World</p>
</body>

<style>
	#stripe {
		position: relative;
		cursor: pointer;
		width: 177px;
		height: 160px;
		left: 0;
		transition: left 5s cubic-bezier(0, 0, 1, 1);
	}
</style>
