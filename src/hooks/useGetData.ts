import { useEffect, useState } from 'react';

import { fetchApis } from 'apis/fetch';

export const useGetData = <ResponseData = unknown>(requestUrl: string) => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { get } = fetchApis();
      const { data, error } = await get<ResponseData>(requestUrl);

      setData(data);
      setIsError(Boolean(error));
      setIsLoading(false);
    };

    getData();
  }, [requestUrl]);

  return { data, isLoading, isError };
};
