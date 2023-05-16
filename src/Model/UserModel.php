<?php 
namespace App\Model;
use PDO;
class UserModel 
{

    public function insert($email ,$firstname, $lastname)
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "INSERT INTO user (email, first_name, last_name) VALUES ((?) ,(?) ,(?))";
        $stmt = $database->prepare($query);
        $stmt->execute(array($email, $firstname, $lastname));
    }

    public function findAll() 
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "SELECT * FROM user";
        $stmt = $database->prepare($query);
        $stmt->execute(array());
        return $allUser = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function registerUser($email ,$firstname, $lastname, $password)
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "INSERT INTO user (email, first_name, last_name, password) VALUES ((?) ,(?) ,(?) ,(?))";
        $stmt = $database->prepare($query);
        $stmt->execute(array($email ,$firstname, $lastname, $password));
    }

    public function find($id)
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "SELECT * FROM user WHERE id = (?)";
        $stmt = $database->prepare($query);
        $stmt->execute(array($id));
        return $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function add($title, $content)
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "INSERT INTO book (title, content, id_user) VALUES ((?) ,(?) ,(?))";
        $stmt = $database->prepare($query);
        $stmt->execute(array($title, $content, $_SESSION['id_user']));
        return $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function finAllBooks()
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "SELECT * FROM book";
        $stmt = $database->prepare($query);
        $stmt->execute(array());
        return $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findBook($id)
    {
        $database = new PDO('mysql:host=localhost;dbname=superweek;charset=utf8;port=3307', 'root', '');
        $query = "SELECT * FROM book WHERE id = (?)";
        $stmt = $database->prepare($query);
        $stmt->execute(array($id));
        return $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}   
?>
