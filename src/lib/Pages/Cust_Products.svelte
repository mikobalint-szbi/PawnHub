<script>


</script>

<section id="body">


    <div id="head-div">
        <div id="h-col1">
            <a href="/home" id="back">
                <button>
                    <div id="b-col1">
                        <img src="IMG/Global/back.png" alt="Vissza" title="Vissza">
                    </div>
                    <div id="b-col2">
                        <p id="back-p">Vissza</p>
                    </div>
                </button>
            </a>
        </div>
        <div id="h-col2">
            <h1>Termékek</h1>


        </div>
        <div id="h-col3">
        </div>

    </div>

    <div id="headDiv-lower">

        <div id="searchBox">
            <div class="row1">
                <input type="text" id="searchBar" placeholder="Keresés...">
            </div>
            <div class="row2">
                <div class="col1">
                    <label for="selectCategory">Kategória:</label>
                    <select name="selectCategory" id="selectCategory"></select>
                </div>
                <div class="col2">
                    <label for=""></label>
                    <input type="number">
                    <label for=""></label>
                    <input type="number" name="" id="">
                </div>
            </div>
            <div class="row3">
                <h4>Keresés helye</h4>
            </div>
            <div class="row4">
                <select name="selectCounty" id="selectCounty"></select>
                <input type="text" placeholder="Város hozzáadása...">
                <div id="selectedSettlements"></div>
            </div>
        </div>

    </div>

    <div id="main-container">
        
    </div>

</section>

<style lang="scss">
    
    @media (min-width: 0px) {

    }
    @media (min-width: 300px) {

    
    }
    @media (min-width: 340px) {

    }
    @media (min-width: 404px) {

    
    }
    @media (min-width: 468px) {


    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {

    }
    @media (min-width: 768px) {


    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

    }


    #body{

        #headDiv-lower {

            height: fit-content;
            display: flex;
            justify-content: center;

            #searchBox {
                border: 1px solid black;
                padding: 10px;

                .row1 {
                    #searchBar {
                        width: 100%;
                    }
                }
                .row2 {
                    display: flex;

                    .col1 {
                        width: 50%;
                        display: flex;
                        border: 1px solid black;

                    }
                    .col2 {
                        width: 50%;
                        display: flex;
                        border: 1px solid black;
                    }
                }

            }



        }


    }


</style>