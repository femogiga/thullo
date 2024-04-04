import {
  QueryClient,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import apiService from '../utility/apiService'
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUser } from '../features/authSlice';

export const useLoginMutation = () => {
  let responseData = null;
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const { isSuccess, error, mutate: loginMutation } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/auth/login', data);
      return response.data;
    },
    onSuccess: (data) => {
      responseData = data;
      localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('userData', JSON.stringify(data.user));
      dispatch(setIsAuthenticated(true))
      dispatch(setUser(data.user))

      navigate('/allboard');
    },
  });
  return { isSuccess, error, loginMutation, responseData };
};

export const useRegisterMutation = () => {
  const navigate = useNavigate();
  const { isSuccess, error, mutate: registerMutation } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.post('/auth/register', data);

      return response.data;
    },
    onSuccess: () => {
      navigate('/login');
    },
  });

  return { isSuccess, error, registerMutation };
};

export const useUpdateMutation = () => {
  const navigate = useNavigate();
  const { isSuccess, error, mutate: updateMutation } = useMutation({
    mutationFn: async (data) => {
      const response = await apiService.put('/auth/update', data);

      return response.data;
    },
    onSuccess: () => {
      navigate('/home');
    },
  });
  return { isSuccess, error, updateMutation };
};
