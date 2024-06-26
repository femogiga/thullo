import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';
import { useParams } from 'react-router-dom';

export const useAllBoardData = () => {
    const { isPending, error, data: allBoardData } = useQuery({
        queryKey: ['allBoard'],
        queryFn: () => apiService.get('/boards').then((res) => res.data),
    });
    return { isPending, error, data: allBoardData };
};


export const useAllBoardDataWithUser = () => {
    const { isPending : allBoardPagePending, error, data:allBoardDataWithUser } = useQuery({
        queryKey: ['allBoardWithData'],
        queryFn: () => apiService.get('/boards').then((res) => res.data),
    });
    return { allBoardPagePending, error,  allBoardDataWithUser };
};

export const useBoardDataId = (id) => {
    const { isPending, error, data: boardByIdData } = useQuery({
        queryKey: ['boardDataById'],
        queryFn: () =>
            apiService
                .get(`/boards/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, boardByIdData };
};


export const useBoardUpdateMutation = () => {
    const { id } = useParams()
    const queryClient = useQueryClient();
    const { isSuccess, error, mutateAsync } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.put(`/boards/${id}`, data);
            return response.data;
        },
        onSettled: (data) => {

            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            queryClient.invalidateQueries({ queryKey: ['panelById'] })

            //window.location.reload();


        }


    });
    return { isSuccess, error, mutateAsync };
};


export const useCreateBoardMutation = () => {
    const queryClient = useQueryClient();
    const { isSuccess, error, mutateAsync:createBoardMutate } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post(`/boards`, data);
            return response.data;
        },
        onSettled: (data) => {

            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            queryClient.invalidateQueries({ queryKey: ['panelById'] })

            //window.location.reload();


        }


    });
    return { isSuccess, error, createBoardMutate };
};
