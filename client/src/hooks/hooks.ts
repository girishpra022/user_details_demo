import axios from "axios";
import { QueryOptions, useMutation, useQuery } from "react-query";
import { ParamOptions, ApiServiceErr, MutOpt, IData } from "../interface/api";
import { IUser } from "../interface/user";
import { userAPI } from "../services/user.service";


export const useGetUsers = (
  { limit, page, sortBy }: ParamOptions,
  opt?: QueryOptions<IData>,
) =>
  useQuery<IData, ApiServiceErr>(
    [limit, page, sortBy],
    async () => {
      const response = await axios.get(
        userAPI.getAll.url,
      );
      return response.data;
    },
    opt,
  );

  export const useUpdateUser = (opt?: MutOpt<IUser>) =>
    useMutation<IUser, ApiServiceErr, IUser>(async (data) => {
      const response = await axios.post(userAPI.createUser.url, data);
      return response.data;
    }, opt);