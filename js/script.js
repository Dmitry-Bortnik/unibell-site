$("body").on("click", ".btn", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1500);
});

$("body").on("click", ".contacts-nav a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 1500);
});

$(function () {
	//2. Получить элемент, к которому необходимо добавить маску
	$('input[name="phone"]').mask("+7 (999) 999-9999");
});

$(document).ready(function () {
	$("#visitka").submit(function () {
		$("#visitka button").prop("disabled", true).css({
			"background-color": "#b6b6b6",
			"color": "#FFF"
		}).text("Ждите...");


        window.open('mailto:d.bortnik2013@yandex.ru?subject=subject&body=Testing Email');
        
		// $.ajax({
		// 	type: "POST",
		// 	url: "http://gravitonsro.ru/send-uni.php",
		// 	data: $(this).serialize()
		// }).done(function () {
		// 	// yaCounter53745795.reachGoal('ORDER2');
		// 	$('#visitka').html("<div style='font-size:24px; margin-top:10px; color:#000;'>Спасибо За проявленный интерес!<br> Вы получите визитку на указанную вами почту");
		// });
        $('#visitka').html("<div style='font-size:24px; margin-top:10px; color:#000;'>Спасибо За проявленный интерес!<br> Вы получите визитку на указанную вами почту");
		return false;
	});
})