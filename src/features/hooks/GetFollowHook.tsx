import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";

export function useGetFollow() {
	const {
		data: GetFollow,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["Follow"],
		queryFn: async () => {
			const { data } = await API.get("/user");
			return data.data;
		},
	});

	return {
		GetFollow,
		isLoading,
		error,
	};
}
