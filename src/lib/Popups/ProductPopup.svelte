<script>
    
</script>

<div id="popup">
    <div id="popup-grid">
        <div id="image" class="popupGrid-element">
            <img src="IMG/no-image.png" alt="">
        </div>
        <div id="product-name" class="popupGrid-element">
            <label for="p-name" class="p-label">Termék neve:</label>
            <input type="text" class="p-input" id="p-name">
        </div>
        <div id="status" class="popupGrid-element">
            <label for="p-status" class="p-label">Státusz:</label>
            <select id="p-status" class="p-input">
                <option value="">Zálog</option>
                <option value="">Eladó</option>
                <option value="">Archivált</option>
            </select>
        </div>
        <div id="category" class="popupGrid-element">
            <label for="p-category" class="p-label">Kategória:</label>
            <select id="p-category" class="p-input">
                <optgroup label="Elektronika">
                    <option value="">Mobiltelefon</option>
                    <option value="">Karóra</option>
                    <option value="">Játékkonzol</option>
                </optgroup>
                <optgroup label="Ékszerek">
                    <option value="">Gyűrű</option>
                    <option value="">Nyaklánc</option>
                    <option value="">Fülbevaló</option>
                </optgroup>

            </select>
        </div>
        <div id="condition" class="popupGrid-element">
            <label for="p-condition" class="p-label">Állapot:</label>
            <select id="p-condition" class="p-input">
                <option value="">Használatlan</option>
                <option value="">Kiváló</option>
                <option value="">Jó</option>
                <option value="">Kielégítő</option>
                <option value="">Lehasznált</option>
            </select>
        </div>
        <div id="payed-value" class="popupGrid-element">
            <label for="p-payedValue" class="p-label">Kifizetett érték:</label>
            <div class="pv-row">
                <input type="number" class="p-input" id="p-payedValue">
                <p>Ft</p>
            </div>

        </div>
        <div id="estimated-value" class="popupGrid-element">
            <label for="p-estimatedValue" class="p-label">Becsült érték:</label>
            <div class="pv-row">
                <input type="number" class="p-input" id="p-estimatedValue">
                <p>Ft</p>
            </div>
        </div>
        <div id="description" class="popupGrid-element">
            <label for="p-description" class="p-label">Leírás:</label>
            <textarea type="text" class="p-input" id="p-description"></textarea>
        </div>
        <div id="location" class="popupGrid-element">
            <label for="p-location" class="p-label">Hely:</label>
            <textarea type="" class="p-input" id="p-location"></textarea>
        </div>
        <div id="loan" class="popupGrid-element">
            Adósság
        </div>
        <div id="customer" class="popupGrid-element">
            <div id="customer-row1">
                <img src="IMG/no-profile-image.png" alt="">
            </div>
            <div id="customer-row2">
                <p>Péld Aladárné Teszt Ilona unokahúga</p>
            </div>

        </div>

    </div>
</div>



<style lang="scss">

    #popup{

        background-color: rgb(161, 213, 179);
        width: 800px;
        margin: auto;
        padding: 15px;
        margin-top: 40px;
        border: solid 1px black;
        box-shadow: 0.5px 0.5px 4px black;

        #popup-grid{
            display: grid;
            grid-template-rows: repeat(8, 1fr);
            grid-template-columns: repeat(12, 1fr);
            width: 100%;
            height: calc(800px * 0.7);


            

            .popupGrid-element{
                border: 0.5px solid rgb(106, 137, 116);
                display: flex;
                flex-direction: column;
                align-items: start;
                justify-content: center;
                padding: 6px;


            }

            #image{
                grid-row: 1 / 4;
                grid-column: 1 / 4;

                border-left-width: 2px;
                border-top-width: 2px;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }

            }
            #product-name{
                grid-row: 1 / 2;
                grid-column:  4 / 10;
                border-top-width: 2px;

                input{
                    width: 100%;
                }
            }
            #status{
                grid-row: 1;
                grid-column: 10 / 13;
                border-top-width: 2px;
                border-right-width: 2px;
            }
            #category{
                grid-row: 2;
                grid-column: 4 / 7;
            }
            #condition{
                grid-row: 2;
                grid-column: 7 / 10;
            }
            #payed-value{
                grid-row: 3;
                grid-column: 4 / 7;

            }
            #estimated-value{
                grid-row: 3;
                grid-column: 7 / 10;
            }
            #description{
                grid-row: 4 / 7;
                grid-column: 1 / 10;
                padding: 8px;
                border-left-width: 2px;
            }
            #location{
                grid-row: 7 / 9;
                grid-column: 1 / 10;
                padding: 8px;
                border-left-width: 2px;
                border-bottom-width: 2px;

            }
            #loan{
                grid-row: 2 / 6;
                grid-column: 10 / 13;
                border-right-width: 2px;

            }
            #customer{
                grid-row: 6 / 9 ;
                grid-column: 10 / -1;
                border-right-width: 2px;
                border-bottom-width: 2px;

                #customer-row1{
                    display: flex;
                    height: 75%;
                    align-items: center;
                    justify-content: center;
                    width: 100%;

                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                #customer-row2{
                    height: 25%;
                    display: flex;
                    align-items: center;
                    width: 100%;

                    p{
                        margin: 0;
                        text-align: center;
                    }
                }
            }
        }
    
        
        .p-input{
            height: 32px;
            font-size: 18px;
            width: 100%;
        }
        select.p-input{
            font-size: 16px;

        }
        textarea.p-input{
            height: 100%;
            resize: none;
        }

        .p-label{
            font-size: 14px;
        }

        .pv-row{
            display: flex;
            align-content: flex-end;
            gap: 4px;

            input{
                width: 87.5%;
            }
            p{
                margin: 0;
                margin-top: auto;
                font-size: 20px;
            }
        }
    }



</style>