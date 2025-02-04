<script>
    
    export let numOfPages;
    export let currentPage;

    
</script>

<div id="pages">
    <div id="pageLeft" class="pageArrow">
        <img src="IMG/Global/left-arrow.png" alt="">
    </div>

    {#each {length: numOfPages} as _, i}

        {#if i+1 == currentPage}
            <div class="pageNum active">{i+1}</div>
        {:else}
            <div class="pageNum">{i+1}</div>
        {/if}

    {/each}

    <div id="pageRight" class="pageArrow">
        <img src="IMG/Global/right-arrow.png" alt="">
    </div>
</div>

<p class="message">Összesen {numOfPages} oldal.</p>


<style lang="scss">

    #pages {
        display: flex;
        margin-top: -11px;
        gap: 3px;
        
        div {
            display: flex;
            height: 30px;
            width: 30px;
            border: 1px solid rgb(59, 68, 62);
            align-items: center;
            justify-content: center;
            border-radius: 3px;
        }

        div.active {
            background-color: rgb(128, 204, 154);
            font-weight: bold;
        }

        .pageArrow {

            border: none;
            width: 20px;
            padding: 8px;
            
            img {
                height: 100%;
            }
        }
    }

    .message {
        margin: 0;
        margin-bottom: 25px;
        margin-top: 6px;
        font-size: 14px;
    }


</style>