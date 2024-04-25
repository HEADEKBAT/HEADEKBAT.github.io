<?php

if(isset($_POST)) {
    $data = array(
        'text1' => $_POST,
    );
    $jsonData = json_encode($data);
    $ret = file_put_contents('./data.json', $jsonData, LOCK_EX);
    if($ret === false) {
        die('There was an error while encoding or writing to file');
    }
    else {
        echo "$ret bytes encoded and written to file";
    }
}
// if(isset($_POST['text2'])) {
//     $data = array(
//         'text1' => $_POST['text2'],
//     );
//     $jsonData = json_encode($data);
//     $ret = file_put_contents('./data.json', $jsonData, LOCK_EX);
//     if($ret === false) {
//         die('There was an error while encoding or writing to file');
//     }
//     else {
//         echo "$ret bytes encoded and written to file";
//     }
// }
else {
    die('no post data to encode or write');
}
?>