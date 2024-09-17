// src/app/movies/page.tsx

import React, { useEffect, useState } from 'react';
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies, getNowPlayingMovies } from '../../utils/api';

const MoviesPage = () => {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const popular = await getPopularMovies();
            const upcoming = await getUpcomingMovies();
            const topRated = await getTopRatedMovies();
            const nowPlaying = await getNowPlayingMovies();

            setPopularMovies(popular);
            setUpcomingMovies(upcoming);
            setTopRatedMovies(topRated);
            setNowPlayingMovies(nowPlaying);
        };

        fetchMovies();
    }, []);

    const imageUrl = process.env.NEXT_PUBLIC_TMDB_IMAGE_URL

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-4">Movies</h1>

            <h2 className="text-2xl font-semibold mb-4">Popular Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {popularMovies.map((movie: any) => (
                    <div key={movie.id} className="bg-white rounded shadow p-4">
                        <img
                            src={`${imageUrl}${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>{movie.overview.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Upcoming Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {upcomingMovies.map((movie: any) => (
                    <div key={movie.id} className="bg-white rounded shadow p-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>{movie.overview.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Top Rated Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {topRatedMovies.map((movie: any) => (
                    <div key={movie.id} className="bg-white rounded shadow p-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>{movie.overview.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-semibold mb-4">Now Playing Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {nowPlayingMovies.map((movie: any) => (
                    <div key={movie.id} className="bg-white rounded shadow p-4">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="rounded mb-4"
                        />
                        <h2 className="text-xl font-semibold">{movie.title}</h2>
                        <p>{movie.overview.substring(0, 100)}...</p>
                        <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesPage;
