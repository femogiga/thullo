import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllBoardPageDataById = (id:number) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['allBoardById'],
        queryFn: () => apiService.getById('/allboard',id).then((res) => res.data),
    });
    return { isPending, error, data };
};

export const useAllBoardPageData = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['allBoardPage'],
        queryFn: () => apiService.get('/allboard').then((res) => res.data),
    });
    return { isPending, error, data };
};
