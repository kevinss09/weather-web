import "./assets/css/app.css";
import TopPage from "./parts/TopPage";
import BottomPage from "./parts/BottomPage";
import useAsync from "../src/helpers/hooks/useAsync";
import React from "react";
// import axios from "axios";

function App() {
	const { run } = useAsync();

	// const [{ icon }, setState] = useState({
	// 	icon: "",
	// });

	React.useEffect(() => {
		run(
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?q=vancouver&units=metric&appid=964d5c93ec9190453d297f6518b8104f`
			).then(async (reponse) => {
				const jsonResponse = await reponse.json();
				if (reponse.ok) return jsonResponse;
				throw new Error(JSON.stringify(jsonResponse));
			})
		);
	}, [run]);

	return (
		<div className="all h-screen">
			<TopPage />
			<BottomPage />
			<img
				src="./images/cloudy-image.jpg"
				alt="Cloudy"
				className="h-full w-full inset-0 absolute object-cover object-center -z-10"
			/>
		</div>
	);
}

export default App;

// "https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=964d5c93ec9190453d297f6518b8104f"
