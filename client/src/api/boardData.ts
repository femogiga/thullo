import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllBoardData = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['allBoard'],
        queryFn: () => apiService.get('/boards').then((res) => res.data),
    });
    return { isPending, error, data };
};
