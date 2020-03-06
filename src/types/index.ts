export type ApiError = {
  errorMessage: string;
};

export type ApiResponse<T> = {
  status: boolean;
  data: T;
  errors: ApiError[];
};

export type SearchMbrRequestType = {
  MbrNumber: string;
  ServiceNumber: string;
  FileReferenceNumber: string;
  BagTagNumber: string;
};

export type SearchMbrResponseType = {
  total: number;
  page: number;
  records: number;
  rows: SearchMbrResponseRowType[];
};

export type SearchMbrResponseRowType = {
  id: string;
  cell: string[];
};

export type ThemeType = {
  primaryColor: string;
};
