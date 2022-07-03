<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	let dataList = [];
	let taskName: string;
	let deadLine;

	axios.defaults.baseURL = 'http://localhost:8080';
	axios.defaults.headers.post['Access-Control-Allow-Origin'];
	axios.defaults.headers.get['Access-Control-Allow-Origin'];
	axios.defaults.headers.post['Content-Type'] = 'application/json';

	async function getTask() {
		const res = await axios.get('/api/get');
		console.log(res.data);

		return res.data;
	}

	let promise: Promise<any> = getTask();

	const postHandler = () => {
		const params = new URLSearchParams();
		params.append('task_name', taskName);
		params.append('dead_line', deadLine);
		axios.post('/api/register', params).then((res) => {
			console.log(res);
			promise = getTask(); // thenの中で呼べばOK
		});
	};

	const deleteHandler = (id: number) => {
		axios
			.delete(`/api/delete/${id}`)
			.then((res) => {
				console.log(res);
				promise = getTask();
			})
			.catch((err) => {
				console.log(err);
			});
	};
</script>

<body>
	<button
		on:click={() => {
			deleteHandler(1);
		}}>DELETE TEST</button
	>
	<form action="http://localhost:8080/api/register" method="post" class="text-center">
		<div class="m-10">
			<h1>Taskの登録</h1>
			<input
				type="text"
				name="task_name"
				placeholder="task_name"
				class="border border-black px-2 py-1"
				bind:value={taskName}
			/>
			<input
				type="datetime-local"
				name="dead_line"
				placeholder="dead_line"
				class="border border-black px-2 py-1"
				bind:value={deadLine}
			/>
			<button type="button" class="border border-black px-2 py-1" on:click={postHandler}>
				<p>送信</p>
			</button>
		</div>
	</form>

	{#await promise then data}
		{#each [...data].reverse() as d}
			<div class="mx-20 my-12 border border-black">
				<div class="p-10">
					<p>ID: {d.ID}</p>
					<p>タスク: {d.TaskName}</p>
					<p>完了: {d.IsDone}</p>
					<p>期限: {d.Deadline}</p>
					<p>作成: {d.CreatedAt}</p>
					<p>更新: {d.UpdatedAt}</p>
					<button class="border border-black mt-2 mr-2 hover:text-white hover:bg-black">
						<p class="mx-3 my-1">編集</p>
					</button>
					<button
						class="border border-black mt-2 mr-2 hover:text-white hover:bg-black"
						on:click={() => {
							deleteHandler(d.ID);
						}}
					>
						<p class="mx-3 my-1">削除</p>
					</button>
				</div>
			</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</body>
