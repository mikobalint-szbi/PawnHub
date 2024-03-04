<script>

</script>
<section id="body">
    <a href="home">Vissza</a>

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