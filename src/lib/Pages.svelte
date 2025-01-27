<script>
    
    let { currentPage, numOfPages } = $props();
    
</script>

<div id="pages">
    <div id="pageLeft" class="pageArrow">
        <img src="IMG/Global/left-arrow.png" alt="">
    </div>

    {#each {length: 5} as _, i}
        <div class="pageNum">{i+1}</div>
    {/each}

    <div id="pageRight" class="pageArrow">
        <img src="IMG/Global/right-arrow.png" alt="">
    </div>
</div>


<style lang="scss">

    #pages {
        display: flex;
        margin-top: -11px;
        margin-bottom: 25px;
        gap: 3px;
        
        div {
            display: flex;
            height: 30px;
            width: 30px;
            border: 1px solid black;
            align-items: center;
            justify-content: center;
        }

        .pageArrow {
            
            padding: 6px;
            
            img {
                height: 100%;
            }
        }
    }

</style>