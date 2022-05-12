<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	let dataList = [];

	axios.defaults.baseURL = 'http://localhost:8080';
	axios.defaults.headers.post['Access-Control-Allow-Origin'];
	axios.defaults.headers.get['Access-Control-Allow-Origin'];

	// axios.get('/api/get').then(({ data }) => {
	// 	// console.log(data);
	// 	dataList.push(...data);
	// });

	async function getTask() {
		const res = await axios.get('/api/get');
		console.log(res.data);

		return res.data;
	}

	let promise: Promise<any> = getTask();
</script>

<body>
	<form action="http://localhost:8080/api/register" method="post" class="text-center">
		<h1>taskの登録</h1>
		<input type="text" name="task_name" placeholder="task_name" class="border border-black" />
		<input
			type="datetime-local"
			name="dead_line"
			placeholder="dead_line"
			class="border border-black"
		/>
		<input type="submit" value="submit" class="border border-black" />
	</form>

	{#await promise then data}
		{#each [...data].reverse() as d}
			<div>
				<p>{d.ID}</p>
				<p>{d.TaskName}</p>
				<p>{d.IsDone}</p>
				<p>{d.Deadline}</p>
				<p>{d.CreatedAt}</p>
				<p>{d.UpdatedAt}</p>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</body>
