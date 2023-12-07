import styled from 'styled-components';
import { max, tablet } from 'styles/mediaSizes';

export const TitleStyle = styled.h1`
  font-size: 46px;
  color: var(--button-color);
  margin-bottom: 30px;
  margin-top: 30px;
  ${max(tablet)} {
    font-size: 32px;
  }
`;