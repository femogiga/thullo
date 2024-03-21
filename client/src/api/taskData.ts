import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllTaskData = () => {
    const { isPending, error, data: taskData } = useQuery({
        queryKey: ['allTask'],
        queryFn: () => apiService.get('/tasks').then((res) => res.data),
    });
    return { isPending, error, taskData };
};


export const useTaskDataById = (id) => {
    const { isPending, error, data: taskByIdData } = useQuery({
        queryKey: ['tasksById'],
        queryFn: () =>
            apiService
                .get(`/tasks/card/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, taskByIdData };
};


export const useTaskDataByPanelId = (panelId: number) => {
    const { isPending, error, data: taskByPanelIdData } = useQuery({
        queryKey: ['tasksPanelIddata'],
        queryFn: async () =>
            await apiService
                .get(`/tasks/${panelId}`)
                .then((res) => res.data),
    });
    return { isPending, error, taskByPanelIdData };
};
export const useTaskCardData = () => {
    const { isPending, error, data: taskCard } = useQuery({
        queryKey: ['taskCard'],
        queryFn: () =>
            apiService
                .get('/tasks/card')
                .then((res) => res.data),
    });
    return { isPending, error, taskCard };
};


export const useTaskCardMutation = () => {
    const { isSuccess, error, mutateAsync } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.put('/tasks/cardposition', data);
            return response.data;
        },
        onSuccess: (data) => {
            const queryClient = new QueryClient()
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })

            window.location.reload();


        }


    });


    return { isSuccess, error, mutateAsync };
};


export const useCreateTaskMutation = () => {
    const { isSuccess, error, mutateAsync: createTaskMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/tasks', data);
            return response.data;
        },
        onSuccess: (data) => {
            const queryClient = new QueryClient()
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, createTaskMutation };
};
