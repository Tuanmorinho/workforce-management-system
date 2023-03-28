import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from "redux-first-history/rr6";
import { history, store } from 'redux/store';
import { theme } from 'utils/index';

import Auth from 'components/Guard/Auth';
import NoAuth from 'components/Guard/noAuth';
import AppLayout from 'layouts/AppLayout';
import LoginPage from 'pages/Auth/Login';
import RegisterPage from 'pages/Auth/Register';
import LandingPage from 'pages/Landing';
import MainPage from 'pages/Main';
import ThankYouPage from 'pages/Success';

export function App() {
  return (
    <Routes>
        <Route path='/' element={<AppLayout />}>

          <Route index element={<LandingPage />} />
          
          <Route path='auth' element={<NoAuth />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="register/success" element={<ThankYouPage />} />
          </Route>

          <Route path='wms' element={<Auth />}>
            <Route index element={<MainPage />} />

            <Route path="" element={<Navigate to="wms" />} />
            <Route path="*" element={<Navigate to="wms" />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  );
}

export function WrrapedApp() {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HistoryRouter history={history}>
                <CssBaseline />
                <App />
            </HistoryRouter>
        </ThemeProvider>
    </Provider>
  );
}