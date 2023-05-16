<?php
namespace App\Controller;

use App\Model\UserModel;

class AuthController 
{

    public function register($email, $firstname, $lastname, $password, $password_confirm)
    {   
        $email = htmlspecialchars(trim($email));
        $firstname = htmlspecialchars(trim($firstname));
        $lastname = htmlspecialchars(trim($lastname));
        $password = htmlspecialchars(trim($password));
        $password_confirm = htmlspecialchars(trim($password_confirm));
        $usermodel = new UserModel;
        $userData = $usermodel->findAll();
        // $password_confirm = $_POST["password_confirm"];
        $isAvailable = false;
        $isPasswordOk = false;

        foreach ($userData as $user) 
        {
        
            if ($email == $user['email'])
            {
                echo "Cette adresse email est déjà pris";
                $isAvailable = false;
                break;
            } else {
                $isAvailable = true;
            }      
                           
        }

        if ($password != $password_confirm)
            {
                echo "<h1 style='color:red'>la confirmation de mdp ne correspond pas</h1>";
                $isPasswordOk = false;
            } else {
                $isPasswordOk = true;
            }

        if ($isAvailable == true && $isPasswordOk == true) 
        {
            $usermodel->registerUser($email, $firstname, $lastname, $password); 
            echo "<h1 style='color:green'>inscription réussi</h1>";
        }
    }

    public function login($email ,$password)
    {
        $email = htmlspecialchars(trim($email));
        $password = htmlspecialchars(trim($password));
        $usermodel = new UserModel;
        $userData = $usermodel->findAll();

        foreach ($userData as $user) { 

            if ($email === $user['email'] && $password === $user['password']) {   
                session_start();
                $_SESSION['email'] = $email;
                $id = $user['id']; 
                $_SESSION['first_name'] = $user['first_name']; 
                $_SESSION['id_user'] = $id;
                $logged = true;
                break;

            } else {
                $logged = false;
            }
        }

        if( $logged ) {
            echo "<h1 style='color:green'>vous êtes connecté</h1>";

            header('Location: /super-week');
        } else {
            echo "<h1 style='color:red'>erreur dans le mail ou le mot de passe</h1>";
        }
    }
    
}

?>