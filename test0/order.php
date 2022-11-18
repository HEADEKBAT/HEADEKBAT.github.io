<?php

$urlSuccess = 'confirm.php';

if (empty( $_POST )) die("Bad request");

$name = $_POST['name']; //Получаем имя юзера, заполненного на форме
$phone = $_POST['phone']; //Получаем телефон юзера, заполненного на форме
$utm_source = $_POST['subid']; //Получаем ютм метки с формы
$utm_campaign = $_POST['b']; //Получаем ютм метки с формы
$utm_medium = $_POST['a']; //Получаем ютм метки с формы
$utm_term = $_POST['utm_term']; //Получаем ютм метки с формы
$utm_content = $_POST['utm_content']; //Получаем ютм метки с формы
$subid1 = $_POST['subid1']; //Получаем subid1 с формы
$subid2 = $_POST['subid2']; //Получаем subid2 с формы
$subid3 = $_POST['subid3']; //Получаем subid3 с формы

$token = "g5ccCdgw3AztjI237hfqo_i7kjvNDBIP";  // Ключ для  Testleadgen
$url = "https://api.plado.market/lead/create";

$offer_id = "200";
$lead_information = "";
$country = "ng";
$price = "19500";
$count = 1;

$ip = $_SERVER['REMOTE_ADDR'];


$data1 = "{
\"name\":\"$name\",
\"phone\":\"$phone\",
\"country\":\"$country\",
\"offer_id\":\"$offer_id\",
\"lead_information\":\"$lead_information\",
\"price\":\"$price\",
\"quantity\":\"$count\",
\"ipaddr\":\"$ip\",
\"utm_source\":\"$utm_source\",
\"utm_campaign\":\"$utm_campaign\",
\"utm_medium\":\"$utm_medium\",
\"utm_term\":\"$utm_term\",
\"utm_content\":\"$utm_content\",
\"business_model_id\":\"$business_model_id\",
\"partnership_id\":\"$partnership_id\",
\"subid\":\"$subid\",
\"subid2\":\"$subid2\",
\"subid3\":\"$subid3\"
}";

$process = curl_init();
curl_setopt($process, CURLOPT_HTTPHEADER, array("Content-type: application/json", "Authorization: Bearer " . $token));
curl_setopt($process, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1; .NET CLR 1.0.3705; .NET CLR 1.1.4322; Media Center PC 4.0)");
curl_setopt($process, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($process, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($process, CURLOPT_TIMEOUT, 20);
curl_setopt($process, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($process, CURLOPT_POST, true);
curl_setopt($process, CURLOPT_POSTFIELDS, $data1);
curl_setopt($process, CURLOPT_URL, $url);


//ПРОВЕРКА НА ДУБЛИ
function set_cookie($name,$value){
	$expires = time()+60*60*24*5; //время, на которое ставятся куки, по умолчанию - 5 дней
	header("Set-Cookie: {$name}={$value}; Expires={$expires}; Path=/; SameSite=None; Secure",false);
}

function set_conversion_cookies($phone){
	set_cookie('phone',$phone);
	$date = new DateTime();
	$ts = $date->getTimestamp();
	set_cookie('ctime',$ts);
}

//проверяем, если у пользователя установлена куки, что он уже конвертился, а также имя и телефон, то сверяем время
//если прошло менее суток, обнуляем время
function has_conversion_cookies($phone){
	$date = new DateTime();
	$ts = $date->getTimestamp();
	$is_duplicate=false;
	$cphone = isset($_COOKIE['phone'])?$_COOKIE['phone']:'';
	$ctime = isset($_COOKIE['ctime'])?$_COOKIE['ctime']:'';

	if (!empty($ctime)&&!empty($phone)){
		if ($cphone==$phone){
			$secondsDiff = $ts - $ctime;
			if ($secondsDiff<24*60*60)
			{
				$is_duplicate=true;
				set_cookie('ctime',$ts);
			}
		}
	}
	return $is_duplicate;
}

//проверка кук на дубль
if (!empty($name)&&!empty($phone)&&!has_conversion_cookies($phone)){

  $url = 'http://kt.ulysse.team/1667048/postback?status=lead&payout=&currency=usd&from=Plado&subid=' . urlencode($_POST['subid']) . '&extra_param_9=' . $_POST['name'] . '&extra_param_10=' . $_POST['phone'];
  file_get_contents($url);

  $return = curl_exec($process);
  curl_close($process);

  $pixel = '';
  if (!empty($_POST['x'])) {
      $pixel = $_POST['x'];
  }
  $geo = '';
  if (!empty($_POST['geo'])) {
      $geo = $_POST['geo'];
  }
  $urlSuccess .= '?x=' . $pixel . '&geo=' . $geo;
  set_conversion_cookies($phone);
  header('Location: '.$urlSuccess);
  exit;

} else {

  $geo = '';
  if (!empty($_POST['geo'])) {
      $geo = $_POST['geo'];
  }
  $urlSuccess .= '?geo=' . $geo;
  header('Location: '.$urlSuccess);
  exit;
}
?>
