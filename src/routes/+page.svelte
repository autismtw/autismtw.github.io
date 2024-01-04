<script>
    export let data
</script>

<article>
    <section>
        <h2>單親媽與寶貝亞斯兒的宏願</h2>
        <p>亞斯天生人格特質，常因成長環境造成原本天真無邪的孩子，在過程中越來越憂鬱厭世。</p>
        <p>希望藉由文章介紹，讓更多人理解接納，給亞斯們有活下去的勇氣。</p>

        <hr />

        <h2>作者簡介</h2>
        <h3>十六</h3>
        <ul>
            <li>姓名：江X虹</li>
            <li>網路暱稱：十六</li>
            <li>
                家中暱稱：「漂主」
                <sub>小孩無法直接叫「媽媽」，遂幫媽媽取了「漂亮公主」的暱稱，簡稱「漂主」。</sub>
            </li>
            <li>性別：游離，隨狀況改變成父親或母親</li>
        </ul>

        <hr />

        <h2>文章</h2>
        <ul>
            {#each data.posts as post}
                <li>
                    <a href={post.path}>
                        <code>{post.metadata.ord}</code> - {post.metadata.title}
                    </a>
                </li>
            {/each}
        </ul>
    </section>
</article>
