import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// For using static data
const useGenres = () => ({ data: genres, isLoading: false, error: null });

// For fetch data from api
// const useGenres = () => useData<Genre>("/genres");

export default useGenres;
