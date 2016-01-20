 "use strict"
 function cs142FormatTime(date){
	// Sunday, July 1, 2015 02:46 PM
	var res = '';
	var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	res = res + week[date.getDay()] + ', '


	var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	res = res + month[date.getMonth()] + ' ' + date.getDate() + ", "  + date.getFullYear() + " "

	var hour = date.getHours();
	var ampm = "AM"
	if (hour == 0){
		hour += 12;
	}
	if (hour > 12){
		hour -= 12
		ampm = "PM"
	}
	if (hour < 10){
		hour = '0' + hour;
	}

	
	var mins = date.getMinutes();
	if (mins < 10){
		mins = '0' + mins;
	}
	res = res + hour + ":" + mins + " "+ ampm;
	console.log(res);
	return res;
}