import React from 'react';
import styled from 'styled-components';

const MbrFilingRoot = styled.div`
  margin-top: 40px;
  display: flex;
`;

const MbrFilingHading = styled.div``;

const MbrFiling: React.FC = () => {
  return (
    <MbrFilingRoot>
      <MbrFilingHading>
        Search for your Mishandled Baggage Report
      </MbrFilingHading>
    </MbrFilingRoot>
  );
};

export default MbrFiling;
