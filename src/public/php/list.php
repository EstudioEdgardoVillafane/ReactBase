<?php
    $json = file_get_contents('php://input');
    echo $json;
    $data = json_decode($json);
?>