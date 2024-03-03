import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllPanelData = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['allPanel'],
        queryFn: () => apiService.get('/panel').then((res) => res.data),
    });
    return { isPending, error, data };
};


export const usePanelDataById = (id) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['panelById'],
        queryFn: () =>
            apiService
                .get(`/panels/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, data };
};



