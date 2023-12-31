import styled from 'styled-components';
import { NumericFormat } from 'react-number-format';

export const Filter = styled.form`
  margin: 0 auto;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 30px;
`;

export const MileageWrapper = styled.div`
  text-align: left;
`;

export const LabelMileage = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  color: var(--label-color);
`;

export const Mileage = styled.div`
  display: flex;
  gap: 1px;
  background-color: rgba(138, 138, 137, 0.2);
  border: none;
  border-radius: 14px;
  overflow: hidden;
`;
export const InputWrapper = styled.div`
  position: relative;
`;

export const Label = styled.p`
  position: absolute;
  left: 24px;
  top: 15px;
`;

export const SearchButton = styled.button`
  align-self: end;
  padding: 14px 44px;
  font-weight: 600;
  font-size: 14px;
   height: 48px;
  border-radius: 12px;
  background-color: var(--button-color);
  color: var(--invert-color);
  transition: background-color 500ms ease-in-out;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: var(--button-hover);
  }
  &:disabled {
    background-color: var(--secondary-color);
    opacity: 0.8;
    cursor: auto;
  }`;

export const Input = styled(NumericFormat)`
  padding-left: ${props => props.padding};
  width: 160px;
  height: 48px;
  background-color: var(--input-bg-color);
  border: none;
  outline: none;
`;