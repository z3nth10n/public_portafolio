<?php

include('api.php');

$go=@$_GET['action'];
if(!isset($go)){$go='default';}

$data = array();
$jsonResponse = false;

switch($go)
{
    case 'get-data':
         die(get_data(@$_GET['url']));
         break;
            
    case 'get-css':
    case 'get-js':
        $res = json_decode(get_data(@$_GET['resources']), true);
            
        if($go == 'get-css')
            die(getRes($res, 'css'));
        else if($go == 'get-js')
            die(getRes($res, 'js'));
        break;
            
    default:
        $jsonResponse = true;
        $data['error'] = '[GET] Action '.$go.' not found!';
        break;
}

if($jsonResponse)
    die(json_encode($data));