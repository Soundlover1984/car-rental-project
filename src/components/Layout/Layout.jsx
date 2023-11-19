import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, MainWrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';

function Layout() {
  return (
    <MainWrapper>
      <AppBar/>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;