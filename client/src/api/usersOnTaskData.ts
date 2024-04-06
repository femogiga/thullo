import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiService from "../utility/apiService";

export const useUserOnTasksMutation = () => {
    const queryClient = useQueryClient();
    const { isSuccess, error, mutateAsync: addUserToTaskMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post(`/usersontasks`, data);
            return response.data;
        },
        onSuccess: (data) => {

            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            queryClient.invalidateQueries({ queryKey: ['panelById'] })
            queryClient.invalidateQueries({ queryKey: ['boardUsers'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })


            //window.location.reload();


        }


    });
    return { isSuccess, error, addUserToTaskMutation };
};
