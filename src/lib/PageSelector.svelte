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
    
</script>

<div id="pagesContainer">
    <div id="pages">
        <div id="pageLeft" class="pageArrow">
            <img src="IMG/Global/left-arrow.png" alt="">
        </div>


        {#if currentPage > 6 && currentPage >= numOfPages}
            <div class="pageNum">{currentPage-6}</div>
        {/if}
        {#if currentPage > 5 && currentPage >= numOfPages - 1}
            <div class="pageNum">{currentPage-5}</div>
        {/if}
        {#if currentPage > 4 && currentPage >= numOfPages - 2}
            <div class="pageNum">{currentPage-4}</div>
        {/if}
        {#if currentPage > 3}
            <div class="pageNum">{currentPage-3}</div>
        {/if}
        {#if currentPage > 2}
            <div class="pageNum">{currentPage-2}</div>
        {/if}
        {#if currentPage > 1}
            <div class="pageNum">{currentPage-1}</div>
        {/if}
    
        <div class="pageNum active">{currentPage}</div>

        {#if currentPage < numOfPages}
            <div class="pageNum">{Number(currentPage)+1}</div>
        {/if}
        {#if currentPage < numOfPages - 1}
            <div class="pageNum">{Number(currentPage)+2}</div>
        {/if}
        {#if currentPage < numOfPages - 2}
            <div class="pageNum">{Number(currentPage)+3}</div>
        {/if}
        {#if currentPage < numOfPages - 3 && currentPage <= 3}
            <div class="pageNum">{Number(currentPage)+4}</div>
        {/if}
        {#if currentPage < numOfPages - 4 && currentPage <= 2}
            <div class="pageNum">{Number(currentPage)+5}</div>
        {/if}
        {#if currentPage < numOfPages - 5 && currentPage <= 1}
            <div class="pageNum">{Number(currentPage)+6}</div>
        {/if}
        
        <div id="pageRight" class="pageArrow">
            <img src="IMG/Global/right-arrow.png" alt="">
        </div>
    </div>

    {#if numOfPages > 7}
        <p class="message">Összesen {numOfPages} oldal.</p>
    {/if}
</div>




<style lang="scss">

    #pagesContainer{

        margin-top: -11px;
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

        #pages {
            display: flex;

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
            margin-top: 6px;
            font-size: 13.5px;
        }

    }

</style>