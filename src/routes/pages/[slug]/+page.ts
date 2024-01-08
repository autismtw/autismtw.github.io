import type { ComponentType } from 'svelte'
import { _BASE } from '../../+page'

export async function load({ fetch, params }) {
    const post = await import(`../${params.slug}.md`)
    const content = post.default as ComponentType

    const metadata = post.metadata as PageMeta

    const next = (await (await fetch(`${_BASE}/api/next?from=${metadata.ord}`)).json()) as {
        metadata: PageMeta
        path: string
    }

    const prev = (await (await fetch(`${_BASE}/api/prev?from=${metadata.ord}`)).json()) as {
        metadata: PageMeta
        path: string
    }

    return {
        next,
        prev,
        content,
        ...metadata,
    }
}
