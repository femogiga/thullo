import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';
import { getAllUsers, getUserById } from './functions/request';
import { useBoardDataId } from './boardData';
import { useMainPageData } from '../components/pages/mainboard/hooks/useMainPageData';
import { useTaskDataByPanelId } from './taskData';

export const useAllUserData = () => {
    const { isPending, error, data:allUserData } = useQuery({
        queryKey: ['allUsers'],
        queryFn: () => apiService.get('/users').then((res) => res.data),
    });
    return { isPending, error, allUserData };
};


export const useUserDataById = (id) => {
    const { isPending, error, data: userByIdData } = useQuery({
        queryKey: ['usersById'],
        queryFn: () =>
            apiService
                .get(`/users/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, userByIdData };
};


export const useGetAdmin = (boardId) => {
    const { boardByIdData } = useBoardDataId(boardId)
    const adminId = boardByIdData[0]?.adminId
    const {
        status,
        fetchStatus,
        data:adminUserData
    } = useQuery({
        queryKey: ['adminByBoard', adminId],
        queryFn: () =>
            apiService
                .get(`/users/${adminId}`)
                .then((res) => res.data),
        // The query will not execute until the userId exists
        enabled: !!adminId,
    })
    return {status,fetchStatus,adminUserData}
}


export const useGetBoardUsers = (id) => {
    const { isPending, error, data: boardUsersData } = useQuery({
        queryKey: ['boardUsers'],
        queryFn: () =>
            apiService
                .get(`/users/boardusers/${id}`)
                .then((res) => res.data),
    });

    return { isPending, error, boardUsersData }
}

export const useDeleteBoardUserMutation = () => {
    const queryClient = useQueryClient();

    const { isSuccess, error, mutateAsync: deleteMutate } = useMutation({
        mutationKey: ['deleteUser'],
        mutationFn: async (data) => {
            const {boardId,authorId} = data;
            const response = await apiService.remove(`/usersontasks/${boardId}/users/${authorId}`);
            return response.data;
        },
        onSettled: () => {

            queryClient.invalidateQueries({ queryKey: ['boardUsers'] })
            //queryClient.invalidateQueries()


            //window.location.reload();
//

        }


    });
    return { isSuccess, error, deleteMutate };
};



// export const useAllUserData = () => {
//     const { isPending, error, data: allUsersData } = useQuery({
//         queryKey: ['allUsers'],
//         queryFn: getAllUsers
//     });
//     return { isPending, error, allUsersData };
// };


// export const useUserDataById = (id) => {
//     const { isPending, error, data: userByIdData } = useQuery({
//         queryKey: ['usersById',id],
//         queryFn: getUserById(id)
//     });
//     return { isPending, error, userByIdData };
// };
