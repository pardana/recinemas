"use client";
import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../utils/api';
import HeroSection from '@/components/templates/HeroSection';
import MoviesPage from './movies/page';

const Home = () => {
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
    <>
      {/* <HeroSection /> */}
      <MoviesPage />
    </>
  );
};

export default Home;
