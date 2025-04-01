<script>
    import { onMount } from "svelte";
    import { logout } from "$lib/Scripts/functions.js";


    function toggle_userDropdown () {

        let ud = document.getElementById("userDropdown")

        if (ud.style.display == "none" || ud.style.display == "" ){

            ud.style.display = "flex"
        }
        else {
            ud.style.display = "none"

        }

    }

    let user = JSON.parse(localStorage["user"] ?? "[]");
    let isCustomer = user.isCustomer;

    onMount(()=>{



        if (localStorage["user"]) {

            document.getElementById("userBox").addEventListener("click", toggle_userDropdown)

            if (user.img) {

                document.getElementById("userBox-image").style.backgroundImage = `url('data:image/png;base64,${user.img}')`;
                document.getElementById("userDropDown-image").style.backgroundImage = `url('data:image/png;base64,${user.img}')`;
            }
            else {
                if (isCustomer) {
                    document.getElementById("userBox-image").style.backgroundImage = `url('IMG/Global/no-profile-image.png')`;
                    document.getElementById("userDropDown-image").style.backgroundImage = `url('IMG/Global/no-profile-image.png')`;
                }
                else {
                    document.getElementById("userBox-image").style.backgroundImage = `url('IMG/Global/no-shop-image-round.png')`;
                    document.getElementById("userDropDown-image").style.backgroundImage = `url('IMG/Global/no-shop-image.png')`;
                }
            }
        }

    })

</script>

<div id="header">
    <a id="logoBox" href="home">
        <img src="IMG/Global/logo.png" alt="Gyémánt logo" id="logo">
        <h3>PawnHub</h3>
    </a>

    {#if localStorage["auth_token"]}
        <div id="rightBox">
            <div id="userBox">
                <div alt="Profilkép" class="image" id="userBox-image"></div>
            </div>
            <div id="userDropdown">

                <div class="col1">
                    <div alt="Profilkép" class="image" id="userDropDown-image"></div>
                </div>
                <div class="col2">
                    <p class="userName">{user.username}</p>
                    <p class="userEmail">{user.email}</p>
                    <div class="buttons">
                        <button on:click={()=>location.assign('settings')}>
                            <img src="IMG/Global/settings.png" alt="Fiók kezelése">
                            <p>Fiók kezelése</p>
                        </button>
                        <button on:click={logout}>
                            <img src="IMG/Global/logout.png" alt="Kijelentkezés">
                            <p>Kijelentkezés</p>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    {/if}

</div>

<style lang="scss">
        
    @media (min-width: 0px) {
        
        #userDropdown {
            width: 300px;

            .col1 {
                width: 46%;
            }
            .col2 {
                width: 54%;
            }
        }

    }
    @media (min-width: 300px) {


    }
    @media (min-width: 340px) {

        #userDropdown {
            width: 320px;

            .col1 {
                width: 42%;
            }
            .col2 {
                width: 58%;
            }
        }

    }
    @media (min-width: 404px) {

        
    }
    @media (min-width: 468px) {

        #userDropdown {
            width: 380px;

            .col1 {
                width: 35%;
            }
            .col2 {
                width: 65%;
            }
        }

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


    #header{
        width: 100%;
        height: 65px !important;
        background-color: rgb(118,197,118);
        display: flex;
        align-items: center;
        box-shadow: 0px 0.8px 3px black;
        z-index: 300;
        justify-content: space-between;
        z-index: 4px;

        h3{
            font-size: 35px;
            font-weight: 300;
            margin: 0;
        }
        #logo{
            height: 40px;
            margin-left: 7px;
            margin-right: 7px;
        }

        #logoBox{
            display: flex;
            flex-direction: row;
            align-items: center;
            text-decoration: none;
            color: black;
        }

        #rightBox {
            height: 100%;
            padding: 7px;
            margin-right: 7px;
            width: 60px;

            #userBox{
                height: 100%;
                cursor: pointer;

                .image {
                    height: 52px;
                    width: 52px;
                    background-color: rgb(161, 213, 179);
                    border-radius: 5000px;
                    background-image: url("IMG/Global/no-profile-image.png");
                    background-size: cover;
                    background-position: center;
                    border: 1px solid rgb(106, 137, 116);
                }
            }
            #userDropdown {
                display: none;
                height: fit-content;
                z-index: 1;
                background-color: rgb(180, 221, 197);
                border: 1px solid black;
                position: absolute;
                top: 75px;
                right: 10px;
                box-shadow: 0.5px 0.5px 12px rgba($color: #000000, $alpha: 0.5);
                padding: 9px;
                border-radius: 3px;
                gap: 8px;

                .col1 {


                    .image {
                        width: 100%;
                        height: 100%;
                        border: 1px solid black;
                        border-radius: 4px;
                        background-color: rgb(161, 213, 179);
                        background-image: url("IMG/Global/no-profile-image.png");
                        background-size: cover;
                        background-position: center;
                    }
                }
                .col2 {

                    padding-top: 1px;
                    overflow: hidden;

                    .userName {
                        margin: 0;
                        font-size: 18px;
                        font-weight: 500;

                    }
                    .userEmail {
                        margin: 0;
                        font-size: 14px;
                    }

                    .buttons {
                        display: flex;
                        width: 100%;
                        flex-direction: column;
                        gap: 3px;
                        margin-top: 6.5px;

                        button {
                            height: 35px;
                            display: flex;
                            gap: 10px;
                            align-items: center;
                            padding-left: 4px;

                            img {
                                height: 90%;

                            }
                            p {
                                margin: 0;
                            }
                        }
                    }
                }
 

            }
        }

        

    }
</style>






