import adapter from '@sveltejs/adapter-static'

import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: '404.html',
        }),
        paths: {
            base: process.argv.includes('dev') ? '' : process.env.BASE_PATH,
        },
    },
    extensions: ['.svelte', '.md'],
    preprocess: [
        sveltePreprocess(),
        mdsvex({
            extensions: ['.md'],
        }),
    ],
}

export default config
