import { useQuery } from "@tanstack/react-query";
import apiService from "../utility/apiService";

export const useAssetsByTaskData = (taskId: number) => {
    const { isPending, error, data: assetsByTaskData } = useQuery({
        queryKey: ['assetsByTaskId'],
        queryFn: () =>
            apiService
                .get(`/assets?taskId=${taskId}`)
                .then((res) => res.data),
    });
    return { isPending, error, assetsByTaskData };
};
