import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";

export function useGetFollowing() {
    const {
        data: getFollowing,
        refetch,
        isLoading,
        isError
    } = useQuery({
        queryKey: ["following"],
        // queryFn: async () => await API.get("/threads").then((res) => res.data),
        queryFn: async () => {
            const { data } = await API.get("/following");
            return data.data;
        },
    });
    return { getFollowing, refetch, isLoading, isError };
}
