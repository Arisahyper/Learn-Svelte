<script>
	const TailwindData = [
		{
			name: 'Tailwind CSS',
			description: 'tailwind.cssでよく使うデザインパターン',
			url: 'https://jsnotice.com/posts/2020-04-30/'
		},
		{
			name: 'フューチャー技術ブログ',
			description: 'Svelteに入門した',
			url: 'https://future-architect.github.io/articles/20210622a/'
		},
		{
			name: 'Sapper-Boilerplate',
			description: 'A starter project for building Svelte apps',
			url: ''
		}
	];
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<body class="flex flex-wrap text-center">
	<h1>Svelte</h1>
	{#each TailwindData as { name, description, url }}
		<div class="w-full lg:w-1/3 md:w-1/2 p-2">
			<div class="bg-gray-300 rounded p-2">
				<h1>{name}</h1>
				<p>{description}</p>
				<a class="text-blue-500 hover:text-blue-700" href={url}>{url}</a>
			</div>
		</div>
	{/each}
	<h1>Tailwind</h1>
	{#each TailwindData as { name, description, url }}
		<div class="w-full lg:w-1/3 md:w-1/2 p-2">
			<div class="bg-gray-300 rounded p-2">
				<h1>{name}</h1>
				<p>{description}</p>
				<a class="text-blue-500 hover:text-blue-700" href={url}>{url}</a>
			</div>
		</div>
	{/each}
</body>
