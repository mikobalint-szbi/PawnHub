<script>

    function psOption1_clicked(){
        document.getElementById("ps-option1").classList.add("active")
        document.getElementById("ps-option2").classList.remove("active")
        document.getElementById("ps-option3").classList.remove("active")
        console.log("djéflj")
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
<section id="body">

    <div id="head-div">
        <div id="h-col1">
            <a href="/home" id="back">
                <button>
                    <div id="b-col1">
                        <img src="IMG/back.png" alt="Vissza">
                    </div>
                    <div id="b-col2">
                        <p id="back-p">Vissza</p>
                    </div>
                </button>
            </a>
        </div>
        <div id="h-col2">
            <h1>Termékek</h1>

            <div id="product-status">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option1" class="ps-option active" on:click={psOption1_clicked} >
                    <p>Zálog</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option2" class="ps-option"  on:click={psOption2_clicked}>
                    <p>Eladó</p>
                </div>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div id="ps-option3" class="ps-option"  on:click={psOption3_clicked}>
                    <p>Archivált</p>
                </div>
            </div>

        </div>
        <div id="h-col3">

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
                <a class="row" href="">
                    <td class="col1">
                        <img src="IMG/no-image.png" alt="">
                    </td>
                    <td class="col2">Tárgy neve</td>
                    <td class="col3">Karórák</td>
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
                    <td class="col6">20 000 Ft</td>
                    <td class="col7">150 000 Ft</td>
                    <td class="col8">Kifogástalan</td>
                    <td class="col9">Kirakat alsó polc</td>
                </a>
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

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 116px;}
        .col2{ width: 170px;}
        .col3{ width: 150px;}
        .col4{ width: 80px;}
        .col5{ width: 150px;}
        .col6{ width: 130px;}
        .col7{ width: 130px;}
        .col8{ width: 130px;} 
        .col9{ width: 140px;}
    }

    #body{
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        #head-div{
            margin-top: 30px;
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

                #product-status{
                    display: flex;
                    margin-bottom: 18px;
                    border: 1px solid black;
                    border-radius: 5px;
                    box-shadow: 0.5px 0.5px 1px black;


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

            #back{
                margin-top: 5px;
                text-decoration: none;
                color: black;

                button{
                    display: flex;
                    
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

        #main-container{

            #main{
                border-collapse: collapse;
                
                td, th{
                    border: 1px solid black;
                    text-align: left;
                    vertical-align: middle;
                    padding: 3px;
                }
                th{
                    font-weight: 600;
                }

                .row{
                    display: table-row;
                    text-decoration: none !important;
                    color: black !important;
                }



                .col1{

                    img{
                        width: 100%;
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
                            img{
                                width: 100%;
                            }
                        }
                    }

                }
                .col5{
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
                        }
                        p{
                            margin: 0;
                            text-align: center;
                        }

                    }
                }
                
            }
        }


    }

</style>