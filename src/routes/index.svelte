<script lang="ts">
	import Header from '../components/Root/Header.svelte';
	import Footer from '../components/Root/Footer.svelte';

	const script_name = 'svelte';
	const word = 'This is a tutorial on an innovative tool called the svelte kit.\n';
</script>

<body class="flex flex-col min-h-screen">
	<div class="py-2">
		<Header />
	</div>
	<main class="flex-grow">
		<div class="text-center py-4">
			<h1 class="text-red-500 py-2 leading-6 sm:text-lg sm:leading-7">
				Hello {script_name}!
			</h1>

			<p class="text-center">
				{word}<br />
			</p>
		</div>
	</main>

	<div>
		<Footer />
	</div>
</body>

<style>
</style>
