<script>
    import { page } from '$app/stores'
    import { redirect } from '@sveltejs/kit'
    import { _BASE } from './+page'

    if ($page.status == 404) {
        redirect(302, `${_BASE}`)
    }
</script>

<article>
    <section>
        <h1>{$page.error?.message}</h1>
        <p>
            <a href={_BASE}>回到主頁</a>
        </p>
    </section>
</article>
