import { useCallback, useRef, useReducer } from "react";

const defaultState = {
	data: null,
	status: "idle",
	error: null,
};

export default function useAsync(initialState) {
	const initialStateRef = useRef({
		...defaultState,
		...initialState,
	});

	const [{ data, status, error }, setState] = useReducer((state, action) => {
		return { ...state, ...action };
	}, initialStateRef.current);

	const run = useCallback(
		(promise) => {
			if (!promise || !promise.then) {
				throw new Error(
					"fail to get the api from the web  because it is not a promise "
				);
			}
			setState({ status: "pending" });
			return promise.then(
				(data) => {
					setState({ data, status: "resolved" });
					return data;
				},
				(error) => {
					console.log("Fail to fetch the api that we want");
					setState({
						status: "rejected",
						error: JSON.parse(error.message),
					});
				}
			);
		},
		[setState]
	);

	const setData = useCallback(
		(data) => {
			setState({ data });
		},
		[setState]
	);

	const setError = useCallback(
		(error) => {
			setState({ error });
		},
		[setState]
	);

	return { data, status, run, error, setData, setError };
}
