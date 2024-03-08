import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllBoardData = () => {
    const { isPending, error, data: allBoardData } = useQuery({
        queryKey: ['allBoard'],
        queryFn: () => apiService.get('/boards').then((res) => res.data),
    });
    return { isPending, error, data: allBoardData };
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
