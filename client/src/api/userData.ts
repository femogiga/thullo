import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllUserData = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ['allUsers'],
        queryFn: () => apiService.get('/users').then((res) => res.data),
    });
    return { isPending, error, data };
};


export const useUserDataById = (id) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['usersById'],
        queryFn: () =>
            apiService
                .get(`/users/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, data };
};
