<?php 
$host = $_SERVER['REQUEST_URI'];
// var_dump($host);

// var_dump($id);
?>
<header>
    <nav class="navbar">
        <ul>
            <?php if($host == "/cinetech/" || $host == "/cinetech/movies" || $host == "/cinetech/series") :?>
                <li><a href="movies">Films</a></li>
                <li><a href="series">Séries</a></li>
            <?php elseif(isset($id) && $host == "/cinetech/detail/movie/".$id || isset($id) && $host == "/cinetech/detail/serie/".$id) :?>
                <li><a href="../../movies">Films</a></li>
                <li><a href="../../series">Séries</a></li>
            <?php endif; ?>
        </ul>
    </nav>
</header>