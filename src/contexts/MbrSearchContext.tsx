import React, { useReducer, ReducerWithoutAction } from 'react';
import { ApiResponse, SearchMbrResponseType } from '../types';
import { searchMbrService } from '../services/mbr';

type MbrSearchState = {
  processing: boolean;
  input: {
    mbrNumber: string;
    serviceNumber: string;
    bagTagNumber: string;
    pirNumber: string;
  };
  result?: ApiResponse<SearchMbrResponseType>;
};

const initialState: MbrSearchState = {
  processing: false,
  input: {
    mbrNumber: '',
    serviceNumber: '',
    bagTagNumber: '',
    pirNumber: '',
  },
};

type MbrSearchContextType = {
  state: MbrSearchState;
  searchMbr: () => Promise<void>;
  dispatch: React.Dispatch<Action>;
};

type Action =
  | {
      type: 'SET_MBR_NUMBER';
      payload: string;
    }
  | {
      type: 'SET_SERVICE_NUMBER';
      payload: string;
    }
  | {
      type: 'SET_BAG_TAG_NUMBER';
      payload: string;
    }
  | {
      type: 'SET_PIR_NUMBER';
      payload: string;
    }
  | {
      type: 'MBR_SEARCH_REQUEST_START';
    }
  | {
      type: 'MBR_SEARCH_REQUEST_SUCCESS';
      payload: ApiResponse<SearchMbrResponseType>;
    }
  | {
      type: 'MBR_SEARCH_RESPONSE_FAILED';
      payload: string;
    };

const MbrSearchContext = React.createContext<MbrSearchContextType>({
  state: initialState,
  dispatch: () => {},
  searchMbr: async () => {},
});

type Props = {
  children: React.ReactNode;
};

function reducer(state: MbrSearchState, action: Action): MbrSearchState {
  switch (action.type) {
    case 'SET_BAG_TAG_NUMBER':
      return {
        ...state,
        input: {
          bagTagNumber: action.payload,
          mbrNumber: '',
          serviceNumber: '',
          pirNumber: '',
        },
      };
    case 'SET_MBR_NUMBER':
      return {
        ...state,
        input: {
          bagTagNumber: '',
          mbrNumber: action.payload,
          serviceNumber: '',
          pirNumber: '',
        },
      };
    case 'SET_SERVICE_NUMBER':
      return {
        ...state,
        input: {
          bagTagNumber: '',
          mbrNumber: '',
          serviceNumber: action.payload,
          pirNumber: '',
        },
      };
    case 'SET_PIR_NUMBER':
      return {
        ...state,
        input: {
          bagTagNumber: '',
          mbrNumber: '',
          serviceNumber: '',
          pirNumber: action.payload,
        },
      };
    case 'MBR_SEARCH_REQUEST_START':
      return {
        ...state,
        processing: true,
      };
    case 'MBR_SEARCH_RESPONSE_FAILED':
      return {
        ...state,
        processing: false,
      };
    case 'MBR_SEARCH_REQUEST_SUCCESS':
      return {
        ...state,
        processing: false,
        result: action.payload,
      };
    default:
      return state;
  }
}

export const MbrSearchProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const searchMbr = async () => {
    try {
      dispatch({ type: 'MBR_SEARCH_REQUEST_START' });
      const response: ApiResponse<SearchMbrResponseType> = await searchMbrService(
        {
          ServiceNumber: state.input.serviceNumber,
          MbrNumber: state.input.mbrNumber,
          BagTagNumber: state.input.bagTagNumber,
          FileReferenceNumber: state.input.pirNumber,
        },
      );
      dispatch({ type: 'MBR_SEARCH_REQUEST_SUCCESS', payload: response });
    } catch (err) {
      dispatch({ type: 'MBR_SEARCH_RESPONSE_FAILED', payload: err.message });
    }
  };

  return (
    <MbrSearchContext.Provider value={{ state, dispatch, searchMbr }}>
      {children}
    </MbrSearchContext.Provider>
  );
};

export default MbrSearchContext;
