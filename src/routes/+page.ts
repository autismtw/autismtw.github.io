// FIXME this is bullshit, this is unnecessary, this is a svelte bug.
export const _BASE = '/blog'

export async function load({ fetch }) {
    const response = await fetch(`${_BASE}/api/posts`)
    const posts = await response.json()

    return {
        posts,
    }
}
