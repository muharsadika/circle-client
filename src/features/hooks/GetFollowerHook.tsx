import { API } from "@/libs/API";
import { useQuery } from "@tanstack/react-query";

export function useGetFollower() {
    const {
        data: getFollower,
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["follower"],
        // queryFn: async () => await API.get("/threads").then((res) => res.data),
        queryFn: async () => {
            const { data } = await API.get("/following");
            return data.data;
        },
    });
    return { getFollower, refetch, isLoading };
}
