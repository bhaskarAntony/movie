// src/hooks/useMovies.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../redux/slices/movieSlice';

export const useMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.list);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchMovies());
  }, [status, dispatch]);

  return { movies, status };
};
