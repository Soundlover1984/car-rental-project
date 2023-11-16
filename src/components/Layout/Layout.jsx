import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Main, MainWrapper } from './Layout.styled';
import HeaderBar from 'components/HeaderBar/HeaderBar';

function Layout() {
  return (
    <MainWrapper>
      <HeaderBar/>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer> © 2023 Denys Kovtun. All rights reserved.</footer>
    </MainWrapper>
  );
}

export default Layout;