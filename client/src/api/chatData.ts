import { useQuery } from "@tanstack/react-query";
import apiService from "../utility/apiService";


export const useChatByTaskIdData = (taskId) => {
    const { isPending, error, data: chatByTaskIdData } = useQuery({
        queryKey: ['chatByTaskIdData'],
        queryFn: () => apiService.get(`/chats/task/${taskId}`).then((res) => res.data),
    });
    return { isPending, error, chatByTaskIdData };
};
