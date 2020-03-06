import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../../contexts/AppContext';
import { ThemeType } from '../../types';

type Props = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

const TextInputRoot = styled.input<ThemeType>`
  border: 1px solid;
  flex: 1;
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  font-weight: 600;
  font-size: 12px;
  &:focus {
    outline: ${({ primaryColor }: ThemeType) => primaryColor};
  }
`;

const TextInput: React.FC<Props> = (props: Props) => {
  const { primaryColor } = useContext(AppContext);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };
  return (
    <TextInputRoot
      primaryColor={primaryColor}
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default TextInput;
