<script>
    import ProductPopup from "$lib/Popups/ProductPopup.svelte";
    import {open_product, close_product, save_product} from "$lib/Popups/functions.js";


    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.remove("active")
    }
    function psOption2_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.add("active")
        document.getElementById("ps-option3").classList.remove("active")
    }
    function psOption3_clicked(){
        document.getElementById("ps-option1").classList.remove("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.add("active")
    }



</script>

<section id="popupBody">
    <ProductPopup/>
</section>

<section id="body">


    <div id="head-div">
        <div id="h-col1">
            <a href="/home" id="back">
                <button>
                    <div id="b-col1">
                        <img src="IMG/back.png" alt="Vissza" title="Vissza">
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

        <div id="hl-col1">

        </div>
        <div id="hl-col2">

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} tabindex="0" role="button">
                    <p>Zálog</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked} tabindex="0" role="button">
                    <p>Eladó</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option3" class="ps-option"  on:click={psOption3_clicked} tabindex="0" role="button">
                    <p>Archivált</p>
                </div>
            </div>

        </div>
        <div id="hl-col3">
            <button id="add-button" on:click={() => open_product(true)}>
                <div id="add-col1">
                    <img src="IMG/add.png" alt="Hozzáadás" title="Hozzáadás">
                </div>
                <div id="add-col2">
                    <p>Hozzáadás</p>
                </div>
            </button>
        </div>
        
    
    </div>

    <div id="main-container">
        <table id="main">
            <thead>
                <th class="col1">Kép</th>
                <th class="col2">Név</th>
                <th class="col3">Kategória</th>
                <th class="col4">Kölcsön</th>
                <th class="col5">Ügyfél</th>
                <th class="col6">Kifizetett érték</th>
                <th class="col7">Becsült érték</th>
                <th class="col8">Állapot</th>
                <th class="col9">Hely</th>
            </thead>
            <tbody>

                {#each {length: 17} as _, i}
                <div class="row" href="">
                    <td class="col1" href="" tabindex="0" on:click={() => open_product(false)}>
                        <img src="IMG/no-image.png" alt="">
                    </td>
                    <td class="col2"  on:click={() => open_product(false)}>Tárgy neve</td>
                    <td class="col3"  on:click={() => open_product(false)}>Karórák</td>
                    <td class="col4">
                        <div class="flex">
                            <button>
                                <img src="IMG/Home/loans.png" alt="Kölcsön">
                            </button>
                        </div>

                    </td>
                    <td class="col5">
                        <div class="flex">
                            <img src="IMG/no-profile-image.png" alt="">
                            <p>Péld Aladár</p>
                        </div>

                    </td>
                    <td class="col6" on:click={() => open_product(false)}>20 000 Ft</td>
                    <td class="col7" on:click={() => open_product(false)}>150 000 Ft</td>
                    <td class="col8" on:click={() => open_product(false)}>Kifogástalan</td>
                    <td class="col9" on:click={() => open_product(false)}>Kirakat alsó polc</td>
                </div>
                {/each}

                
            </tbody>
        </table>
    </div>

</section>

<style lang="scss">

    
    @media (min-width: 0px) {
        .col1{ width: 90px;}
        .col2{ width: 110px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}


        #back{
            button{
                width: 43px;
                height: 40px;

                #b-col1{
                    width: 53px;
                }
                #b-col2{
                    display: none;
                    p{
                        display: none;
                    }
                }
            }
        }

        #h-col1, #h-col3{
            width: 25%;
        }
        #h-col2{
            width: 50%;

            h1{
                font-size: 26px;
            }
        }

        #product-status{
            margin-top: 4px;
            width: 220px;
        }

        #headDiv-lower{
            width: 100%;
            height: 80px;
            grid-template-rows: repeat(2, 1fr);
            grid-template-columns: 1fr;

            margin-bottom: 5px;
            row-gap: 5px;

            #hl-col1{
                display: none;
            }

            #hl-col2{
                grid-row: 1;
                justify-self: center;
            }

            #hl-col3{
                grid-row: 2;
                width: 100%;
                display: flex;
                justify-self: center;
                align-self: center;
                justify-content: center;

            }

            
        }

        
        #add-button{
            width: 220px;
            justify-content: center;
            height: 33px !important;
            margin-bottom: 3px;

            #add-col2{
                display: flex;

            }

            #add-col1{
                width: 35px;
                padding-left: 0px;

                display: flex;
                align-items: center;
                justify-content: center;
                height: 85%;

                img{
                    height: 100%;
                }
            }
        }



    }
    @media (min-width: 340px) {
        .col1{ width: 90px;}
        .col2{ width: 110px;}
        .col3{ display: none;}
        .col4{ width: 80px; display: table-cell;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}

        #h-col1, #h-col3{
            width: 20%;
        }
        #h-col2{
            width: 60%;

            h1{
                font-size: 30px;
            }
        }

        #product-status{
            width: 250px;
            margin-top: 0px;
        }

        #headDiv-lower{
            width: 280.5px;
        }

        #add-button{
            width: 250px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {
        .col1{ width: 90px;}
        .col2{ width: 110px;}
        .col3{ width: 100px; display: table-cell;}
        .col4{ width: 80px;}
        .col5{ display: none;}
        .col6{ width: 90px; display: table-cell;}
        .col7{ width: 90px; display: table-cell;}
        .col8{ display: none;}
        .col9{ display: none;}

        #h-col1, #h-col3{
            width: 15%;
        }
        #h-col2{
            width: 70%;

            h1{
                font-size: 40px;
            }
        }

        #product-status{
            width: 350px;
        }

        #back{
            button{
                height: 50px;
                width: 53px;
            }
        }

        #headDiv-lower{
            width: 561px;
            height: 50px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 1fr;
            margin-bottom: 12px;

            #hl-col1{
                display: flex;
                grid-column: 1;
            }

            #hl-col2{
                grid-row: 1;
                grid-column: 2;
                height: 100%;
            }

            #hl-col3{
                grid-row: 1;
                grid-column: 3;
                display: flex;

                justify-content: end;
                justify-self: end;
                align-self: end;
                align-items: end;
            }
        }

        #add-button{
            width: fit-content;
            height: 40px !important ;
            margin-bottom: 0px;

            #add-col2{
                display: none;
            }

            #add-col1{
                width: 35px;
                padding-left: 0px;

                display: flex;
                align-items: center;
                justify-content: center;
                height: 85%;

                img{
                    height: 100%;
                }
            }
        }

    }
    @media (min-width: 768px) {

        .col1{ width: 90px;}
        .col2{ width: 110px;}
        .col3{ width: 100px;}
        .col4{ width: 80px;}
        .col5{ width: 90px; display: table-cell;}
        .col6{ width: 90px;}
        .col7{ width: 90px;}
        .col8{ display: none;}
        .col9{ width: 90px; display: table-cell;}

        #product-status{
            width: 400px;
        }

        #headDiv-lower{
            width: 741px;
        }

        #add-button{
            img{
                margin-left: 1.4px;
            }
            #add-col2{
                display: flex;
            }

            #add-col1{
                width: 28px;
                padding-left: 1.3px;
                display: flex;
                align-items: center;
                justify-content: start;
                height: 75%;

                img{
                    height: 100%;
                }
            }
        }


    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        .col1{ width: 110px;}
        .col2{ width: 150px;}
        .col3{ width: 100px;}
        .col4{ width: 80px;}
        .col5{ width: 110px;}
        .col6{ width: 100px;}
        .col7{ width: 100px;}
        .col8{ width: 100px; display: table-cell;}
        .col9{ width: 100px;}


        #back{
            button{
                width: 123px;

                #b-col1{
                    width: 45px;
                }
                #b-col2{
                    width: 78px;
                    display: flex;
                    p{
                        display: block;
                    }
                }
            }
        }

        #headDiv-lower{
            width: 951px;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px;}
        .col2{ width: 170px;}
        .col3{ width: 138px;}
        .col4{ width: 80px;}
        .col5{ width: 150px;}
        .col6{ width: 130px;}
        .col7{ width: 130px;}
        .col8{ width: 130px;} 
        .col9{ width: 140px;}

        #headDiv-lower{
            width: 1198px;
        }

    }

    #popupBody{
        display: flex
    }


    #body{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        #head-div{
            margin-top: 40px;
            display: flex;
            flex-direction: row;
            width: 100%;

            #h-col1, #h-col3{
                display: flex;
                align-items:start;
                justify-content: center;
            }
            #h-col2{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                h1{
                    text-align: center;
                    font-weight: 600;
                    margin-bottom: 10px;
                    margin-top: 0px;
                }

 
            }

            
            #back{
                margin-top: 5px;
                text-decoration: none;
                color: black;

                button{
                    display: flex;
                    border-radius: 3px;
                    
                    #b-col1{

                        height: 100%;
                        display: flex;
                        align-items: center;
                        align-content: center;
                        img{
                            width: 100%;
                        }
                    }
                    #b-col2{
                        height: 100%;
                        display: flex;
                        align-content: center;
                        align-items: center;
                        justify-content: center;



                        p{
                            margin: 0;
                            font-size: 21px;
                        }
                    }


                }

            }

        }

        #headDiv-lower{
            display: grid;
            justify-content: center;
            //border: 1px solid black;



            #hl-col1, #hl-col3{


                #add-button{
                    height: fit-content;

                    border: 1px solid black;
                    border-radius: 5px;
                    box-shadow: 0.5px 0.5px 1px black;
                    display: flex;
                    align-items: center;
                    margin-right: 1px;
                    
                    #add-col2{
                        width: fit-content;
                        padding: 4px;
                        align-items: center;
                        height: 100%;
                        p{
                            margin: 0;
                        }
                    }
                }


            }

            #hl-col2{
                //border: 1px solid black;
                display: flex;
                align-items: end;



                #product-status{
                    display: flex;
                    border: 1px solid black;
                    border-radius: 5px;
                    box-shadow: 0.5px 0.5px 1px black;
                    height: 33px;


                    #ps-option2{
                        border-right: 1px solid black;
                        border-left: 1px solid black;
                    }
                    #ps-option1{
                        border-radius: 5px 0 0 5px;
                    }
                    #ps-option3{
                        border-radius: 0 5px 5px 0;

                    }

                    .ps-option{
                        cursor: pointer;
                        width: 33.3333%;
                        text-decoration: none;
                        color: black;
                        padding: 4px;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        p{
                            text-align: center;
                            font-weight: 400;
                            margin: 0;
                        }
                    }

                    .active{
                        background-color: rgb(118, 199, 146);
                        cursor: default;
                    }
                }

            }


        }


        #main-container{

            #main{
                border-collapse: collapse;
                margin-bottom: 35px;
                
                td, th{
                    border: 1px solid rgb(106, 137, 116);
                    text-align: left;
                    vertical-align: middle;
                    padding: 3px;
                }
                th{
                    font-weight: 600;
                    color: rgb(68, 90, 75);
                }
                td{
                    cursor: pointer;
                }

                .row{
                    display: table-row;
                    text-decoration: none !important;
                    color: black !important;
                }

                td.col2{
                    font-weight: 400;
                }


                td.col1{
                    display: table-cell;
                    text-align: center;
                    vertical-align: middle !important;
                    padding-top: 7px;
                    img{
                        background-color: rgb(161, 213, 179);
                        width: 90%;
                        border: 1px solid black;
                        border-radius: 4px;
                        box-shadow: 0.3px 0.3px 1px black;
                    }
                }
                .col4{
                    .flex{
                        width: 100%;
                        height: 100% !important;
                        display: flex;
                        align-content: center;
                        justify-content: center;

                        button{
                            width: 80%;
                            height: 90% !important;
                            z-index: 100;
                            img{
                                width: 100%;
                            }
                        }
                    }

                }
                td.col5{
                    .flex{
                        width: 100%;
                        height: 100% !important;
                        display: flex;
                        align-content: center;
                        justify-content: center;
                        flex-direction: column;

                        img{
                            width: 60%;
                            align-self: center;
                            margin: 4px;
                            background-color: rgb(161, 213, 179);
                            border: 1px solid black;
                            border-radius: 4px;
                            box-shadow: 0.3px 0.3px 1px black;
                        


                            
                        }
                        p{
                            font-size: 14px;
                            margin: 2px 2px;
                            text-align: center;
                        }

                    }
                }
                
            }
        }


    }

</style>