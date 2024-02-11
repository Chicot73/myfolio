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
  if (!empty($obj['count_form'])) {
  $count_form = ' &#5867;&#5867;&#5867; '.$obj['count_form'];
  } else {
    $count_form = ' &#5867;&#5867;&#5867; '.'1';
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
    $count_popup = ' &#5867;&#5867;&#5867; '.'1';
  }
} else {
  $count_popup = '';
}
if (!empty($obj['slider'])) {
  $budget02_06 = $obj['slider'];
  if (!empty($obj['count_slider'])) {
  $count_slider = ' &#5867;&#5867;&#5867; '.$obj['count_slider'];
  } else {
    $count_slider = ' &#5867;&#5867;&#5867; '.'1';
  }
} else {
  $count_slider = '';
}
if (!empty($obj['accordion'])) {
  $budget02_07 = $obj['accordion'];
  if (!empty($obj['count_accordion'])) {
  $count_accordion = ' &#5867;&#5867;&#5867; '.$obj['count_accordion'];
  } else {
    $count_accordion = ' &#5867;&#5867;&#5867; '.'1';
  }
} else {
  $count_accordion = '';
}
if (!empty($obj['map'])) {
  $budget02_08 = $obj['map'];
  if (!empty($obj['count_map'])) {
  $count_map = ' &#5867;&#5867;&#5867; '.$obj['count_map'];
  } else {
    $count_map = ' &#5867;&#5867;&#5867; '.'1';
  }
} else {
  $count_map = '';
}
if (!empty($obj['api_video'])) {
  $budget02_09 = $obj['api_video'];
  if (!empty($obj['count_video'])) {
    $count_video = ' &#5867;&#5867;&#5867; '.$obj['count_video'];
  } else {
    $count_video = ' &#5867;&#5867;&#5867; '.'1';
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
    $another_input = ' &#5867;&#5867;&#5867; '.'1';
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
$turget01_01 = $obj['female'];
$turget01_02 = $obj['male'];
$turget02_03 = $obj['6_11'];
$turget02_04 = $obj['12_19'];
$turget02_05 = $obj['20-34'];
$turget02_06 = $obj['35_49'];
$turget02_07 = $obj['50_64'];
$turget02_08 = $obj['65'];
$ethnos = $obj['ethnos'];
$turget03_01 = $obj['w_child'];
$turget03_02 = $obj['wo_child'];
$turget03_03 = $obj['alones'];
$turget03_04 = $obj['empty'];
$turget04_01 = $obj['edu_1'];
$turget04_02 = $obj['edu_2'];
$turget04_03 = $obj['edu_3'];
$turget04_04 = $obj['edu_4'];
$turget05_01 = $obj['cross'];
$turget05_02 = $obj['islam'];
$turget05_03 = $obj['another_rel'];
$turget05_04 = $obj['not_rel'];
$doing = $obj['doing'];
$earnings = $obj['earnings'];
$turget06_01 = $obj['class_low'];
$turget06_02 = $obj['class_low_middle'];
$turget06_03 = $obj['class_middle'];
$turget06_04 = $obj['class_high_middle'];
$turget06_05 = $obj['class_vip'];
$turget07_01 = $obj['traditionalists'];
$turget07_02 = $obj['life_lovers'];
$turget07_03 = $obj['aesthetes'];
$turget08_01 = $obj['person_type_1'];
$turget08_02 = $obj['person_type_2'];
$turget08_03 = $obj['person_type_3'];
$turget08_04 = $obj['person_type_4'];
$turget09_01 = $obj['ordinary_purchase'];
$turget09_02 = $obj['special_case'];
$special_case_text = $obj['special_case_text'];
$turget10_01 = $obj['block_1'];
$turget10_02 = $obj['block_2'];
$turget10_03 = $obj['block_3'];
$block_3_text = $obj['block_3_text'];
$turget11_01 = $obj['quality'];
$turget11_02 = $obj['service'];
$turget11_03 = $obj['saving'];
$turget11_04 = $obj['special_benefit'];
$special_benefit_text = $obj['special_benefit_text'];
$turget12_01 = $obj['user_status_1'];
$turget12_02 = $obj['user_status_2'];
$turget12_03 = $obj['user_status_3'];
$turget12_04 = $obj['user_status_4'];
$turget12_05 = $obj['user_status_5'];
$turget13_01 = $obj['level_toup_1'];
$turget13_02 = $obj['level_toup_2'];
$turget13_03 = $obj['level_toup_3'];
$turget13_04 = $obj['level_toup_4'];
$turget13_05 = $obj['level_toup_5'];
$turget13_06 = $obj['level_toup_6'];
$turget14_01 = $obj['low_user'];
$turget14_02 = $obj['middle_user'];
$turget14_03 = $obj['top_user'];
$turget15_01 = $obj['attitude_1'];
$turget15_02 = $obj['attitude_2'];
$turget15_03 = $obj['attitude_3'];
$turget15_04 = $obj['attitude_4'];
$turget15_05 = $obj['attitude_5'];
$_02turget01_01 = $obj['02female'];
$_02turget01_02 = $obj['02male'];
$_02turget02_03 = $obj['026_11'];
$_02turget02_04 = $obj['0212_19'];
$_02turget02_05 = $obj['0220-34'];
$_02turget02_06 = $obj['0235_49'];
$_02turget02_07 = $obj['0250_64'];
$_02turget02_08 = $obj['0265'];
$_02ethnos = $obj['02ethnos'];
$_02turget03_01 = $obj['02w_child'];
$_02turget03_02 = $obj['02wo_child'];
$_02turget03_03 = $obj['02alones'];
$_02turget03_04 = $obj['02empty'];
$_02turget04_01 = $obj['02edu_1'];
$_02turget04_02 = $obj['02edu_2'];
$_02turget04_03 = $obj['02edu_3'];
$_02turget04_04 = $obj['02edu_4'];
$_02turget05_01 = $obj['02cross'];
$_02turget05_02 = $obj['02islam'];
$_02turget05_03 = $obj['02another_rel'];
$_02turget05_04 = $obj['02not_rel'];
$_02doing = $obj['02doing'];
$_02earnings = $obj['02earnings'];
$_02turget06_01 = $obj['02class_low'];
$_02turget06_02 = $obj['02class_low_middle'];
$_02turget06_03 = $obj['02class_middle'];
$_02turget06_04 = $obj['02class_high_middle'];
$_02turget06_05 = $obj['02class_vip'];
$_02turget07_01 = $obj['02traditionalists'];
$_02turget07_02 = $obj['02life_lovers'];
$_02turget07_03 = $obj['02aesthetes'];
$_02turget08_01 = $obj['02person_type_1'];
$_02turget08_02 = $obj['02person_type_2'];
$_02turget08_03 = $obj['02person_type_3'];
$_02turget08_04 = $obj['02person_type_4'];
$_02turget09_01 = $obj['02ordinary_purchase'];
$_02turget09_02 = $obj['02special_case'];
$_02special_case_text = $obj['02special_case_text'];
$_02turget10_01 = $obj['02block_1'];
$_02turget10_02 = $obj['02block_2'];
$_02turget10_03 = $obj['02block_3'];
$_02block_3_text = $obj['02block_3_text'];
$_02turget11_01 = $obj['02quality'];
$_02turget11_02 = $obj['02service'];
$_02turget11_03 = $obj['02saving'];
$_02turget11_04 = $obj['02special_benefit'];
$_02special_benefit_text = $obj['02special_benefit_text'];
$_02turget12_01 = $obj['02user_status_1'];
$_02turget12_02 = $obj['02user_status_2'];
$_02turget12_03 = $obj['02user_status_3'];
$_02turget12_04 = $obj['02user_status_4'];
$_02turget12_05 = $obj['02user_status_5'];
$_02turget13_01 = $obj['02level_toup_1'];
$_02turget13_02 = $obj['02level_toup_2'];
$_02turget13_03 = $obj['02level_toup_3'];
$_02turget13_04 = $obj['02level_toup_4'];
$_02turget13_05 = $obj['02level_toup_5'];
$_02turget13_06 = $obj['02level_toup_6'];
$_02turget14_01 = $obj['02low_user'];
$_02turget14_02 = $obj['02middle_user'];
$_02turget14_03 = $obj['02top_user'];
$_02turget15_01 = $obj['02attitude_1'];
$_02turget15_02 = $obj['02attitude_2'];
$_02turget15_03 = $obj['02attitude_3'];
$_02turget15_04 = $obj['02attitude_4'];
$_02turget15_05 = $obj['02attitude_5'];
$_03turget01_01 = $obj['03female'];
$_03turget01_02 = $obj['03male'];
$_03turget02_03 = $obj['036_11'];
$_03turget02_04 = $obj['0312_19'];
$_03turget02_05 = $obj['0320-34'];
$_03turget02_06 = $obj['0335_49'];
$_03turget02_07 = $obj['0350_64'];
$_03turget02_08 = $obj['0365'];
$_03ethnos = $obj['03ethnos'];
$_03turget03_01 = $obj['03w_child'];
$_03turget03_02 = $obj['03wo_child'];
$_03turget03_03 = $obj['03alones'];
$_03turget03_04 = $obj['03empty'];
$_03turget04_01 = $obj['03edu_1'];
$_03turget04_02 = $obj['03edu_2'];
$_03turget04_03 = $obj['03edu_3'];
$_03turget04_04 = $obj['03edu_4'];
$_03turget05_01 = $obj['03cross'];
$_03turget05_02 = $obj['03islam'];
$_03turget05_03 = $obj['03another_rel'];
$_03turget05_04 = $obj['03not_rel'];
$_03doing = $obj['03doing'];
$_03earnings = $obj['03earnings'];
$_03turget06_01 = $obj['03class_low'];
$_03turget06_02 = $obj['03class_low_middle'];
$_03turget06_03 = $obj['03class_middle'];
$_03turget06_04 = $obj['03class_high_middle'];
$_03turget06_05 = $obj['03class_vip'];
$_03turget07_01 = $obj['03traditionalists'];
$_03turget07_02 = $obj['03life_lovers'];
$_03turget07_03 = $obj['03aesthetes'];
$_03turget08_01 = $obj['03person_type_1'];
$_03turget08_02 = $obj['03person_type_2'];
$_03turget08_03 = $obj['03person_type_3'];
$_03turget08_04 = $obj['03person_type_4'];
$_03turget09_01 = $obj['03ordinary_purchase'];
$_03turget09_02 = $obj['03special_case'];
$_03special_case_text = $obj['03special_case_text'];
$_03turget10_01 = $obj['03block_1'];
$_03turget10_02 = $obj['03block_2'];
$_03turget10_03 = $obj['03block_3'];
$_03block_3_text = $obj['03block_3_text'];
$_03turget11_01 = $obj['03quality'];
$_03turget11_02 = $obj['03service'];
$_03turget11_03 = $obj['03saving'];
$_03turget11_04 = $obj['03special_benefit'];
$_03special_benefit_text = $obj['03special_benefit_text'];
$_03turget12_01 = $obj['03user_status_1'];
$_03turget12_02 = $obj['03user_status_2'];
$_03turget12_03 = $obj['03user_status_3'];
$_03turget12_04 = $obj['03user_status_4'];
$_03turget12_05 = $obj['03user_status_5'];
$_03turget13_01 = $obj['03level_toup_1'];
$_03turget13_02 = $obj['03level_toup_2'];
$_03turget13_03 = $obj['03level_toup_3'];
$_03turget13_04 = $obj['03level_toup_4'];
$_03turget13_05 = $obj['03level_toup_5'];
$_03turget13_06 = $obj['03level_toup_6'];
$_03turget14_01 = $obj['03low_user'];
$_03turget14_02 = $obj['03middle_user'];
$_03turget14_03 = $obj['03top_user'];
$_03turget15_01 = $obj['03attitude_1'];
$_03turget15_02 = $obj['03attitude_2'];
$_03turget15_03 = $obj['03attitude_3'];
$_03turget15_04 = $obj['03attitude_4'];
$_03turget15_05 = $obj['03attitude_5'];
$barriers = $obj['barriers'];
$radio = $obj['radio'];
$competitor = $obj['competitor'];
$dont_worse_text = $obj['dont_worse_text'];
$thebest_text = $obj['thebest_text'];
$positioning01_01 = $obj['first_case'];
$positioning01_02 = $obj['knowledge'];
$positioning01_03 = $obj['frequency'];
$positioning01_04 = $obj['another_task'];
$another_task_text = $obj['another_task_text'];
$positioning02_01 = $obj['satisfaction'];
$positioning02_02 = $obj['velocity'];
$positioning02_03 = $obj['quality_offer'];
$positioning02_04 = $obj['impression'];
$positioning02_05 = $obj['advantage'];
$positioning02_06 = $obj['another_offer'];
$another_offer_text = $obj['another_offer_text'];
$unique_text = $obj['unique_text'];
$impression_text = $obj['impression_text'];
$collage01_01 = $obj['style01'];
$collage01_02 = $obj['style02'];
$collage01_03 = $obj['style03'];
$collage01_04 = $obj['style04'];
$collage01_05 = $obj['style05'];
$collage01_06 = $obj['style06'];
$collage01_07 = $obj['style07'];
$collage01_08 = $obj['style08'];
$collage01_09 = $obj['style09'];
$collage01_10 = $obj['style10'];
$collage01_11 = $obj['style11'];
$collage01_12 = $obj['style12'];
$collage01_13 = $obj['style13'];
$collage01_14 = $obj['style14'];
$collage01_15 = $obj['style15'];
$collage01_16 = $obj['style16'];
$collage01_17 = $obj['style17'];
$collage01_18 = $obj['style18'];
$collage01_19 = $obj['style19'];
$collage01_20 = $obj['style20'];
$collage01_21 = $obj['user_style'];
$user_style_text = $obj['user_style_text'];
$collage02_01 = $obj['required01'];
$collage02_02 = $obj['required02'];
$collage02_03 = $obj['required03'];
$collage02_04 = $obj['required04'];
$collage02_05 = $obj['required05'];
$collage02_06 = $obj['required06'];
$collage02_07 = $obj['required07'];
$collage_nothing02 = $obj['collage_nothing02'];

// Формирование самого письма
$title = "New user database ".$org;

$body = "<h2>New content for Landing page</h2>

  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Клиент</h3></td>
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
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Budget</h3></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>В ходе работы над проектом дизайнер должен разработать:</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$budget01_01<br>$budget01_02<br>$budget01_03<br>$budget01_04<br>$budget01_05
  </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Предполагает ли бюджет проекта разработку:</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid'>$budget02_01$count_form<br>$budget02_02<br>$budget02_03<br>$budget02_04<br>$budget02_05$count_popup<br>$budget02_06$count_slider<br>$budget02_07$count_accordion<br>$budget02_08$count_map<br>$budget02_09$count_video<br>$budget02_10<br>$budget02_11<br>$budget02_12<br>$budget02_13<br>$budget02_14$another_input<br>$budget02_15</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>С какой системой управления контентом (CMS) предполагается использовать сайт?</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid'>$budget03_01<br>$budget03_02<br>$budget03_03<br>$budget03_04<br>$another_cmsname</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>history</h3></td>
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
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Основная Целевая аудитория<br>(фактические потребители)</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Опишите потребителей или адресатов ваших товаров (услуг)</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Пол</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget01_01<br>$turget01_02
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Возраст</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget02_01<br>$turget02_02<br>$turget02_03<br>$turget02_04<br>$turget02_05<br>$turget02_06<br>$turget02_07<br>$turget02_08
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Географическое происхождение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$ethnos
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Семейное положение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget03_01<br>$turget03_02<br>$turget03_03<br>$turget03_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образование</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget04_01<br>$turget04_02<br>$turget04_03<br>$turget04_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Религия</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget05_01<br>$turget05_02<br>$turget05_03<br>$turget05_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Род занятий</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$doing
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень дохода в месяц на семью</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$earnings
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Общественный класс</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget06_01<br>$turget06_02<br>$turget06_03<br>$turget06_04<br>$turget06_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образ жизни</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget07_01<br>$turget07_02<br>$turget07_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Тип, эмоциональная структура личности</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget08_01<br>$turget08_02<br>$turget08_03<br>$turget08_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Нужен ли повод для совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget09_01<br>$turget09_02<br>$special_case_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Что останавливает ЦА от совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget10_01<br>$turget10_02<br>$turget10_03<br>$block_3_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Искомые выгоды</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget11_01<br>$turget11_02<br>$turget11_03<br>$turget11_04<br>$special_benefit_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Статус пользователя в компании</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget12_01<br>$turget12_02<br>$turget12_03<br>$turget12_04<br>$turget12_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень готовности к восприятию продукта / услуги</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget13_01<br>$turget13_02<br>$turget13_03<br>$turget13_04<br>$turget13_05<br>$turget13_06
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Интенсивность потребления данного рода продуктов / услуг</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget14_01<br>$turget14_02<br>$turget14_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Отношение к товару / услуге на данный момент</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$turget15_01<br>$turget15_02<br>$turget15_03<br>$turget15_04<br>$turget15_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Дополнительная Целевая аудитория<br>(сопутствующие потребители, посредники)</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Опишите потребителей или адресатов ваших товаров (услуг)</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Пол</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget01_01<br>$_02turget01_02
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Возраст</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget02_01<br>$_02turget02_02<br>$_02turget02_03<br>$_02turget02_04<br>$_02turget02_05<br>$_02turget02_06<br>$_02turget02_07<br>$_02turget02_08
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Географическое происхождение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02ethnos
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Семейное положение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget03_01<br>$_02turget03_02<br>$_02turget03_03<br>$_02turget03_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образование</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget04_01<br>$_02turget04_02<br>$_02turget04_03<br>$_02turget04_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Религия</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget05_01<br>$_02turget05_02<br>$_02turget05_03<br>$_02turget05_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Род занятий</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02doing
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень дохода в месяц на семью</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02earnings
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Общественный класс</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget06_01<br>$_02turget06_02<br>$_02turget06_03<br>$_02turget06_04<br>$_02turget06_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образ жизни</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget07_01<br>$_02turget07_02<br>$_02turget07_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Тип, эмоциональная структура личности</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget08_01<br>$_02turget08_02<br>$_02turget08_03<br>$_02turget08_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Нужен ли повод для совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget09_01<br>$_02turget09_02<br>$_02special_case_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Что останавливает ЦА от совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget10_01<br>$_02turget10_02<br>$_02turget10_03<br>$_02block_3_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Искомые выгоды</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget11_01<br>$_02turget11_02<br>$_02turget11_03<br>$_02turget11_04<br>$_02special_benefit_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Статус пользователя в компании</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget12_01<br>$_02turget12_02<br>$_02turget12_03<br>$_02turget12_04<br>$_02turget12_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень готовности к восприятию продукта / услуги</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget13_01<br>$_02turget13_02<br>$_02turget13_03<br>$_02turget13_04<br>$_02turget13_05<br>$_02turget13_06
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Интенсивность потребления данного рода продуктов / услуг</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget14_01<br>$_02turget14_02<br>$_02turget14_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Отношение к товару / услуге на данный момент</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_02turget15_01<br>$_02turget15_02<br>$_02turget15_03<br>$_02turget15_04<br>$_02turget15_05
    </td>
  </tr><tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Дополнительная Целевая аудитория<br>(сопутствующие потребители, посредники)</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Опишите потребителей или адресатов ваших товаров (услуг)</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Пол</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget01_01<br>$_03turget01_02
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Возраст</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget02_01<br>$_03turget02_02<br>$_03turget02_03<br>$_03turget02_04<br>$_03turget02_05<br>$_03turget02_06<br>$_03turget02_07<br>$_03turget02_08
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Географическое происхождение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03ethnos
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Семейное положение</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget03_01<br>$_03turget03_02<br>$_03turget03_03<br>$_03turget03_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образование</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget04_01<br>$_03turget04_02<br>$_03turget04_03<br>$_03turget04_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Религия</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget05_01<br>$_03turget05_02<br>$_03turget05_03<br>$_03turget05_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Род занятий</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03doing
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень дохода в месяц на семью</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03earnings
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Общественный класс</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget06_01<br>$_03turget06_02<br>$_03turget06_03<br>$_03turget06_04<br>$_03turget06_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Образ жизни</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget07_01<br>$_03turget07_02<br>$_03turget07_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Тип, эмоциональная структура личности</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget08_01<br>$_03turget08_02<br>$_03turget08_03<br>$_03turget08_04
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Нужен ли повод для совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget09_01<br>$_03turget09_02<br>$_03special_case_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Что останавливает ЦА от совершения сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget10_01<br>$_03turget10_02<br>$_03turget10_03<br>$_03block_3_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Искомые выгоды</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget11_01<br>$_03turget11_02<br>$_03turget11_03<br>$_03turget11_04<br>$_03special_benefit_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Статус пользователя в компании</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget12_01<br>$_03turget12_02<br>$_03turget12_03<br>$_03turget12_04<br>$_03turget12_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Уровень готовности к восприятию продукта / услуги</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget13_01<br>$_03turget13_02<br>$_03turget13_03<br>$_03turget13_04<br>$_03turget13_05<br>$_03turget13_06
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Интенсивность потребления данного рода продуктов / услуг</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget14_01<br>$_03turget14_02<br>$_03turget14_03
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Отношение к товару / услуге на данный момент</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$_03turget15_01<br>$_03turget15_02<br>$_03turget15_03<br>$_03turget15_04<br>$_03turget15_05
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Позиционирование</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Устоявшееся мнение потребителей о компании</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Как бы вы оценили отношение целевой аудитории (ЦА) к продуктам, услугам и сервису вашей компании? Какие есть психологические или иные барьеры к совершению сделки?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$barriers
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Позиционирование</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Выберите один из двух пунктов!</h5></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$radio
    </td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$competitor</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$dont_worse_text
    </td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$thebest_text</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Что нужно достигнуть этим проектом</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Исходя из вышеперечисленного, что является маркетинговой задачей проекта?</h5></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$positioning01_01<br>$positioning01_02<br>$positioning01_03<br>$positioning01_04<br>$another_task_text
    </td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Рекламное предложение ЦА</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Если заказчик воспользуется вашими услугами, то он получит:</h5></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$positioning02_01<br>$positioning02_02<br>$positioning02_03<br>$positioning02_04<br>$positioning02_05<br>$positioning02_06<br>$another_offer_text
    </td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Доказательства, подтверждающие предложение</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h5>Благодаря какому свойству продукта заказчик сможет получить желаемое (из предыдущего пункта) ?</h5></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$unique_text</td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid; color: #4dc1d0'><h3>Oформление сайта</h3></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Какое впечатление должно остаться у ЦА после посещения сайта?<br>Что не должно разрушать устоявшийся образ компании?</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$impression_text
    </td>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Стиль подачи материала</h3></td>
  </tr>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Какой стиль оформления предпочтителен?<br>Выберите не более 5-6 вариантов ответов</h4></td>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$collage01_01<br>$collage01_02<br>$collage01_03<br>$collage01_04<br>$collage01_05<br>$collage01_06<br>$collage01_07<br>$collage01_08<br>$collage01_09<br>$collage01_10<br>$collage01_11<br>$collage01_12<br>$collage01_13<br>$collage01_14<br>$collage01_15<br>$collage01_16<br>$collage01_17<br>$collage01_18<br>$collage01_19<br>$collage01_20<br>$collage01_21<br>$user_style_text
    </td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h3>Обязательные элементы оформления</h3></td>
  </tr>
  </tr>
  <tr style='background-color: #ffffff;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'><h4>Элементы, которые обычно присутствуют на всей рекламной и презентационной продукции Вашей компании (предоставляются заказчиком отдельно)</h4></td>
  </tr>
  <tr style='background-color: #f8f8f8;'>
    <td style='padding: 10px; border: #e9e9e9 1px solid;'>$collage02_01<br>$collage02_02<br>$collage02_03<br>$collage02_04<br>$collage02_05<br>$collage02_06<br>$collage02_07<br>$collage_nothing02
    </td>
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