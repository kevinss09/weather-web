import React from "react";

export default function BottomPage({
	data,
	temperature,
	icon,
	temp2,
	image2,
	temp3,
	image3,
	temp4,
	image4,
	temp5,
	image5,
	temp6,
	image6,
}) {
	console.log(data);

	// const imageURL = "http://openweathermap.org/img/wn/" + icon + "@4x.png";
	return (
		<div className="botPage relative flex h-full w-fulll" id="bottom-page">
			<div className="my-6 mx-8 flex md:flex-row flex-col w-full">
				{/* First card that we gonna make  */}
				<div className="h-full w-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Monday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temperature} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}

				{/* First card that we gonna make  */}
				<div className="h-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 w-full items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Tuesday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${image2}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temp2} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}

				{/* First card that we gonna make  */}
				<div className="h-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 w-full items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Wednesday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${image3}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temp3} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}

				{/* First card that we gonna make  */}
				<div className="h-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 w-full items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Thursday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${image4}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temp4} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}

				{/* First card that we gonna make  */}
				<div className="h-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 w-full items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Friday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${image5}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temp5} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}

				{/* First card that we gonna make  */}
				<div className="h-full bg-white opacity-90 rounded-xl flex mx-4 md:w-1/6 w-full items-center justify-center relative">
					<div className="flex flex-col items-center justify-center h-full w-full">
						<h1 className="text-xl text-black mb-3">Saturday</h1>
						<div className=" flex w-28 h-28">
							<img
								src={`http://openweathermap.org/img/wn/${image6}@4x.png`}
								alt="cloudy"
								className="h-full w-full object-center object-cover"
							/>
						</div>
						<h1 className="mt-3 text-black text-2xl">{temp6} &deg; C</h1>
					</div>
				</div>
				{/* End of the first card that we gonna make  */}
			</div>
		</div>
	);
}

// {data.list?.map((item, index) => {
// 	return (
// 		<div
// 			key={index}
// 			className="h-full bg-white opacity-90 rounded-xl flex mx-4 w-1/6 items-center justify-center relative"
// 		>
// 			<div className="flex flex-col items-center justify-center h-full w-full">
// 				<h1 className="text-xl text-black mb-3">Monday</h1>
// 				<div className=" flex w-28 h-28">
// 					{/* Salah di bagian sini anjer  */}
// 					<img
// 						src={`"http://openweathermap.org/img/wn/${item.main.temp}@4x.png`}
// 						alt="cloudy"
// 						className="h-full w-full object-center object-cover"
// 					/>
// 				</div>
// 				<h1 className="mt-3 text-black text-2xl">
// 					{item.main.temp} &deg; C
// 				</h1>
// 			</div>
// 		</div>
// 	);
// })}
