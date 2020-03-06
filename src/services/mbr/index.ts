import client, { normalizeResponse } from '../index';
import {
  SearchMbrRequestType,
  ApiResponse,
  SearchMbrResponseType,
} from '../../types';

export const searchMbrService = (
  mbrSearchRequest: SearchMbrRequestType,
): Promise<ApiResponse<SearchMbrResponseType>> => {
  return normalizeResponse(
    client.get<ApiResponse<SearchMbrResponseType>>('/mbr', {
      params: mbrSearchRequest,
    }),
  );
};
