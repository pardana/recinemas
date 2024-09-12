"use client";
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../utils/api';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };

    fetchMovies();
  }, []);

  const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie: any) => (
          <div key={movie.id} className="bg-white rounded shadow p-4">
            <img
              src={`${imageUrl}${movie.poster_path}`}
              alt={movie.title}
              className="rounded mb-4"
            />
            <h2 className="text-2xl font-semibold">{movie.title}</h2>
            <p>{movie.overview.substring(0, 100)}...</p>
            <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
