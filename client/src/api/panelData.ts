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
    const { isPending, error, data } = useQuery({
        queryKey: ['panelById'],
        queryFn: () =>
            apiService
                .get(`/panels/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, data };
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
