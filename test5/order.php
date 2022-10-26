<?php
$urlSuccess = 'confirm.php';
$name = $_POST['name']; //Получаем имя юзера, заполненного на форме
$phone = $_POST['phone']; //Получаем телефон юзера, заполненного на форме

$data = [
	"offer" => 53,
	"flow" => 377,
	"ip" => $_SERVER["HTTP_CF_CONNECTING_IP"] ? $_SERVER["HTTP_CF_CONNECTING_IP"] : ( $_SERVER["HTTP_X_FORWARDED_FOR"] ? $_SERVER["HTTP_X_FORWARDED_FOR"] : $_SERVER["REMOTE_ADDR"] ),
	"name" => isset( $_POST["name"] ) ? $_POST["name"] : "",
	"phone" => isset( $_POST["phone"] ) ? $_POST["phone"] : "",
	"ua" => $_SERVER["HTTP_USER_AGENT"],
	"un" => isset( $_POST["subid"] ) ? $_POST["subid"] : "",
	"us" => isset( $_POST["b"] ) ? $_POST["b"] : "",
	"uc" => isset( $_POST["a"] ) ? $_POST["a"] : "",
];


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

  $url = 'https://kt.ulysse.team/1667048/postback?status=lead&payout=&currency=usd&from=Skylead&subid=' . urlencode($_POST['subid']) . '&extra_param_9=' . $_POST['name'] . '&extra_param_10=' . $_POST['phone'];
  file_get_contents($url);

$data = http_build_query( $data );
$curl = curl_init( "https://api.skylead.pro/wm/push.json?id=355-d72a8d62503e297609bfc27252e70e01");
curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $curl, CURLOPT_TIMEOUT, 30 );
curl_setopt( $curl, CURLOPT_POST, 1 );
curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
$result = json_decode( curl_exec( $curl ), true );
curl_close( $curl );
if (count( $_GET )) $result = array_merge( $result, $_GET );

$landing_url = '';
if (!empty($_REQUEST['landing_url'])) {
    $landing_url = urlencode('https://' . parse_url('https://' . urldecode($_REQUEST['landing_url']), PHP_URL_HOST) . '/pages/confirm');
}
$pixel = '';
if (!empty($_POST['x'])) {
    $pixel = $_POST['x'];
}
$geo = '';
if (!empty($_POST['geo'])) {
    $geo = $_POST['geo'];
}
$urlSuccess .= '?back=' . $landing_url . '&x=' . $pixel . '&geo=' . $geo;
set_conversion_cookies($phone);
header('Location: '.$urlSuccess);
exit;

} else {
  $landing_url = '';
  if (!empty($_REQUEST['landing_url'])) {
      $landing_url = urlencode('https://' . parse_url('https://' . urldecode($_REQUEST['landing_url']), PHP_URL_HOST) . '/pages/confirm');
  }
  $geo = '';
  if (!empty($_POST['geo'])) {
      $geo = $_POST['geo'];
  }
  $urlSuccess .= '?back=' . $landing_url . '&geo=' . $geo;
  header('Location: '.$urlSuccess);
  exit;
}
?>
