import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

const LayoutRoot = styled.div``;

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <LayoutRoot>
      <Header />
      {props.children}
      <Footer />
    </LayoutRoot>
  );
};

export default Layout;
