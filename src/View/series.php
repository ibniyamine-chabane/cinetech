<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/series.js"></script>
    <title>Series</title>
</head>
<body>
    <?php require_once('header.php'); ?>
    <main>
        <section id="movies">
            <h2>les series</h2>
            <div class="series-container grid" id="series-container">
            </div>
            <div class="pagination">
                <button id="prev"></button>
                <span id="current"></span>
                <button id="next"></button>
            </div>
        </section>
    </main>     
</body>
</html>