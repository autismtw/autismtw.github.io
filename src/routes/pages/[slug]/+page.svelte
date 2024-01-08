<script lang="ts">
    export let data

    function formatDate({
        year,
        month,
        day,
    }: {
        year: string | undefined
        month: string | undefined
        day: string | undefined
    }) {
        if (year && month && day) {
            return `${year} / ${month} / ${day}`
        }
    }

    function formatWithColon(s?: string) {
        return s ? `：${s}` : ''
    }
</script>

<section>
    <nav>
        <a href={data.prev?.path}>上一篇{formatWithColon(data.prev?.metadata?.title)}</a>

        <p>正在顯示：第 <code>{data.ord}</code> 篇</p>

        <a href={data.next?.path}>下一篇{formatWithColon(data.next?.metadata?.title)}</a>
    </nav>
</section>

<article>
    <h1>{data.title || '無題'}</h1>
    <header>
        <p>發布時間：<code>{formatDate(data) || '未知'}</code></p>
        <p>作者：{data.author || '無名'}</p>
    </header>
    <hr />
    <section>
        <svelte:component this={data.content} />
    </section>
</article>
