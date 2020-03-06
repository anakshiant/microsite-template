import React, { useContext } from 'react';
import styled from 'styled-components';

import AppContext from '../../../contexts/AppContext';
import NavItem from './NavItem';

type HeaderRootProps = {
  headerBackgroundColor: string;
};

const HeaderRoot = styled.div<HeaderRootProps>`
  display: flex;
  background: ${({ headerBackgroundColor }: HeaderRootProps) =>
    headerBackgroundColor};
  height: 70px;
  padding: 10px;
  justify-content: space-between;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
`;

const HeaderLeft = styled.div`
  display: flex;
  margin-left: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
`;

const HeaderIcon = styled.img`
  height: 50px;
  width: 50px;
`;

type Nav = {
  url: string;
  label: string;
};

const Header: React.FC = () => {
  const { headerBackgroundColor, micrositeImageUrl } = useContext(AppContext);
  const navLinks: Nav[] = [
    { label: 'Purchase', url: '/' },
    { label: 'Check Status Detail', url: '/mbrfile' },
    { label: 'File a new Mbr', url: '/mbrsearch' },
  ];

  return (
    <HeaderRoot headerBackgroundColor={headerBackgroundColor}>
      <HeaderLeft>
        <HeaderIcon src={micrositeImageUrl} />
      </HeaderLeft>
      <HeaderRight>
        {navLinks.map((navLink: Nav) => (
          <NavItem {...navLink} />
        ))}
      </HeaderRight>
    </HeaderRoot>
  );
};

export default Header;
