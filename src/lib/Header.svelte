

<div id="header">
    <div id="logoBox">
        <img src="IMG/logo.png" alt="Gyémánt logo" id="logo">
        <h3>PawnHub</h3>
    </div>

    <div id="loginBox">
        <div class="subLogin">
            <label for="l-username">Felhasználónév vagy e-mail:</label>
            <input type="text" name="l-username" id="l-username">
        </div>
        <div class="subLogin">
            <label for="l-password">Jelszó:</label>
            <input type="password" name="l-password" id="l-password">
        </div>
        <div class="subLogin">
            <button id="login">Bejelentkezés</button>
        </div>

    </div>
</div>

<style lang="scss">
    
    #header{
        width: 100%;
        height: 65px;
        background-color: rgb(109, 194, 106);
        display: flex;
        align-items: center;
        box-shadow: 0px 0.8px 3px black;

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
        }

        #loginBox{
            display: flex;
            flex-direction: row;
            margin-left: auto;
            margin-right: 30px;
            justify-content: center;

            .subLogin{
                display: flex;
                flex-direction: column;
                justify-content: end;
                margin: 0 5px;

                label{
                    font-size: 12px;
                    margin-left: 1px;
                }
            }
        }
    }
</style>






