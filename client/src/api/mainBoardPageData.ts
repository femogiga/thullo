import apiService from '../utility/apiService';
import { useQueries, useQuery } from '@tanstack/react-query';
import { useAllPanelDatatwo } from './panelData';


export const useCardData = (id) => {
    const { isPending, error, data:cardData } = useQuery({
        queryKey: ['panelById'],
        queryFn: () =>
            apiService
                .get(`/panels/${id}`)
                .then((res) => res.data),
    });
    return { isPending, error, cardData };
};
