import { store, history } from 'redux/store';
import { theme } from 'utils/index';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HistoryRouter } from "redux-first-history/rr6";
import AppLayout from 'layouts/AppLayout';
import LoginPage from 'pages/Auth/Login';
import LandingPage from 'pages/Landing';

export function App() {
  return (
    <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="login" element={<LoginPage />} />

          <Route path="" element={<Navigate to="/" />} />
          <Route path="*" element={<Navigate to="/" />} />
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