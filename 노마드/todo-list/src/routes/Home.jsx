import { useEffect, useState } from 'react'
import Movie from '../components/Movie';

function Home() {
  const [ loading, setLoading ] = useState(true);
  const [ movies, setMovies ] = useState([]);

  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?mininum_rating=8.5&sort_by=year`
    );

    const json = await res.json();

    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? <h1>Loading</h1> : <div>
        {movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>}
    </>
  );
}

export default Home;