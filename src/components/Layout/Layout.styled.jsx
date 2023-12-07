import { desktop, max, min, tablet } from 'styles/mediaSizes';
import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  margin: 0 auto;
  ${min(tablet)} {
    width: 768px;
  }
  ${min(desktop)} {
    width: 1440px;
  }
`;

export const Main = styled.main`
  padding-top: 30px;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 30px;
  flex-grow: 1;
  ${max(tablet)} {
    max-width: 480px;
  }
`;

export const Container = styled.div`
  padding: 0 20px;
`;