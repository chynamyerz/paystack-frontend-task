import axios from "axios";
import { useQuery } from "react-query";

const fetchFilms = async () => {
  try {
    const res = await axios("https://swapi.dev/api/films");
    return res.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const useFetchFilms = () => {
  const { data, isLoading, isError } = useQuery("films", fetchFilms);

  return {
    data,
    isLoading,
    isError,
  };
};
