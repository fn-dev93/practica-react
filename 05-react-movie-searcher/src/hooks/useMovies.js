import { searchMovies } from "../services/movies";
import { useState, useRef, useMemo, useCallback } from "react";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const previousSearch = useRef(search);

  const getMovies = useCallback(
    async ({ search }) => {
      if (search === previousSearch.current) return;

      try {
        setLoading(true);
        setError(null);
        previousSearch.current = search;
        const movies = await searchMovies({ search });
        setMovies(movies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    },
    [search],
  );

  // const sortedMovies = useMemo(() => {
  //   return sort
  //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
  //     : movies;
  // }, [movies, sort]);

  return { movies, getMovies, loading, error }; 
}
