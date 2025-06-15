import { lazy, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';
import ThemeMode from './Theme/ThemeMode';
import Layout from './Layout';
import { PublicRoute } from 'components/PublicRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'reduxState/services/operations';
import CookieConsent from 'components/CookieConsent';
import Loader from './Loader';

const MainPage = lazy(() => import('../pages/MainPage'));
const RegistrationPage = lazy(() => import('../pages/registration'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const DiaryPage = lazy(() => import('../pages/Diary/DiaryPage'));
const CalculatorPage = lazy(() => import('../pages/Calculator'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const PrivacyPolicyPage = lazy(() => import('../pages/PrivacyPolicyPage'));

export const App = () => {
  const dispatch = useDispatch();
  const [redirectPage, setRedirectPage] = useState('/calculator');
  const { isRefreshing, userHasData } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (userHasData) {
      setRedirectPage('/diary');
    } else {
      setRedirectPage('/calculator');
    }
  }, [userHasData]);

  return (
    <HelmetProvider>
      <ThemeMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Routes>
            <Route path="/" element={isRefreshing ? <Loader /> : <Layout />}>
              <Route
                index
                element={
                  <PublicRoute redirectTo={redirectPage} restricted>
                    <MainPage />
                  </PublicRoute>
                }
              />
              <Route
                path="signup"
                element={
                  <PublicRoute redirectTo={redirectPage} restricted>
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute redirectTo={redirectPage} restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="diary"
                element={
                  <PrivateRoute>
                    <DiaryPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="calculator"
                element={
                  <PrivateRoute>
                    <CalculatorPage />
                  </PrivateRoute>
                }
              />
              <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ToastContainer theme="colored" position="bottom-right" />
          <CookieConsent />
        </ThemeProvider>
      </ThemeMode>
    </HelmetProvider>
  );
};
