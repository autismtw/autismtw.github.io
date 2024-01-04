import { fetchMarkdownPosts } from '$lib'
import { json } from '@sveltejs/kit'

export const GET = async ({ request }) => {
    const posts = await fetchMarkdownPosts()
    const from = new URL(request.url).searchParams.get('from')
    const fromInt = from && Number.parseInt(from)
    const r = fromInt && posts.findLast((p) => p.metadata.ord < fromInt)

    if (r != undefined) {
        return json(r)
    } else {
        return json('undefined')
    }
}
