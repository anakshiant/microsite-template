import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeType } from '../../types';
import AppContext from '../../contexts/AppContext';

const ButtonRoot = styled.button<ThemeType>`
  background: ${props => props.primaryColor};
  height: 41px;
  width: 200px;
  color: white;
  font-weight: 600;
  font-size: 19px;
  border-radius: 12px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

type Props = {
  borderColor?: string;
  color?: string;
  disabled?: boolean;
  icon?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  title?: string;
  titleColor?: string;
  type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<Props> = (props: Props) => {
  const { primaryColor } = useContext(AppContext);
  return (
    <ButtonRoot primaryColor={primaryColor} {...props}>
      {props.title}
    </ButtonRoot>
  );
};

export default Button;
