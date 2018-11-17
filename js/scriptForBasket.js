var number_m_office = 0;
var number_m_sport = 0;
var number_m_business = 0;
var number_w_office = 0;
var number_w_active = 0;
var number_w_sport = 0;

	function buttonPlusMOffice(e) {
		number_m_office=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+419)
	}
		function buttonMinusMOffice(e) {
			if (number_m_office!=0) {
				number_m_office=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-419)

			}
			}
		function buttonPlusMSport(e) {
		number_m_sport=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_sport)
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_sport);
			console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+489)
			;
	}
		function buttonMinusMSport(e) {
			if (number_m_sport!=0) {
				number_m_sport=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_sport)
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_sport);
			console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-489);
	}
		}
		function buttonPlusMBusiness(e) {
		number_m_business=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_business);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_business);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+449);
	}
		function buttonMinusMBusiness(e) {
			if (number_m_business!=0) {
				number_m_business=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_business);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_business);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-449);

			}
		}
	function buttonPlusWOffice(e) {
		number_w_office=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+349);
	}
		function buttonMinusWOffice(e) {
			if (number_w_office!=0) {
					number_w_office=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-349);

			}
	}
		function buttonPlusWSport(e) {
		number_w_sport=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_sport);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+419);
	}
		function buttonMinusWSport(e) {
			if (number_w_sport!=0) {
				number_w_sport=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_sport);
	console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-419);

			}
		}
		function buttonPlusWActive(e) {
		number_w_active=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_active);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_active);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)+389);
	}
		function buttonMinusWActive(e) {
			if (number_w_active!=0) {
					number_w_active=Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_active);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_active);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML)-389);

			}
	}
