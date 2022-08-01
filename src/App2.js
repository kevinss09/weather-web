import "./assets/css/app.css";
import TopPage from "./parts/TopPage";
import BottomPage from "./parts/BottomPage";
// import useAsync from "../src/helpers/hooks/useAsync";
import React from "react";
import axios from "axios";

// function App() {
// 	const { data, status, run, error } = useAsync();

// 	// // const [{ icon }, setState] = useState({
// 	// // 	icon: "",
// 	// // });

// 	React.useEffect(() => {
// 		run(
// 			fetch(
// 				`https://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
// 			).then(async (reponse) => {
// 				const jsonResponse = await reponse.json();
// 				if (reponse.ok) return jsonResponse;
// 				throw new Error(JSON.stringify(jsonResponse));
// 			})
// 		);
// 	}, [run]);

// 	console.log(data, status, error);

// 	return (
// 		<div className="all h-screen">
// 			<TopPage data={data} />
// 			<BottomPage />
// 			<img
// 				src="./images/cloudy-image.jpg"
// 				alt="Cloudy Image"
// 				className="h-full w-full inset-0 absolute object-cover object-center -z-10"
// 			/>
// 		</div>
// 	);
// }

// export default App;

// function updateState(value) {
// 	return getWeather(value);
// }

// export function getWeather(countryName) {
// 	const API = `https://api.openweathermap.org/data/2.5/forecast?q=${countryName}&units=metric&appid=964d5c93ec9190453d297f6518b8104f`;

// 	return API;
// }

// const country = updateState();

export default class App2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			icon: [],
			country: "",
			weather: [],
			temperature: [],
			feelsLike: [],
			humidity: [],
			pressure: [],
			countryName: "",
			timeOffset: [],
			temp2: [],
			image2: [],
			temp3: [],
			image3: [],
			temp4: [],
			image4: [],
			temp5: [],
			image5: [],
			temp6: [],
			image6: [],
		};
	}

	handleClick = (name) => {
		this.setState({ country: name }, () => {
			axios
				.get(
					this.state.country === ""
						? `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
						: `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.country}&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
				)
				.catch((err) => {
					alert("Please input the right city name!");
				})
				.then((res) => {
					// const data = res.data;
					this.setState({
						data: res.data,
						icon: res.data.list[0].weather[0].icon,
						weather: res.data.list[0].weather[0].main,
						temperature: res.data.list[0].main.temp,
						feelsLike: res.data.list[0].main.feels_like,
						humidity: res.data.list[0].main.humidity,
						pressure: res.data.list[0].main.pressure,
						countryName: res.data.city.country,
						timeOffset: res.data.city.timezone,
						temp2: res.data.list[7].main.temp,
						image2: res.data.list[7].weather[0].icon,
						temp3: res.data.list[15].main.temp,
						image3: res.data.list[15].weather[0].icon,
						temp4: res.data.list[23].main.temp,
						image4: res.data.list[23].weather[0].icon,
						temp5: res.data.list[31].main.temp,
						image5: res.data.list[31].weather[0].icon,
						temp6: res.data.list[39].main.temp,
						image6: res.data.list[39].weather[0].icon,
					});
				});
		});
	};

	render() {
		return (
			<div className="all h-screen">
				<TopPage
					data={this.state.data}
					icon={this.state.icon}
					handleClick={this.handleClick}
					country={this.state.country}
					temperature={this.state.temperature}
					feelsLike={this.state.feelsLike}
					humidity={this.state.humidity}
					pressure={this.state.pressure}
					countryName={this.state.countryName}
					timeOffset={this.state.timeOffset}
				/>
				<BottomPage
					data={this.state.data}
					temperature={this.state.temperature}
					icon={this.state.icon}
					temp2={this.state.temp2}
					image2={this.state.image2}
					temp3={this.state.temp3}
					image3={this.state.image3}
					temp4={this.state.temp4}
					image4={this.state.image4}
					temp5={this.state.temp5}
					image5={this.state.image5}
					temp6={this.state.temp6}
					image6={this.state.image6}
				/>
				<img
					src={`./images/${this.state.weather}.jpg`}
					alt={`${this.state.weather}`}
					className="h-full w-full inset-0 absolute object-cover object-center -z-10"
				/>
			</div>
		);
	}
}

// componentDidMount() {
// 	axios
// 		.get(
// 			this.state.country === ""
// 				? `https://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
// 				: `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.country}&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
// 		)
// 		.then((res) => {
// 			// const data = res.data;
// 			this.setState(
// 				{
// 					data: res.data,
// 					icon: res.data.list[0].weather[0].icon,
// 				},
// 				() => {
// 					console.log(this.state.country);
// 					console.log(this.state.data);
// 					console.log(this.state.icon);
// 				}
// 			);
// 		});
// }
