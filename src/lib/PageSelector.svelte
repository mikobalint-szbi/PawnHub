<script>
    
    export let numOfPages;
    export let currentPage;
    export let url;

    url = url.replace(/&page.*/, '');
    url = url.replace(/\?page.*/, '');

    function makeUrl(pageNum) {
        if (url.includes("?")) {
            return `${url}&page=${pageNum}`
        }
        else {
            return `${url}?page=${pageNum}`
        }
    }

    function makeFunc (pageNum) {
        if (pageNum <= numOfPages && pageNum > 1) {
            return ()=> {
                location.assign(makeUrl(pageNum))
            }
        }
        else {
            return ()=>{}
        }

    }
    
</script>

    
{#if numOfPages > 1}
<div id="pagesContainer" style="display: none;">
    <div id="pages">
        <button id="pageLeft" class="pageArrow" on:click={makeFunc(currentPage-1)}>
            <img src="IMG/Global/left-arrow.png" alt="">
        </button>

        {#if currentPage > 6 && currentPage >= numOfPages}
            <button class="pageNum" on:click={makeFunc(currentPage-6)}>{currentPage-6}</button>
        {/if}
        {#if currentPage > 5 && currentPage >= numOfPages - 1}
            <button class="pageNum" on:click={makeFunc(currentPage-5)}>{currentPage-5}</button>
        {/if}
        {#if currentPage > 4 && currentPage >= numOfPages - 2}
            <button class="pageNum" on:click={makeFunc(currentPage-4)}>{currentPage-4}</button>
        {/if}
        {#if currentPage > 3}
            <button class="pageNum" on:click={makeFunc(currentPage-3)}>{currentPage-3}</button>
        {/if}
        {#if currentPage > 2}
            <button class="pageNum" on:click={makeFunc(currentPage-2)}>{currentPage-2}</button>
        {/if}
        {#if currentPage > 1}
            <button class="pageNum" on:click={makeFunc(currentPage-1)}>{currentPage-1}</button>
        {/if}
    
        <button class="pageNum active">{currentPage}</button>

        {#if currentPage < numOfPages}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+1)}>{Number(currentPage)+1}</button>
        {/if}
        {#if currentPage < numOfPages - 1}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+2)}>{Number(currentPage)+2}</button>
        {/if}
        {#if currentPage < numOfPages - 2}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+3)}>{Number(currentPage)+3}</button>
        {/if}
        {#if currentPage < numOfPages - 3 && currentPage <= 3}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+4)}>{Number(currentPage)+4}</button>
        {/if}
        {#if currentPage < numOfPages - 4 && currentPage <= 2}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+5)}>{Number(currentPage)+5}</button>
        {/if}
        {#if currentPage < numOfPages - 5 && currentPage <= 1}
            <button class="pageNum" on:click={makeFunc(Number(currentPage)+6)}>{Number(currentPage)+6}</button>
        {/if}
        
        <button id="pageRight" class="pageArrow"  on:click={makeFunc(Number(currentPage)+1)}>
            <img src="IMG/Global/right-arrow.png" alt="">
        </button>

    </div>

    {#if numOfPages > 7}
        <p class="message">Összesen {numOfPages} oldal.</p>
    {/if}
</div>
{/if}



<style lang="scss">

    #pagesContainer{

        margin-top: -11px;
        margin-bottom: 25px;
        display: flex; //flex
        visibility: hidden;
        flex-direction: column;
        align-items: center;

        #pages {
            display: flex;

            gap: 3px;
            
            button {
                display: flex;
                height: 30px;
                width: 30px;
                border: 1px solid rgb(59, 68, 62);
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                background-color: rgba($color: #000000, $alpha: 0.0);
            }

            button.active {
                background-color: rgb(128, 204, 154);
                font-weight: bold;
                cursor: default;
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
            margin-top: 6px;
            font-size: 13.5px;
        }

    }

</style>