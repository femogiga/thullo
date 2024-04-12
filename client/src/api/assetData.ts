import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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


export const useDeleteAssetMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: deleteAssetMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.remove(`/assets?id=${data?.id}`);
            return response.data;
        },
        onSuccess: (data) => {

            queryClient.invalidateQueries({ queryKey: ['assetsByTaskId'] })



        }


    });


    return { isSuccess, error, deleteAssetMutation };
};
