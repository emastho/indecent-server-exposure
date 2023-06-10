<?php


$request = isset($_SERVER['REQUEST_URI']);

switch ($request) {
    case '/' :
        header("content-type: application/json");
        echo '{"okay": "why not"}';
        break;
    default:
        http_response_code(404);
        echo "Error";
        break;
}