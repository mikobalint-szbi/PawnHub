<script>
    import { onMount } from "svelte";


    onMount((e)=>{
        location.assign("/")
    })

</script>

<div class="body">
    <h2 class="title">Hozzáférés megtagadva</h2>
    <p class="message">Kérjük, jelentkezzen be PawnHub-fiókjába az oldal tartalmának megtekintéséhez.</p>
</div>

<style lang="scss">

    .body {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .title {
            font-size: 35px;
            font-weight: 500;
            margin: 0;
        }

        .message {
            text-align: center;
            font-size: 30px;
            border: none;
            box-shadow: none;

        }
    }

</style>