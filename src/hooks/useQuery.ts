import { useEffect, useState } from 'react';

export const useQuery = <ResponseData = unknown>(request: () => Promise<ResponseData>) => {
  const [data, setData] = useState<ResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await request();

      setData(data);
      setIsLoading(false);
    };

    getData();
  }, []);

  if (isLoading) throw Promise<ResponseData>;

  return data;
};
