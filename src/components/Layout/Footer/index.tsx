import React from 'react';
import styled from 'styled-components';

const FooterRoot = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 60px;
  border-top: 1px solid black;
  justify-content: center;
  width: 100%;
`;

const FooterText = styled.div`
  padding-top: 17px;
`;

const Footer: React.FC = () => {
  return (
    <FooterRoot>
      <FooterText>CopyRight by airasia</FooterText>
    </FooterRoot>
  );
};

export default Footer;
