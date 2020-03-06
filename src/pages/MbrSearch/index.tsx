import React, { useContext } from 'react';
import MbrSearchContext from '../../contexts/MbrSearchContext';
import styled from 'styled-components';
import TextInput from '../../components/Common/TextInput';
import Button from '../../components/Common/Button';

const MbrSearchRoot = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MbrSearchHading = styled.div`
  width: 80%;
`;

const MbrSearchHeadingText = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const MbrSearchCard = styled.div`
  margin-top: 40px;
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  min-height: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const MbrSearchInput = styled(TextInput)`
  & {
    color: red;
    margin-left: 10px;
  }
`;

const MbrSearchButton = styled(Button)`
  margin-top: 10px;
  align-self: flex-end;
`;

const MbrSearchInputRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const MbrSearchInstruction = styled.div`
  font-weight: 400;
  font-size: 18px;
`;

const MbrSearch: React.FC = () => {
  const { state, dispatch, searchMbr } = useContext(MbrSearchContext);

  const setBagTagNumber = (bagTagNumber: string): void => {
    dispatch({ type: 'SET_BAG_TAG_NUMBER', payload: bagTagNumber });
  };

  const setMbrNumber = (mbrNumber: string): void => {
    dispatch({ type: 'SET_MBR_NUMBER', payload: mbrNumber });
  };

  const setServiceNumber = (serviceNumber: string): void => {
    dispatch({ type: 'SET_SERVICE_NUMBER', payload: serviceNumber });
  };

  const setPirNumber = (pirNumber: string): void => {
    dispatch({ type: 'SET_PIR_NUMBER', payload: pirNumber });
  };

  return (
    <MbrSearchRoot>
      <MbrSearchHading>
        <MbrSearchHeadingText>
          Search for your Mishandled Baggage Report
        </MbrSearchHeadingText>
      </MbrSearchHading>
      <MbrSearchCard>
        <MbrSearchInstruction>
          Search by (Please select one)
        </MbrSearchInstruction>
        <MbrSearchInputRow>
          <MbrSearchInput
            placeholder="Service Number"
            value={state.input.serviceNumber}
            onChange={setServiceNumber}
          />
          <MbrSearchInput
            placeholder="Mbr Report Number"
            value={state.input.mbrNumber}
            onChange={setMbrNumber}
          />
        </MbrSearchInputRow>
        <MbrSearchInputRow>
          <MbrSearchInput
            placeholder="PIR Number"
            value={state.input.pirNumber}
            onChange={setPirNumber}
          />
          <MbrSearchInput
            placeholder="Bag Tag Number"
            value={state.input.bagTagNumber}
            onChange={setBagTagNumber}
          />
        </MbrSearchInputRow>
        <MbrSearchButton title="Search" onClick={searchMbr} />
      </MbrSearchCard>
    </MbrSearchRoot>
  );
};

export default MbrSearch;
