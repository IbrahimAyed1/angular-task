import { IResult, Support } from './IResult';

export class Result<T> implements IResult<T> {
  page: number;
  per_page: 6;
  support: Support;
  total: number;
  total_pages: 2;
  succeeded: boolean;
  message: string[];
  data: T | T[];
  source: string;
  exception: string;
  errorCode: number;
}
