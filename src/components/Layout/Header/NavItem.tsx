import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavItemRoot = styled.div`
  display: flex;
  height: 20px;
  border: 1px solid black;
  border-radius: 3px;
  height: 30px;
  padding: 5px 18px 5px 18px;
  &:hover {
    border: 1px solid red;
    color: red;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  margin-left: 22px;
  &:visited {
    color: black;
  }
`;

type NavItemProps = {
  label: string;
  url: string;
};

const NavItem: React.FC<NavItemProps> = (props: NavItemProps) => {
  return (
    <NavLink to={props.url}>
      <NavItemRoot>{props.label}</NavItemRoot>
    </NavLink>
  );
};

export default NavItem;
