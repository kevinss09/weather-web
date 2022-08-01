// import React from "react";

const date = new Date();

// export function getTimezoneOffset(num) {
// 	var d = new Date();
// 	// console.log("Now " + d);

// 	var utc_offset = d.getTimezoneOffset();
// 	d.setMinutes(d.getMinutes() + utc_offset);
// 	// console.log("UTC " + d);

// 	// Vancouver offset
// 	console.log(num);
// 	var country_offset = num / 60 / 60;
// 	d.setMinutes(d.getMinutes() + country_offset);
// 	// console.log("Vancouver" + d);
// }

export function getTime(timeoffset) {
	// get the time fron timeofffset
	var d = new Date();
	var utc_offset = d.getTimezoneOffset();
	d.setMinutes(d.getMinutes() + utc_offset);
	var country_offset = timeoffset / 60;
	d.setMinutes(d.getMinutes() + country_offset);

	// it should return like Fri May 20 2022 07:50:48 GMT-0700 (Pacific Daylight Time)

	var hours = d.getHours();
	var minutes = d.getMinutes();
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	minutes = minutes < 10 ? "0" + minutes : minutes;
	var time = hours + ":" + minutes + " ";
	return time;
}

export function getAMPM(timeoffset) {
	// get the time fron timeofffset
	var d = new Date();
	var utc_offset = d.getTimezoneOffset();
	d.setMinutes(d.getMinutes() + utc_offset);
	var country_offset = timeoffset / 60;
	d.setMinutes(d.getMinutes() + country_offset);
	// console.log(d);

	// it should return like Fri May 20 2022 07:50:48 GMT-0700 (Pacific Daylight Time)

	var hours = d.getHours();
	// var minutes = d.getMinutes();
	// var seconds = d.getSeconds();
	// console.log(hours);
	// console.log(minutes);
	// console.log(seconds);
	var ampm = hours >= 12 ? "pm" : "am";
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	// minutes = minutes < 10 ? "0" + minutes : minutes;
	var Time = " " + ampm;
	return Time;
}

export function getFullDay(timeoffset) {
	return date.toLocaleDateString("en-us", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}
