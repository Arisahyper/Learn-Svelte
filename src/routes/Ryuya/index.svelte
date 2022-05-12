<script lang="ts">
	let musicTitle = '銀河鉄道 999';

	const clickhandler = (currentMusic) => {
		musicTitle = currentMusic;
	};

	const list = [
		{
			title: '銀河鉄道 999',
			musicTime: '4:00'
		},
		{
			title: '銀河鉄道 998',
			musicTime: '3:00'
		},
		{
			title: '銀河鉄道 997',
			musicTime: '2:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		},
		{
			title: '銀河鉄道 996',
			musicTime: '1:00'
		}
	];
</script>

<body>
	<!-- HTML -->
	<h1 class="bg-gray-100 fixed">現在流れている音楽：{musicTitle}</h1>
	<button
		type="button"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		on:click={() => {
			clickhandler('チェリボム');
			// 音楽流す処理
		}}>Default</button
	>
	{#each list as item}
		<div class="bg-gray-600 m-6 p-2 rounded-full">
			<button on:click={() => clickhandler(item.title)}>
				<h1 class="text-white ml-10">{item.title}</h1>
				<p class="text-white ml-10">{item.musicTime}</p>
			</button>
		</div>
	{/each}
</body>

<style>
	/* CSS
	.ryuya {
		color: red;
	}

	.oga {
		color: green;
	} */
</style>
