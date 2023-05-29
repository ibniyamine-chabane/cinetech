<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../css/style.css">
    <script defer src="../../js/detail_serie.js"></script>
    <title>detail serie</title>
</head>
<body>
    <?php require_once('header.php'); ?>
    <main>
        <section id="detail">
            <div class="detail-container" id="detail-container">
                <div class="detail-img-box">
                    <img id="image-display" src="" alt="">
                </div>
                <div class="infos" id="infos">
                    <h2>titre</h2>
                    <p>date de sortie</p>
                    <p>genre <br></p>
                    <p>pays de production <br></p>
                    <p>langue <br></p>
                    <p>nombre de saison : </p>
                    <p>nombre d'épisode :</p>
                    <div>
                        <p>entreprise de production</p>
                        <div class="companies-container"></div>
                        <div class="overview"></div>
                    </div> 
                </div>
            </div>
        </section>
    </main>
</body>
</html>