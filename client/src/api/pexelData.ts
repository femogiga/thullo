import { useQuery } from "@tanstack/react-query";
import apiService from "../utility/apiService";
import { photo } from '../tests/testData';


export const usePexelSearchData = (searchTerm) => {
    const { isPending, error, data:coverPhotoData } = useQuery({
        queryKey: ['photos',searchTerm],
        queryFn: () => apiService.get(`/pexel?searchterm=${searchTerm}`).then((res) => res.data),

        enabled: !!searchTerm
    });
    return { isPending, error, coverPhotoData };
};
