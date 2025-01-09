import { useParams } from 'react-router-dom';
import {useEffect} from "react";

function Detail() {
  const { id } = useParams();

  const getMovie = async () => {
    const res = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)

    const movie = await res.json();

    console.log(movie)
  }

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <h1> Detail </h1>
  )
}

export default Detail;