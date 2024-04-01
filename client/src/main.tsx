import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import AllBoardPage from './components/pages/allboard/AllBoardPage.tsx';
import BoardPage from './components/pages/mainboard/BoardPage.tsx';
import BoardPageTwo from './components/pages/mainboard/BoardPageTwo.tsx';
import Register from './components/pages/authentication/Register.tsx';
import Login from './components/pages/authentication/Login.tsx';
const queryClient = new QueryClient();

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/boards/:id' element={<BoardPage />} />
        <Route path='/allboard' element={<AllBoardPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
