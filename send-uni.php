<?
        $to = 'info@unibell.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Заявка для получения визитки'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><b>Имя:</b> '.$_POST['name'].'</p> 
                        <p><b>Телефон:</b> '.$_POST['phone'].'</p> 
                        <p><b>Email:</b> '.$_POST['email'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: info@unibell.com \r\n" . "X-Mailer: PHP/" . phpversion(); //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail


        $to2 = '.$_POST['phone'].'; 
        $subject2 = 'Контактная информация Компании UNIBELL'; //Загаловок сообщения
        $message2 = '
                <html>
                    <body>
                        <p>Добрый день! Контактная информация Компании UNIBELL у Вас на почте. Благодарим за интерес к услугам Unibell.</p>  
                        <p>тел.8 800 201 22 16</p> 
                        <p>e-mail: info@unibell.ru                       www.unibell.ru     </p>                                   
                        <p>Адрес: г. Уфа, ул. Менделеева, 170, этаж 11, офис 1111 </p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers2  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers2 .= "From: info@unibell.com \r\n" . "X-Mailer: PHP/" . phpversion(); //Наименование и почта отправителя
        mail($to2, $subject2, $message2, $headers2); //Отправка письма с помощью функции mail
?>