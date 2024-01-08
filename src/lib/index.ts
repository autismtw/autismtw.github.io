import { _BASE } from '../routes/+page'

// place files you want to import through the `$lib` alias in this folder.
export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob('/src/routes/pages/*.md')
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const page = (await resolver()) as { metadata: PageMeta }
            const postPath = path.slice(11, -3)

            return {
                metadata: page.metadata,
                path: `${_BASE}${postPath}`,
            }
        }),
    )

    const sortedPosts = allPosts.sort((a, b) => {
        return a.metadata.ord - b.metadata.ord
    })

    return sortedPosts
}
