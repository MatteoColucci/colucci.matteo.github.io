<?php
    $nome = $_POST["nome"];
    $cognome = $_POST["cognome"];
    $email = $_POST["email"];

    $utente = array(
        "Nome" => $nome,
        "Cognome" => $cognome,
        "Email" => $email
    );

    $file = "utenti.json";
    $utenti = json_decode(file_get_contents($file), true);
    $utenti[] = $utente;

    $json_utenti = json_encode($utenti, true);
    file_put_contents($file, $json_utenti);

    header("Location: index.php");
?>