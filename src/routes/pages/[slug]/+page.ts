import type { ComponentType } from 'svelte'

export async function load({ fetch, params }) {
    const posts = (await (await fetch('/api/posts')).json()) as {
        metadata: PageMeta
        path: string
    }[]

    const post = await import(`../${params.slug}.md`)

    const content = post.default as ComponentType
    const metadata = post.metadata as PageMeta

    const next = posts.find((p) => p.metadata.ord > metadata.ord)
    const prev = posts.findLast((p) => p.metadata.ord < metadata.ord)

    return {
        next,
        prev,
        content,
        ...metadata,
    }
}
