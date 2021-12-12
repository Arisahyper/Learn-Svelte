<script>
	const SvelteData = [
		{
			name: 'フューチャー技術ブログ',
			description: 'Svelteに入門した',
			url: 'https://future-architect.github.io/articles/20210622a/'
		},
		{
			name: 'How to Set Up SvelteKit with Tailwind CSS',
			description: 'Svelte-Kit + Tailwind CSSの環境構築',
			url: 'https://dev.to/swyx/how-to-set-up-svelte-with-tailwind-css-4fg5'
		},
		{
			name: 'Svelteとは',
			description: 'Zenn.dev Svelteとは',
			url: 'https://zenn.dev/toshitoma/articles/what-is-svelte'
		}
	];
	const TailwindData = [
		{
			name: 'Tailwind 基礎',
			description: '利用者爆増中 初めてでもわかるTailwind CSS入門 基礎編',
			url: 'https://reffect.co.jp/html/tailwindcss-for-beginners'
		},
		{
			name: 'デザインパターン',
			description: 'tailwind.cssでよく使うデザインパターン',
			url: 'https://jsnotice.com/posts/2020-04-30/'
		},
		{
			name: 'Tailwind チートシート',
			description: 'チートシート',
			url: 'https://tailwindcomponents.com/cheatsheet/'
		}
	];
	const ErrorData = [
		{
			name: '',
			description: '',
			url: ''
		},
		{
			name: '',
			description: '',
			url: ''
		},
		{
			name: '',
			description: '',
			url: ''
		}
	];
</script>

<svelte:head>
	<title>Link Collection</title>
</svelte:head>

<body>
	<h1 class="pl-3 pt-2 text-lg">Svelte</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each SvelteData as { name, description, url }}
			<div class="w-full lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a class="text-blue-500 hover:text-blue-700" href={url}>{url}</a>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Tailwind</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each TailwindData as { name, description, url }}
			<div class="w-full lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a class="text-blue-500 hover:text-blue-700" href={url}>{url}</a>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Error</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each ErrorData as { name, description, url }}
			<div class="w-full lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a class="text-blue-500 hover:text-blue-700" href={url}>{url}</a>
				</div>
			</div>
		{/each}
	</div>
</body>
