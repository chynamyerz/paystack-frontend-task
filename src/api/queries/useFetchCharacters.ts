import axios from "axios";
import { useQuery } from "react-query";

const fetchCharacters = async ({ urls }: { urls: string[] }) => {
  try {
    const charactersDetails = [];
    for await (const url of urls) {
      const res = await axios(url);
      charactersDetails.push(res.data);
    }
    return charactersDetails;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const useFetchCharacters = ({ urls }: { urls: string[] }) => {
  const { data, isLoading, isError } = useQuery(
    urls && ["characters", urls],
    async () => await fetchCharacters({ urls })
  );

  return {
    data,
    isLoading,
    isError,
  };
};
