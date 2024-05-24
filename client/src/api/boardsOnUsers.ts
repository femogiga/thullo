import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiService from "../utility/apiService";


export const useBoardsOnUsersByboardId = ((data) => {
    const { isPending, error, data: boardsOnUsersData } = useQuery({
        queryKey: ['boardsOnUsersByboardId'],
        queryFn: () =>
            apiService
                .get(`/boardsonusers?boardId=${data}`)
                .then((res) => res.data),
    });
    return { isPending, error, boardsOnUsersData };
});


export const useBoardsOnUsersMutation = () => {
    const queryClient = useQueryClient();
    const { isSuccess, error, mutateAsync: boardsOnUserMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/boardsonusers', data);
            return response.data;
        },
        onSettled: (data) => {
            queryClient.invalidateQueries({ queryKey: ['boardsOnUsersByboardId'] })

        }


    });
    return { isSuccess, error, boardsOnUserMutation };
};

export const useDeleteBoardsOnUsersMutation = () => {
    const queryClient = useQueryClient();
    const { isSuccess, error, mutateAsync: deleteBoardsOnUserMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.remove(`/boardsonusers?userId=${data.userId}&boardId=${data.boardId}`);
            return response.data;
        },
        onSettled: (data) => {
            queryClient.invalidateQueries({ queryKey: ['boardsOnUsersByboardId'] })

        }


    });
    return { isSuccess, error, deleteBoardsOnUserMutation };
};
