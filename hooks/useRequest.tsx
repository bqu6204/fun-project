import axios, { AxiosInstance, Method, RawAxiosRequestHeaders } from "axios";
import { useState } from "react";

type TMethod =
  | "GET"
  | "get"
  | "POST"
  | "post"
  | "PUT"
  | "put"
  | "PATCH"
  | "patch"
  | "DELETE"
  | "delete";
type TMethodLowercase = "get" | "post" | "put" | "patch" | "delete";

interface IUseRequestProps {
  url: string;
  method: TMethod;
  headers?: RawAxiosRequestHeaders;
  body?: any;
  onSuccess?: (data: any) => void;
  onError?: (data: IUseRequestResponse["errors"]) => void;
}

interface IUseRequestResponse {
  doRequest: (props?: any) => Promise<any>;
  errors: JSX.Element | null | string[];
  isFetching: boolean;
}

const useRequest = ({
  url,
  method,
  body,
  headers,
  onSuccess,
  onError,
}: IUseRequestProps): IUseRequestResponse => {
  const [errors, setErrors] = useState<IUseRequestResponse["errors"]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const methodLowerCase =
    method.toLowerCase() as Partial<Method> as TMethodLowercase;

  const doRequest = async (props = {}, headerProps = {}) => {
    setIsFetching(true);
    try {
      setErrors(null);
      const response = await (axios as AxiosInstance)[methodLowerCase](
        url,
        { ...body, ...props },
        { headers: { ...headers, ...headerProps } }
      );

      if (onSuccess) onSuccess(response.data);

      setIsFetching(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setErrors(["Unknown error occur."]);
      if (onError) onError(errors);
    } finally {
      setIsFetching(false);
    }
  };

  return { doRequest, errors, isFetching };
};

export { useRequest };
