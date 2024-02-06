<?php
// Файлы phpmailer

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$org = $obj['org'];
$doing = $obj['doing'];
$name = $obj['name'];
$deadline_1 = $obj['deadline_1'];
$deadline_2 = $obj['deadline_2'];
if (!empty($obj['logo'])) {
  $budget01_01 = $obj['logo'];
}
if (!empty($obj['colors'])) {
  $budget01_02 = $obj['colors'];
}
if (!empty($obj['images'])) {
  $budget01_03 = $obj['images'];
}
if (!empty($obj['content'])) {
  $budget01_04 = $obj['content'];
}
if (!empty($obj['budget_nothing01'])) {
  $budget01_05 = $obj['budget_nothing01'];
}
if (!empty($obj['budget_form'])) {
  $budget02_01 = $obj['budget_form'];
}
if (!empty($obj['count_form'])) {
  $count_form = $obj['count_form'];
} else {
  $count_form = '1';
}
if (!empty($obj['budget_form'])) {
  $budget02_01 = $obj['budget_form'];
  if (!empty($obj['count_form'])) {
  $count_form = ' &#5867;&#5867;&#5867; '.$obj['count_form'];
  } else {
    $count_form = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_form = '';
}

if (!empty($obj['sales_applet'])) {
  $budget02_02 = $obj['sales_applet'];
}
if (!empty($obj['search'])) {
  $budget02_03 = $obj['search'];
}
if (!empty($obj['ops'])) {
  $budget02_04 = $obj['ops'];
}
if (!empty($obj['popup'])) {
  $budget02_05 = $obj['popup'];
  if (!empty($obj['count_popup'])) {
  $count_popup = ' &#5867;&#5867;&#5867; '.$obj['count_popup'];
  } else {
    $count_popup = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_popup = '';
}
if (!empty($obj['slider'])) {
  $budget02_06 = $obj['slider'];
  if (!empty($obj['count_slider'])) {
  $count_slider = ' &#5867;&#5867;&#5867; '.$obj['count_slider'];
  } else {
    $count_slider = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_slider = '';
}
if (!empty($obj['accordion'])) {
  $budget02_07 = $obj['accordion'];
  if (!empty($obj['count_accordion'])) {
  $count_accordion = ' &#5867;&#5867;&#5867; '.$obj['count_accordion'];
  } else {
    $count_accordion = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_accordion = '';
}
if (!empty($obj['map'])) {
  $budget02_08 = $obj['map'];
  if (!empty($obj['count_map'])) {
  $count_map = ' &#5867;&#5867;&#5867; '.$obj['count_map'];
  } else {
    $count_map = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_map = '';
}
if (!empty($obj['api_video'])) {
  $budget02_09 = $obj['api_video'];
  if (!empty($obj['count_video'])) {
    $count_video = ' &#5867;&#5867;&#5867; '.$obj['count_video'];
  } else {
    $count_video = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $count_video = '';
}

$budget02_09 = $obj['api_video'];
$count_video = $obj['count_video'];
$budget02_10 = $obj['calendar'];
$budget02_11 = $obj['user_act'];
$budget02_12 = $obj['online_cointer'];
$budget02_13 = $obj['collect_menu'];
if (!empty($obj['another'])) {
  $budget02_14 = $obj['another'];
  if (!empty($obj['another_input'])) {
  $another_input = ' &#5867;&#5867;&#5867; '.$obj['another_input'];
  } else {
    $another_input = ' &#5867;&#5867;&#5867; ' . '1';
  }
} else {
  $another_input = '';
}
$budget02_15 = $obj['budget_nothing02'];
$budget03_01 = $obj['wp'];
$budget03_02 = $obj['1c'];
$budget03_03 = $obj['custom'];
if (!empty($obj['another_cms'])) {
  $budget03_04 = $obj['another_cms'];
  if (!empty($obj['another_cmsname'])) {
  $another_cmsname = ' &#5867;&#5867;&#5867; '.$obj['another_cmsname'];
  }
}
$budget03_04 = $obj['another_cms'];
$another_cmsname = $obj['another_cmsname'];
$old_progects = $obj['old_progects'];
$competitors = $obj['competitors'];

// if (is_array($obj['budget_01'])) {
//   $arr = $obj['budget_01'];
//    foreach($arr as $value) {
//     $arr .= $value;
//   }
// }

/* $key = array_search(['budget_01'], $obj);
foreach($key as $val) {
  $key .= $val;
} */


// if (!empty($obj['budget_01'])) { 
//   foreach($obj['budget_01'] as $value) {
//     $budget_01_arr .= $value;
//     $a = "есть";
//   }
// }

// if (empty($obj['budget_01'])) { 
//   $a = $obj;
// }




// Формирование самого письма
$title = "New user contact";

$body = "<h2>New content for Landing page</h2>

  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Customer</h3></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Название Вашей организации: </b>$org</td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>основной вид деятельности: </b>$doing</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Ответственное лицо заказчика: </b>$name</td>
  </tr>
  <tr style='background-color: #ffffff;'>    
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>дата утверждения: </b>$deadline_1</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Дата запуска проекта: </b>$deadline_2</td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Budget</h3></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>В ходе работы над проектом дизайнер должен разработать:</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$budget01_01<br>$budget01_02<br>$budget01_03<br>$budget01_04<br>$budget01_05</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Предполагает ли бюджет проекта разработку:</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid'><b>$budget02_01$count_form<br>$budget02_02<br>$budget02_03<br>$budget02_04<br>$budget02_05$count_popup<br>$budget02_06$count_slider<br>$budget02_07$count_accordion<br>$budget02_08$count_map<br>$budget02_09$count_video<br>$budget02_10<br>$budget02_11<br>$budget02_12<br>$budget02_13<br>$budget02_14$another_input<br>$budget02_15</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>С какой системой управления контентом (CMS) предполагается использовать сайт?</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid'><b>$budget03_01<br>$budget03_02<br>$budget03_03<br>$budget03_04<br>$another_cmsname</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>history</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Предыдущие проекты</h3></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Чего не добились дизайнеры, разрабатывая предыдущие версии сайта? Что, какую тенденцию в оформлении хотелось бы продолжить?</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$old_progects</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Конкурентное окружение</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Какие компании являются вашими прямыми конкурентами? Как они позиционируют или рекламируют себя на рынке услуг? Что вам нравится или не нравится в их рекламных проектах?</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$competitors</td>
  </tr>";
$body = "<table style='width: 100%;'>$body</table>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2; 
  $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

// Настройки вашей почты
  $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
  $mail->Username   = 'igorbob73@gmail.com'; // Логин на почте
  $mail->Password   = 'lreqgdhqfazzccob'; // Пароль 
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('igorbob73@gmail.com', 'Игорь Бобырев'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('igorbob73@gmail.com');
  $mail->addAddress('yorg1973fisher@yandex.ru');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
  $result = "error";
  $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);