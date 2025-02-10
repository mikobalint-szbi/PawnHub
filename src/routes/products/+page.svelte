<script>
    import {open_popup, close_popup, save_popup} from "$lib/Popups/functions.js";
    import Shop_Products from "$lib/Pages/Shop_Products.svelte";
    import Cust_Products from "$lib/Pages/Cust_Products.svelte";
    import Layout from "../+layout.svelte";

    let isCustomer = true

</script>



{#if isCustomer}
    <Cust_Products/>
{:else}
    <Shop_Products/>
{/if}



<style lang="scss">
    
    @media (min-width: 0px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 140px; max-width: 140px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}



    }
    @media (min-width: 300px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}
    
    }
    @media (min-width: 340px) {
        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 185px; max-width: 185px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ display: none;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 280.5px;
        }
    }
    @media (min-width: 404px) {

        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 160px; max-width: 160px;}
        .col3{ display: none;}
        .col4{ display: none;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px; display: table-cell;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 300px;
        }
    
    }
    @media (min-width: 468px) {
        .col1{ width: 90px; max-width: 90px;}
        .col2{ width: 132px; max-width: 132px;}
        .col3{ display: none;}
        .col4{ width: 130px; max-width: 130px; display: table-cell;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 432px;
        }

    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media (min-width: 596px) {
        .col1{ width: 90px;}
        .col2{ width: 150px; max-width: 150px;}
        .col3{ width: 100px; max-width: 100px; display: table-cell;}
        .col4{ width: 130px;}
        .col5{ display: none;}
        .col6{ display: none;}
        .col7{ width: 90px; max-width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}

        
        #headDiv-lower{
            width: 561px;
        }
    }
    @media (min-width: 768px) {

        .col1{ width: 90px;}
        .col2{ width: 130px; max-width: 130px;}
        .col3{ width: 100px;}
        .col4{ width: 130px;}
        .col5{ width: 110px; max-width: 110px; display: table-cell;}
        .col6{ width: 90px;  max-width: 90px; display: table-cell;}
        .col7{ width: 90px;}
        .col8{ display: none;}
        .col9{ display: none;}


        #headDiv-lower{
            width: 741px;
        }

    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media (min-width: 992px) {
        .col1{ width: 110px; max-width: 110px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ width: 100px;}
        .col4{ width: 130px;}
        .col5{ width: 140px; max-width: 140px;}
        .col6{ width: 100px; max-width: 100px;}
        .col7{ width: 100px; max-width: 100px;}
        .col8{ width: 100px; max-width: 100px; display: table-cell;}
        .col9{ display: none;}

        #headDiv-lower{
            width: 951px;
        }

    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media (min-width: 1230px) {

        .col1{ width: 130px; max-width: 130px;}
        .col2{ width: 170px; max-width: 170px;}
        .col3{ width: 138px; max-width: 138px;}
        .col4{ width: 130px;}
        .col5{ width: 150px; max-width: 150px;}
        .col6{ width: 110px; max-width: 130px;}
        .col7{ width: 110px; max-width: 130px;}
        .col8{ width: 120px; max-width: 130px;} 
        .col9{ width: 140px; max-width: 140px; display: table-cell;}

        #headDiv-lower{
            width: 1198px;
        }
    }


    #body{

        #main-container{

            #main{

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
                    
                }
                td.col5{

                }
                
            }
        }

    }

    table#main{

        //background-color: rgb(170, 216, 184);
        box-shadow: 1px 1px 4px black;
    }

</style>