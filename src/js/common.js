$(document).ready(function() {



	$('.fa-bars').click(function () {
		$('.hidden-menu').slideToggle(1000);

	});


	//Расчет профнастила



	$('#profnastil').submit(function(e){
		e.preventDefault();
		submitaction();
	});


	function submitaction(){

		$('#add').remove();
		var length = $('#length').val(); // длина забора

		if(length)
		{
			var step = $('#step').val(); // количетсво столбов
			var higth = $('#higth').val(); // высота забора в м
			var material = $('#material').val(); // цена материла за м2
			var lagicol = $('#lagicol').val(); // количество лаг
			var stolb = $('#stolb').val(); // цена материала за столб 1м
			var lagid = $('#lagid').val(); // цена лаги за 1м от материала
			var vorota = $('#vorota').val(); // количетство ворот
			var kalitka = $('#kalitka').val(); // количество калиток

			var stroimostvorot = 50000; // стоимость ворот
			var stroimostkalitki = 10000; // строимость калитки

			var cenastolbov = (length/step+1)*stolb*higth+ 0.6; // цена столбов
			var cenalag = (length*lagicol)*lagid; // цена лаг
			var cenasten = (length*higth)*material; // цена материала
			var cenavorot = vorota*stroimostvorot; // цена ворот
			var cenakalitki = kalitka*stroimostkalitki; // цена калитки
			var cenamateriala = cenastolbov+cenalag+cenasten+cenavorot+cenakalitki; // общая цена маетирала
			var cenarabot = cenamateriala*1.30; // цена работ на 30% дороже стоисоти материалов коэфициент
			var itogo = cenamateriala+cenarabot; // итого

			itogo = itogo.toFixed(2);
			$('#profnastil').append("<span id='add'>Стоимоть вашего забора: "+itogo+"рублей</span>");

		}
		else{

			$('#profnastil').append("<span id='add'>Длина забора обязательный параметр</span>");


		}






	}


















	////Цели для Яндекс.Метрики и Google Analytics
	//$(".count_element").on("click", (function() {
	//	ga("send", "event", "goal", "goal");
	//	yaCounterXXXXXXXX.reachGoal("goal");
	//	return true;
	//}));

	//SVG Fallback
	//if(!Modernizr.svg) {
	//	$("img[src*='svg']").attr("src", function() {
	//		return $(this).attr("src").replace(".svg", ".png");
	//	});
	//};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	//$("#form").submit(function() {
	//	$.ajax({
	//		type: "POST",
	//		url: "mail.php",
	//		data: $(this).serialize()
	//	}).done(function() {
	//		alert("Спасибо за заявку!");
	//		setTimeout(function() {
	//
	//			$("#form").trigger("reset");
	//		}, 1000);
	//	});
	//	return false;
	//});

	//Chrome Smooth Scroll
	//try {
	//	$.browserSelector();
	//	if($("html").hasClass("chrome")) {
	//		$.smoothScroll();
	//	}
	//} catch(err) {
    //
	//};

	//$("img, a").on("dragstart", function(event) { event.preventDefault(); });
//
});

//$(window).load(function() {
//
//	$(".loader_inner").fadeOut();
//	$(".loader").delay(400).fadeOut("slow");
//
//});



