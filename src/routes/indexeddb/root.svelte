<script lang="ts">
	import { browser } from '$app/env';

	const checkBrowser = () => {
		if (!window.indexedDB) {
			window.console.log(
				'このブラウザーは安定版の IndexedDB を対応していません。IndexedDB の機能は利用できません。'
			);
		} else {
			window.console.log('このブラウザーは安定版の IndexedDB を対応しています。');
		}
	};

	const openRequest = () => {
		let db;
		let version = 1;
		const request = indexedDB.open('database', version);
		request.onerror = function (event) {
			alert('IndexedDB が使えません');
		};
		request.onupgradeneeded = function (event: any) {
			console.log('onupgradeneeded');
			db = event.target.result;
			const objectStore = db.createObjectStore('items', { keyPath: 'id' });
			objectStore.createIndex('name', 'name', { unique: false });
			objectStore.createIndex('description', 'description', { unique: true });
		};
		request.onsuccess = function (event: any) {
			console.log('onsuccess');
			db = event.target.result;
		};

		console.log(db);

		return db;
	};

	const addData = () => {
		const db = openRequest();
		console.log('addData');
		const transaction = db.transaction(['items'], 'readwrite');
		transaction.oncomplete = function (event) {
			console.log('完了しました');
		};
		transaction.onerror = function (event) {
			console.log('エラーです', event);
		};

		const objectStore = transaction.objectStore('items');

		for (let i = 1; i < 10; i += 1) {
			objectStore
				.add({
					id: i,
					name: `テスト商品 ${i}`,
					description: `テスト商品 ${i} の説明`,
					add: '追加'
				})
				.onsuccess((event) => {
					console.log(event.target.result);
				});
		}
	};

	let d = [];

	const getData = (db) => {
		db.transaction(['items']).objectStore('items').get(3).onsuccess = function (event) {
			console.log('取得しました', event.target.result);
		};
	};

	if (browser) {
		let db = openRequest();
	}
</script>

<body>
	<h1>IndexedDB</h1>
	<button on:click={addData}>ADD</button>
	<!-- <button on:click={() => getData(openRequest())}>GET</button> -->
</body>
