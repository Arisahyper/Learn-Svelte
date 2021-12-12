<script>
	import { isHome } from '../store/stores';
	isHome.update(() => false);

	const SvelteData = [
		{
			name: 'Svelte',
			description: 'Svelte Official',
			url: 'https://svelte.dev/'
		},
		{
			name: 'Svelte-Kit',
			description: 'Svelte-Kit Official',
			url: 'https://kit.svelte.dev/'
		},
		{
			name: 'Svelte-Kit docs',
			description: 'Svelte-Kit Official Documentation',
			url: 'https://kit.svelte.dev/docs'
		},
		{
			name: 'Svelte-Tutorial',
			description: 'Svelte Official tutorials',
			url: 'https://svelte.dev/tutorial/basics'
		},
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
		},
		{
			name: 'Store 使い方',
			description: 'Svelteで作るTODOアプリ - 状態管理編',
			url: 'https://qiita.com/nabekou29/items/dba59de91812a500060b'
		}
	];
	const TailwindData = [
		{
			name: 'Tailwind',
			description: 'チートシート',
			url: 'https://tailwindcss.com/'
		},
		{
			name: 'Tailwind チートシート',
			description: 'チートシート',
			url: 'https://tailwindcomponents.com/cheatsheet/'
		},
		{
			name: 'Tailwind 基礎',
			description: '利用者爆増中 初めてでもわかるTailwind CSS入門 基礎編',
			url: 'https://reffect.co.jp/html/tailwindcss-for-beginners'
		},
		{
			name: 'デザインパターン',
			description: 'tailwind.cssでよく使うデザインパターン',
			url: 'https://jsnotice.com/posts/2020-04-30/'
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
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a
						class="text-blue-500 hover:text-blue-700"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						>{url}
					</a>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Tailwind</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each TailwindData as { name, description, url }}
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a
						class="text-blue-500 hover:text-blue-700"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						>{url}
					</a>
				</div>
			</div>
		{/each}
	</div>

	<h1 class="pl-3 text-lg">Error</h1>
	<hr class="ml-3 w-52 border-gray-500" />
	<div class="flex flex-wrap text-center">
		{#each ErrorData as { name, description, url }}
			<div class="w-full xl:w-1/4 lg:w-1/3 md:w-1/2 p-2">
				<div class="bg-gray-300 rounded p-2">
					<h1>{name}</h1>
					<p>{description}</p>
					<a
						class="text-blue-500 hover:text-blue-700"
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						>{url}
					</a>
				</div>
			</div>
		{/each}
	</div>
</body>
