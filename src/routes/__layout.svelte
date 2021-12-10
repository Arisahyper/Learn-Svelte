<script>
	import '../app.css';
	import Header from '../components/common/Header.svelte';
	import Footer from '../components/common/Footer.svelte';
</script>

<body class="flex flex-col min-h-screen m-0">
	<main class="flex-grow">
		<Header />
		<slot />
	</main>
	<Footer />
</body>
