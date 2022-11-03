<?php

// ВСТАВЛЯЕМ ДАННЫЕ ВРУЧНУЮ:
// $api = [
//     'key' => '7669', // ID пользователя в ПП
//     'secret' => 'b3a56e69c5d63947c0cf7b322f13b7a5', // API key
//     'flow_url' => 'https://leadrock.com/URL-81EFF-63FDA' // Код потока
// ];
// КОНЕЦ ДАННЫХ, ВСТАВЛЯЕМЫХ ВРУЧНУЮ

$api_params = [
  'ph' => [
      'key' => '7669',
      'secret' => 'b3a56e69c5d63947c0cf7b322f13b7a5',
      'flow_url' => 'https://leadrock.com/URL-1F0F5-B2131'
  ],
  'dz' => [
    'key' => '20465',
    'secret' => 'PwqQs223OiCdY44Jq7nryoE6rdlReNPe',
    'flow_url' => 'https://leadrock.com/URL-D0150-0D003'
  ],
  'ac' => [
    'key' => '20438',
    'secret' => 'JccwvrTdXhRByiHRaNx8fOF3hTtp9eYG',
    'flow_url' => 'https://leadrock.com/URL-82250-F911E'
  ],
  'ti' => [
    'key' => '7669',
    'secret' => 'b3a56e69c5d63947c0cf7b322f13b7a5',
    'flow_url' => 'https://leadrock.com/URL-1F0F5-B2131'
  ],
  'ya' => [
    'key' => '7669',
    'secret' => 'b3a56e69c5d63947c0cf7b322f13b7a5',
    'flow_url' => 'https://leadrock.com/URL-1F0F5-B2131'
  ],
  'ao' => [
    'key' => '7669',
    'secret' => 'b3a56e69c5d63947c0cf7b322f13b7a5',
    'flow_url' => 'https://leadrock.com/URL-1F0F5-B2131'
  ]
];
if (array_key_exists($_POST['b'], $api_params)) {
  $api = $api_params[$_POST['b']];
}

$urlSuccess = 'confirm.php';
$phone = $_POST['phone'];

function send_the_order($post, $api)
{
    $params = [
        'flow_url' => $api['flow_url'],
        'user_phone' => $post['phone'],
        'user_name' => $post['name'],
        'other' => $post['other'],
        'ip' => $_SERVER['REMOTE_ADDR'],
        'ua' => $_SERVER['HTTP_USER_AGENT'],
        'api_key' => $api['key'],
        'sub1' => $post['subid'],
        'sub2' => $post['b'],
        'sub3' => $post['a'],
        'sub4' => $post['sub4'],
        'sub5' => $post['sub5'],
        'ajax' => 1,
    ];
    $url = 'https://leadrock.com/api/v2/lead/save';

    $trackUrl = $params['flow_url'] . (strpos($params['flow_url'], '?') === false ? '?' : '&') . http_build_query($params);
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $trackUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    $params['track_id'] = curl_exec($ch);

    $params['sign'] = sha1(http_build_query($params) . $api['secret']);

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
    curl_exec($ch);
    curl_close($ch);

    // <!--Add-->
    $url = 'https://kt.ulysse.team/1667048/postback?status=lead&currency=usd&from=leadrock.com&subid=' . urlencode($_POST['subid']) . '&extra_param_9=' . urlencode($_POST['name']) . '&extra_param_10=' . urlencode($_POST['phone']);
    file_get_contents($url);

    $landing_url = '';
    if (!empty($post['landing_url'])) {
        $landing_url = urlencode('https://' . parse_url('https://' . urldecode($post['landing_url']), PHP_URL_HOST) . '/pages/confirm');
    }
        if (!empty($post['success_page'])) {
            $page = $post['success_page'];
        } else {
            $args = [];

            if (!empty($post['x'])) {
                $args['x'] = $post['x'];
            }

            if (!empty($post['geo'])) {
                $args['geo'] = $post['geo'];
            }

            if (!empty($landing_url)) {
                $args['back'] = urldecode($landing_url);
            }
            if (!empty($landing_url)) {
                $args['name'] = $post['name'];
            }

            $page = 'confirm.php?' . http_build_query($args);
        }

        header('Location: ' . $page);
    // <!--/Add-->
}

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
if (!empty($phone)&&!has_conversion_cookies($phone)){
  if (!empty($_POST['phone'])) {
      set_conversion_cookies($phone);
      send_the_order($_REQUEST, $api);
  }
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

if (!empty($_GET)) {
?>
    <script type="text/javascript">
        window.onload = function() {
            let forms = document.getElementsByTagName("form");
            for(let i=0; i<forms.length; i++) {
                let form = forms[i];
                form.setAttribute('action', form.getAttribute('action') + "?<?php echo http_build_query($_GET)?>");
                form.setAttribute('method', 'post');
            }
        };
    </script>
<?php
}

?>
