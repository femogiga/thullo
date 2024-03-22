import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiService from "../utility/apiService";

export const useTaskOnLabelMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: taskOnLabelMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/tasksonlabels', data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, taskOnLabelMutation };
};
