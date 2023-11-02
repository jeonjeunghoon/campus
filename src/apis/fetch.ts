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

  return { get };
};
