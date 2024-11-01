import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';


import popcornImage from './assets/popcorn.png';

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20de37ec5318fefba13784367c0d8718";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=20de37ec5318fefba13784367c0d8718&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null); 
  const [noResults, setNoResults] = useState(false); 

  useEffect(() => {
    fetchMovies(APIURL + `&page=${page}`);
  }, [page]);

  const fetchMovies = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      if (data.results.length === 0) {
        setNoResults(true); 
        setMovies([]); 
        return;
      }

      const moviesWithDetails = await Promise.all(data.results.map(async (movie) => {
        const movieDetailsResponse = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=20de37ec5318fefba13784367c0d8718&append_to_response=credits`);

        if (!movieDetailsResponse.ok) {
          throw new Error('Failed to fetch movie details.');
        }

        const movieDetails = await movieDetailsResponse.json();
        return {
          ...movie,
          director: movieDetails.credits.crew.find(crewMember => crewMember.job === 'Director')?.name || 'Unknown',
          actors: movieDetails.credits.cast.slice(0, 5).map(actor => actor.name).join(', ') || 'Unknown',
          genreNames: movieDetails.genres.map(genre => genre.name).join(', '),
        };
      }));

      setMovies(moviesWithDetails);
      setError(null); 
      setNoResults(false); 
    } catch (err) {
      setError(err.message); 
      setMovies([]); 
      setNoResults(false); 
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      fetchMovies(SEARCHAPI + searchTerm);
      setPage(1);
    } else {
      fetchMovies(APIURL + `&page=1`);
    }
  };

  const handlePageChange = (direction) => {
    setPage((prevPage) => Math.max(1, prevPage + direction));
  };

  return (
    <div className="App">
      <header>
        <img src={popcornImage} alt="Movie Hub Icon" className="header-icon" />
        <h1 className="header-title">𝓜𝓸𝓿𝓲𝓮 𝓗𝓾𝓫</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search"
          />
        </form>
      </header>

      <main>
        <div className="movie-container">
          {error && <div className="error-message">{error}</div>} {/* Display error message */}
          {noResults && <div className="no-results-message">Oops! No results found. Please try another search.</div>} {/* Display no results message */}
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>

      <div className="pagination">
        <button onClick={() => handlePageChange(-1)} disabled={page === 1}>Previous</button>
        <span>Page {page}</span>
        <button onClick={() => handlePageChange(1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
