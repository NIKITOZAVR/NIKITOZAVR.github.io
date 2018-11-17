var number_m_office = 0;
var number_m_sport = 0;
var number_m_business = 0;
var number_w_office = 0;
var number_w_active = 0;
var number_w_sport = 0;

	function buttonPlusMOffice(e) {
		number_m_office = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+419) + " грн.")
	}
		function buttonMinusMOffice(e) {
			if (number_m_office!=0) {
			number_m_office = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-419) + " грн.")
			}
			}
		function buttonPlusMSport(e) {
		number_m_sport = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_sport);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+489) + " грн.")
	
	}
		function buttonMinusMSport(e) {
			if (number_m_sport!=0) {
			number_m_sport = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_sport);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-489) + " грн.")
		}
		}
		function buttonPlusMBusiness(e) {
			number_m_business = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_business);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_business);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+449) + " грн.")
	}
		function buttonMinusMBusiness(e) {
			if (number_m_business!=0) {
					number_m_business = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_m_business);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_m_business);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-449) + " грн.")
	
			}
		}
	function buttonPlusWOffice(e) {
			number_w_office = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+349) + " грн.")
	}
		function buttonMinusWOffice(e) {
			if (number_w_office!=0) {
				number_w_office = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_office);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_office);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-349) + " грн.")
	
			}
	}
		function buttonPlusWSport(e) {
			number_w_sport = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_sport);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+419) + " грн.")
	}
		function buttonMinusWSport(e) {
			if (number_w_sport!=0) {
					number_w_sport = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_sport);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_sport);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-419) + " грн.")
	
			}
		}
		function buttonPlusWActive(e) {
		number_w_active = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)+1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_active);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_active);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm+389) + " грн.")
	}
		function buttonMinusWActive(e) {
			if (number_w_active!=0) {
					number_w_active = Number(e.parentElement.getElementsByClassName('number')[0].innerHTML)-1;
		var strSumm =Number(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.substring(0, e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML.length-5));
		console.log(e.parentElement.getElementsByClassName('number')[0].innerHTML=number_w_active);
		console.log(e.parentElement.getElementsByTagName('input')[0].value=number_w_active);
		console.log(e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('add_food_header')[3].innerHTML= (strSumm-389) + " грн.")
	
			}

	}

		function buttonMSportOrder(e) {
			number_m_sport=1;
		}
				function buttonMOfficeOrder(e) {
			number_m_office=1;
		}
				function buttonMBusinessOrder(e) {
			number_m_business=1;
		}
				function buttonWSportOrder(e) {
			number_w_sport=1;
		}
				function buttonWActiveOrder(e) {
			number_w_active=1;
		}
				function buttonWOfficeOrder(e) {
			number_w_office=1;
		}