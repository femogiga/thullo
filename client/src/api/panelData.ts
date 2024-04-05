import {
    useQuery,
    useMutation,
    QueryClient,
    useQueryClient,
    useQueries,
} from '@tanstack/react-query';
import apiService from '../utility/apiService';
import { useParams } from 'react-router-dom';

export const useAllPanelData = () => {
    const { isPending, error, data: panelData } = useQuery({
        queryKey: ['allPanel'],
        queryFn: () => apiService.get('/panels').then((res) => res.data),
    });
    return { isPending, error, data: panelData };
};


export const usePanelDataById = (id) => {
    const { isPending, error, data: panelByIdData } = useQuery({
        queryKey: ['panelById'],
        queryFn: () =>
            apiService
                .get(`/panels/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, panelByIdData };
};

export const useCardPanelDataByIdCard = (id) => {
    const { isPending, error, data: cardPanelByIdData } = useQuery({
        queryKey: ['panelByIdcard'],
        queryFn: () =>
            apiService
                .get(`/panels/${id}/card`)
                .then((res) => res.data),
    });
    return { isPending, error, cardPanelByIdData };
};

export const usePanelDataByBoardId = (boardId) => {
    const { isPending, error, data: panelByBoardIdData } = useQuery({
        queryKey: ['panelByBoardId'],
        queryFn: () =>
            apiService
                .get(`/panels/${boardId}`)
                .then((res) => res.data),
    });
    return { isPending, error, panelByBoardIdData };
};




// useAllPanelData.js

export const useAllPanelDatatwo = (id) => { // Modify the hook to accept an id parameter
    const { id: boardId } = useParams()
    const { data: panelIds } = useQuery({
        queryKey: ['allPanel'],
        queryFn: () => apiService.get('/panels').then((res) => res.data),
        select: (panels) => panels.map((panel) => panel.id)
    });

    const taskData = useQueries({
        queries: panelIds ?
            panelIds.map((panelId) => {
                return {
                    queryKey: ['tasks', panelId],
                    queryFn: apiService
                        .get(`/mainboard/${boardId}/panels/${panelId}/tasks`) // Use the id parameter in the query URL
                        .then((res) => res.data),
                    enabled: !!id

                }
            })
            : []
    });

    return taskData; // Return the task data
}


export const useCreatePanelMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: createPanelMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/panels', data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            //queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, createPanelMutation };
};

export const useUpdatePanelMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: updatePanelMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.put('/panels', data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            //queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, updatePanelMutation };
};


export const useDeletePanelMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: deletePanelMutation } = useMutation({
        mutationFn: async (panelId) => {
            const response = await apiService.remove(`/panels/${panelId}`);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['panelByBoardId'] })
            queryClient.invalidateQueries({ queryKey: ['taskCard'] })
            queryClient.invalidateQueries({ queryKey: ['boardDataById'] })
            //queryClient.invalidateQueries({ queryKey: ['boardDataById'] })



        }


    });


    return { isSuccess, error, deletePanelMutation };
};
