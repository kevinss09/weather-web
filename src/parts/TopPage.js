import React, { useState } from "react";
import {
	getTime,
	getAMPM,
	getFullDay,
	// getTimezoneOffset,
} from "../helpers/Date/getDate";
// import { getWeather } from "../App2";
import { countries } from "country-data";

export default function TopPage({
	data,
	icon,
	handleClick,
	country,
	temperature,
	feelsLike,
	humidity,
	pressure,
	countryName,
	timeOffset,
}) {
	const [name, setName] = useState("");

	function handleChange(event) {
		const target = event.target.value;
		setName(target);
	}

	function handleClickTopPage(event) {
		handleClick(name);
		event.preventDefault();
	}

	// console.log(data);
	// console.log(getTime(timeOffset));

	const imageURL = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
	return (
		<div className="topPage relative flex" id="top-page">
			{/* leftSection */}
			<div className="w-1/2 h-full relative">
				<div className="flex mx-24 mt-16 flex-col pl-0">
					<div className="flex items-end">
						<h1 className="pr-1 text-9xl text-white font-bold">
							{getTime(timeOffset)}
						</h1>
						<h5 className="text-2xl text-white font-bold">
							{getAMPM(timeOffset)}
						</h5>
					</div>
					<h3 className="text-3xl text-white font-bold mt-2">
						{getFullDay(timeOffset)}
					</h3>
				</div>
				<div className="flex flex-row mx-24 mt-12 justify-between">
					<div className="flex flex-col pl-0">
						<h5 className="text-white text-2xl font-semibold py-2">
							Temperature: {temperature} &deg;C
						</h5>
						<h5 className="text-white text-2xl font-semibold py-2">
							Feels like: {feelsLike} &deg;C
						</h5>
						<h5 className="text-white text-2xl font-semibold py-2">
							Humidity: {humidity}%
						</h5>
						<h5 className="text-white text-2xl font-semibold py-2">
							Pressure: {pressure} KPA
						</h5>
					</div>
					<div className="h-full">
						{country === "" ? (
							<div className="h-full"></div>
						) : (
							<img
								src={imageURL}
								alt=""
								className="w-full h-full object-center object-cover"
							/>
						)}
					</div>
				</div>
			</div>
			{/* End of left section */}

			{/* Right Section */}
			<div className="w-1/2 h-full">
				<div className="flex items-center justify-end mx-24 mt-16">
					<form
						id="cityName"
						className="relative flex items-center"
						onSubmit={handleClickTopPage}
					>
						<input
							type="text"
							placeholder="Search for a city"
							value={name}
							onChange={handleChange}
							autoFocus
							className="formInput text-3xl mr-2 text-black"
						/>
						<button
							type="submit"
							className="formButton p-4 bg-white text-black rounded-xl mb-2 hover:text-white hover:bg-black transition duration-200"
							// onClick={handleClick}
						>
							SUBMIT
						</button>
						<span className="msg"></span>
					</form>
				</div>
				<div className="flex mx-24 mt-24 flex-col pr-0">
					<div className="flex items-end flex-col">
						<h2 className="text-4xl text-white font-bold pb-2">
							{country === "" ? "Vancouver" : country}
						</h2>
						<h3 className="text-2xl text-white font-semibold ">
							{countryName === "" ? "Canada" : countries[countryName].name}
						</h3>
					</div>
				</div>
			</div>

			{/* End of right section */}
		</div>
	);
}
