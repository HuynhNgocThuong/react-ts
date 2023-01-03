import { ReactNode, createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
interface MovieContextProviderProps {
  children: ReactNode;
}
interface Movie {
  id: string;
  title: string;
}
interface MovieContextDefault {
  movies: Movie[];
  addMovie: (title: string) => void;
  deleteMovie: (id: string) => void;
}
const movieContextDefaltData = {
  movies: [],
  addMovie: () => {},
  deleteMovie: () => {},
};

export const MovieContext = createContext<MovieContextDefault>(
  movieContextDefaltData
);

const ProgressContextProvider = ({ children }: MovieContextProviderProps) => {
  const [movies, setMovies] = useState<Movie[]>(movieContextDefaltData.movies);
  const addMovie = (title: string) =>
    setMovies([...movies, { id: uuidv4(), title }]);
  const deleteMovie = (id: string) => {
    setMovies(movies.filter((element) => element.id !== id));
  };
  const movieContextData = { movies, addMovie, deleteMovie };
  return (
    <MovieContext.Provider value={movieContextData}>
      {children}
    </MovieContext.Provider>
  );
};

export default ProgressContextProvider;
