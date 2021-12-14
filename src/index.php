<?
    require 'steamauth/steamauth.php';
    require 'steamauth/userInfo.php';

    if(isset($_SESSION['steamid']))
    {
        $id = $_SESSION['steamid'];

    }
    else
    {
        //Direct to different page since not logged in. 
    }

?>


