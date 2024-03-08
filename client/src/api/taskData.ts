import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';

export const useAllTaskData = () => {
    const { isPending, error, data:taskData } = useQuery({
        queryKey: ['allTask'],
        queryFn: () => apiService.get('/tasks').then((res) => res.data),
    });
    return { isPending, error, taskData };
};


export const useTaskDataId = (id) => {
    const { isPending, error, data: taskByPanelIdData } = useQuery({
        queryKey: ['tasksById'],
        queryFn: () =>
            apiService
                .get(`/tasks/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, taskByPanelIdData };
};


export const useTaskDataByPanelId = (panelId:number) => {
    const { isPending, error, data: taskByPanelIdData } = useQuery({
        queryKey: ['tasksPanelIddata'],
        queryFn:async () =>
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
