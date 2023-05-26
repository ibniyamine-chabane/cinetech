<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script defer src="js/script.js"></script>
    <title>Home</title>
</head>
<body>
    <?php require_once('header.php'); ?>
    <main>
        <section id="movies">
            <h2>les films du moment</h2>
            <div class="movies-container" id="movies-container">
            </div>
        </section>
        <section id="series">
            <h2>les series du moment</h2>
            <div class="series-container" id="series-container">
            </div>
        </section>
    </main>     
</body>
</html>