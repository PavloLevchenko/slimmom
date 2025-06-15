import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from '../Header/AppBar';
import Footer from 'components/Footer';
import BackgroundContainer from 'components/BackgroundContainer';

const Layout = () => {
  return (
    <BackgroundContainer>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </BackgroundContainer>
  );
};

export default Layout;
