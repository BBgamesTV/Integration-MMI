<!DOCTYPE html>
<html>
<head>
    <Title>Menu Petit Prince BETA</Title>
    <link rel="stylesheet" href="./assets/style.css">
    <style>

    body {
    background-image: url('./assets/1188875.jpg');
    }

    .button {
    background-color: #D0B101; /* Green */
    border: none;
    color: #0B7854;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 26px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#231dcc+0,b58b00+100 */
background: rgb(35,29,204); /* Old browsers */
background: -moz-linear-gradient(left,  rgba(35,29,204,1) 0%, rgba(181,139,0,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left,  rgba(35,29,204,1) 0%,rgba(181,139,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right,  rgba(35,29,204,1) 0%,rgba(181,139,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#231dcc', endColorstr='#b58b00',GradientType=1 ); /* IE6-9 */

    }

    .button1 {
    background-color: transparent; 
    color: #D0B101;
    border: 2px solid #D0B101;
    border-radius: 35px;
    }

    .button1:hover {
    border: 2px solid #0B7854;
    background-color: #6F1CD6;
    color: #2A21D6;
    }

    .buttons {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .centered-element{
        display: inline-block;
        width: 200px;
        height: 100px;
        position: absolute;
        top: 30%;
        left: 50%;
        margin: -50px 0 0 -50px;
    }




    </style>
    </head>



    <body>
        <div class="centered-element">
            <?php
                $dir = "./";
                if (is_dir($dir)) {
                    if ($dh = opendir($dir)) {
                        while (($file = readdir($dh)) !== false) {
                            if ($file !== "." && $file !== ".." && $file !== "assets" && $file !== ".git"){
                                if (is_dir($dir.$file)){
                                    $type="📂";
                                    echo "<a href='./$file'><button class='button button1'>$file</button></a><br><br>";
                                }
                            }
                        }
                        closedir($dh);
                    }
                }
            ?>
        </div>
    </body>
    </html>
