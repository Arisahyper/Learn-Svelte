import PageDescription from './PageDescription';

const app = new PageDescription({
	target: document.body,
	props: {
		title: 'svelte',
		description:
			'svelte is a UI framework for building user interfaces. It is designed to be simple, yet powerful and flexible.'
	}
});

export default app;
