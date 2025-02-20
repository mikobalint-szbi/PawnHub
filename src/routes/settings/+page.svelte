<script>

    import { onMount } from "svelte";
    
    function open_settlDropdown(){
        
        let dropdown = document.getElementById("dropdownContent")
        let input = document.getElementById("settlInput")
        dropdown.style.width = input.offsetWidth + "px"
        
        console.log(input.value)
    
        if (input.value != ""){ 
    
            dropdown.style.display = "block"
    
            if (input.value.length >= 2){
                // API-kérés:
                // Lekéri az összeset, ami a megadott két betűvel kezdődik,
                // azután, amíg az első két betű nem változik, a JS maga végzi a szűrést a harmadik betűtől fogva
            }
    
        }
        else {
            dropdown.style.display = "none"
        }
    
    }
    
    onMount(()=> {
    
        document.getElementById("settlInput").addEventListener('keyup', open_settlDropdown)
    
        //document.onkeypress = open_settlDropdown
    
        window.addEventListener("resize", ()=> {
    
            if (document.getElementById("dropdownContent") != null){

                document.getElementById("dropdownContent").style.width = document.getElementById("settlInput").offsetWidth + "px"
            }
        })
    
    })
    
    
    </script>
    
    <section id="body">
    
    
        <div id="head-div">
            <div id="h-col1">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <a on:click={()=>window.history.go(-1)} id="back">
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
                <h1>Fiókbeállítások</h1>
    
    
            </div>
            <div id="h-col3">
            </div>
        </div>
    
        <div id="main-container">
            
        </div>
    
    </section>
    
    <style lang="scss">
        
        @media (min-width: 0px) {
    
            #main-container{
                width: 90%;
            }
    
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
    
            #main-container{
                width: 87%;
                max-width: 1000px;
            }

    
        }
        @media (min-width: 768px) {
    
            #main-container {
                width: 80%;
                max-width: 1000px;
            }
    
        }
        /* Large devices (laptops/desktops, 992px and up) */
        @media (min-width: 992px) {
    

        }
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        @media (min-width: 1230px) {
    

    
        }
    
    
        #body{
    
            #head-div {
                margin-bottom: 8px;
                #h-col2 {
                    h1 {
                        margin: 0 !important;
                    }
                }
            }
    
    
            #main-container {
    
                margin-bottom: 30px;
                border: 1px solid black;

            }
    
        }
    
    
    </style>