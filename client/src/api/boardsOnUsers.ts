import { useQuery } from "@tanstack/react-query";
import apiService from "../utility/apiService";


export const useBoardsOnUsersByboardId = ((data) => {
    const { isPending, error, data: boardsOnUsersData } = useQuery({
        queryKey: ['boardsOnUsersByboardId'],
        queryFn: () =>
            apiService
                .get(`/boardsonusers?boardId=${data}`)
                .then((res) => res.data),
    });
    return { isPending, error, boardsOnUsersData };
});
