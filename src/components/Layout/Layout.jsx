import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Main, MainWrapper } from './Layout.styled';
import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';
import ScrollToTop from 'components/ScrollToTop/ScrollToTop';

function Layout() {
  return (
    <MainWrapper>
      <ScrollToTop />
      <AppBar />
      {/* </Container> */}
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer />
    </MainWrapper>
  );
}

export default Layout;