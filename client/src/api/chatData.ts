import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiService from "../utility/apiService";


export const useChatByTaskIdData = (taskId) => {
    const { isPending, error, data: chatByTaskIdData } = useQuery({
        queryKey: ['chatByTaskIdData'],
        queryFn: () => apiService.get(`/chats/task/${taskId}`).then((res) => res.data),
    });
    return { isPending, error, chatByTaskIdData };
};


export const useCreateChatMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: createChatMutation } = useMutation({
        mutationFn: async (data) => {
            const response = await apiService.post('/chats', data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['chatByTaskIdData'] })
        }


    });

    return { isSuccess, error, createChatMutation };
};

export const useUpdateChatMutation = () => {
    const queryClient = useQueryClient()

    const { isSuccess, error, mutateAsync: updateChatMutation } = useMutation({
        mutationFn: async (data) => {

            const response = await apiService.put(`/chats/${data.id}`, data);
            return response.data;
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['chatByTaskIdData'] })
        }


    });

    return { isSuccess, error, updateChatMutation };
};
