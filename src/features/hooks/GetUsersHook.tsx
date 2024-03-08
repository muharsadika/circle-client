import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";

export function useGetUsers() {
	const {
		data: GetUsers,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["Users"],
		queryFn: async () => {
			const { data } = await API.get("/users");
			return data.data;
		},
	});
	return {
		GetUsers,
		isLoading,
		error,
	};
}

