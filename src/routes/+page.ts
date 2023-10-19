import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		post: {
			title: 'This got loaded before the component mounted! SSR LOADING I GUESS??',
			content: `Content for goes here`,
		},
	};
};
