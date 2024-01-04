<script>
    import { page } from '$app/stores'
    import { redirect } from '@sveltejs/kit'

    if ($page.status == 404) {
        redirect(302, '/')
    }
</script>

<article>
    <section>
        <h1>{$page.error?.message}</h1>
        <a href="/">回到主頁</a>
    </section>
</article>
