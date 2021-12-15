<script>
	import '../app.css';
	import Header from '../components/common/Header.svelte';
	import Footer from '../components/common/Footer.svelte';
	import { isHome } from '../store/stores';
</script>

<body class="flex flex-col min-h-screen m-0">
	<main class="flex-grow bg-gray-100">
		<Header />
		<slot />
	</main>
	{#if !$isHome}
		<div class="pl-2 py-2 bg-gray-100">
			<a
				href="https://learn-svelte-kappa.vercel.app/"
				class="text-sm text-blue-500 hover:text-blue-700 bg-light-100">← Back to Home</a
			>
		</div>
	{/if}
	<Footer />
</body>
