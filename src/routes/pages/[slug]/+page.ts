import type { ComponentType } from 'svelte'

export async function load({ fetch, params }) {
    const post = await import(`../${params.slug}.md`)
    const Content = post.default as ComponentType

    const metadata = post.metadata as PageMeta

    const next = (await (await fetch(`/api/next?from=${metadata.ord}`)).json()) as {
        metadata: PageMeta
        path: string
    }

    const prev = (await (await fetch(`/api/prev?from=${metadata.ord}`)).json()) as {
        metadata: PageMeta
        path: string
    }

    return {
        next,
        prev,
        Content,
        ...metadata,
    }
}
