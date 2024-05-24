import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiService from "../utility/apiService";

export const useLabelByTaskIdData = (taskId) => {
    const { isPending, error, data: labelByTaskIdData } = useQuery({
        queryKey: ['labelByTaskIdData'],
        queryFn: () => apiService.get(`/labels/tasks/${taskId}`).then((res) => res.data),
    });
    return { isPending, error, labelByTaskIdData };
};



export const useLabelMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: labelMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/labels', data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, labelMutation };
};
