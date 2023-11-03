export const fetchApis = () => {
  const get = async <ResponseData>(requestUrl: string) => {
    try {
      const response = await fetch(requestUrl);

      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);

      const data: ResponseData = await response.json();

      return { data };
    } catch (error) {
      return { data: null, error };
    }
  };

  const mutation = async <RequestBody>(
    method: 'POST' | 'PATCH' | 'PUT' | 'DELETE',
    requestUrl: string,
    body: RequestBody | null = null,
  ) => {
    try {
      const response = await fetch(requestUrl, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  return { get, mutation };
};
