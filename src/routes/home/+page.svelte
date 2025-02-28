<script>

    let isCustomer = false

    //import {open_popup} from "$lib/Scripts/popup.js"
    //import {onMount} from "svelte";
    //onMount(()=>open_popup("productChooser",false, false))
</script>

<section id="body">


    <div id="welcome">
        <h2>Üdvözöljük, [FELHASZNÁLÓ]!</h2>
        <p>Reméljük, kellemesen telik a napja.</p>
    </div>
    <div id="options">


        <a class="optionBox" href="products">
            <div class="imageBox">
                <img class="image" src="IMG/Global/logo.png" alt="">
            </div>
            <div class="titleBox">
                <h3 class="title">{isCustomer ? "Termékek" : "Zálogtárgyak"}</h3>
            </div>
        </a>

        <a class="optionBox" href="{isCustomer ? 'shops' : 'customers'}">
            <div class="imageBox">
                <img class="image" src="{isCustomer ? 'IMG/Home/shops.png' : 'IMG/Home/customers.png'}" alt="Ügyfelek">
            </div>
            <div class="titleBox">
                <h3 class="title">{isCustomer ? "Zálogházak" : "Ügyfelek"}</h3>
            </div>
        </a>
    
        <a class="optionBox" href="loans">
            <div class="imageBox">
                <img class="image" src="IMG/Home/loans.png" alt="Adósságok">
            </div>
            <div class="titleBox">
                <h3 class="title">Adósságok</h3>
            </div>
        </a>
    
        <a class="optionBox" href="messages">
            <div class="imageBox">
                <img class="image" src="IMG/Home/messages.png" alt="Archívum">
            </div>
            <div class="titleBox">
                <h3 class="title">Üzenetek</h3>
            </div>
        </a>

    </div>

</section>

<style lang="scss">

    @media (min-width: 0px) {

        .optionBox{
            width: 100%;
            flex-direction: row;
            height: 80px;


            .imageBox{
                width: 30%;
                height: 100%;
                padding: 6px;
                display: flex;
                align-items: center;

                .image{
                    width: 100%;
                }
            }
            .titleBox{
                width: 70%;
                height: 100% !important;
                display: flex;
                padding-left: 14px;
                
                align-items: center !important;

                h3{
                    font-weight: 400;
                    margin-top: 0;
                    margin-bottom: 0;
                    font-size: 1em;
                }
            }
        }
        #options{
            gap: 10px;
        }

        #welcome{
            h2{
                font-size: 18px; 
            }
            p{
                font-size: 16px;
            }
        }
        .titleBox{
            font-size: 21px;
        }
        .imageBox{
            padding: 20px;
            padding-bottom: 8px;
        }
    }
    @media (min-width: 350px) {


        #options{
            gap: 13px;
        }

        #welcome{
            h2{
                font-size: 21px; 
            }
            p{
                font-size: 16px;
            }
        }

        .imageBox{
            padding: 12px !important;
        }



    }
    @media (min-width: 404px) {

        #welcome{
            h2{
                font-size: 23px; 
            }
            p{
                font-size: 17px;
            }
        }

        .titleBox{
            font-size: 18px;
        }
        .optionBox{
            flex-direction: column;
            width: 47%;
            height: fit-content;

        .imageBox{
            width: 100%;
            height: 80%;
            padding: 20px;

            .image{
                width: 100%;
            }
        }
        .titleBox{
            width: 100%;
            height: 20%;
            display: block;
            padding-left: 0px;

            h3{
                text-align: center;
                font-weight: 400;
                margin-top: 0;
                margin-bottom: 20px;

                font-size: 19px;
            }
        }
        }

    }
    @media (min-width: 468px) {

        #welcome{
            h2{
                font-size: 28px;
            }

        }

        .titleBox h3{
            font-size: 22px !important;
        }
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 600px) {
        .optionBox{
            width: 47%;
        }
        #options{
            gap: 20px;
        }

        #welcome{
            h2{
                font-size: 35px;
            }
            p{
                font-size: 21px;
            }
        }

        .titleBox{
            font-size: 25px;
        }
        .imageBox{
            padding: 30px;
        }
    }
    @media (min-width: 768px) {

        .optionBox{
            width: 39%;
        }

    }
    @media (min-width: 868px) {

        .optionBox{
            width: 32%;
        }

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        
        .optionBox{
            width: 21%;
        }
        #options{
            gap: 15px;
            height: 75%;
        }

        #body{
            height: 100%;
        }


    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1200px) {

        .optionBox{
            width: 16%;

            .title {
                font-size: 25px !important;
            }
        }

        #options{
            gap: 20px;
        }


    }

    #body{

        width: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 0;

        #welcome{
            height: 25%;
            display: flex;
            padding-top: 60px;
            align-items: center;
            align-content: center;
            justify-content: center;
            width: 100%;
            flex-direction: column;
            min-height: fit-content;

            h2{
                text-align: center;
                font-weight: 400;
                width: 100%;
                margin: 0;
            }
            p{
                margin: 0;
            }
        }

        #options{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: top;
            align-content: top;
            padding: 50px;
            min-height: fit-content;

            .optionBox {
                -webkit-transition:  -webkit-transform .2s ease-out;
                -moz-transition: -moz-transform .2s ease-out;
                -o-transition: -o-transform .2s ease-out;
                -ms-transition: -ms-transform .2s ease-out; 
                transition: transform .2s ease-out; 
            }
            .optionBox:hover {
                -webkit-transform:scale(1.04);
                -moz-transform:scale(1.04);
                -o-transform:scale(1.04);
                transform:scale(1.04);
            }


            .optionBox{
                text-decoration: none;
                color: black !important;
                cursor: pointer;
                border: 1px solid black;
                border-radius: 7px;
                background-color: rgb(161, 213, 179);
                display: flex;


                box-shadow: 0.5px 0.5px 2px black;


            }


        }


    }



</style>