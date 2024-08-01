import { UseMutationOptions, UseQueryOptions } from "react-query";
import { IUser } from "./user";

export type ApiServiceErr = any;
export type MutOpt<Response, TVariables = unknown> = UseMutationOptions<
  Response,
  ApiServiceErr,
  TVariables,
  unknown
>;
export type QueryOpt<Response, TVariables = unknown> = UseQueryOptions<
  Response,
  ApiServiceErr,
  TVariables,
  any[]
>;

export interface ParamOptions {
  limit: number;
  page: number;
  sortBy: string;
}

export interface IData {
  data: IUser[];
  message: string;
  success:boolean;
}