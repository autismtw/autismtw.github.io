// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
    type PageMeta = {
        title: string
        year: string
        month: string
        day: string
        author: string
        ord: number
        cw: string?
    }

    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {}
