import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams(); // URL에서 'id' 값을 가져옴
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );

      const json = await response.json();

      setMovie(json.data.movie);
      setLoading(false); // 로딩 상태 해제
    };

    fetchMovie();
  }, [id]); //dependency array안에 id넣어줌. id가 변경될 때마다 실행됨. url바뀌면 자동으로 다시 데이터 불러옴

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className={styles.detailCard}>
      <img
        src={movie.medium_cover_image}
        alt={movie.title}
        className={styles.poster}
      />
      <div className={styles.detailContent}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h2 className={styles.subtitle}>
          {movie.year} · {movie.runtime} min
        </h2>
        <h3 className={styles.rating}>⭐ {movie.rating}</h3>
        <p className={styles.description}>
          {movie.description_full ||
            "Sorry, no description available for this movie."}
        </p>
        <div className={styles.genres}>
          {movie.genres?.map((genre) => (
            <span key={genre} className={styles.genreTag}>
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

/*return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <p>Rating: {movie.rating}</p>

          <h1>{movie.title}</h1>
          <h2>
            {movie.year} · {movie.runtime} min
          </h2>
          <p>
            {movie.description_full
              ? movie.description_full
              : "Sorry, no description available for this movie."}
          </p>
          <ul>
            {movie.genres && movie.genres.map((g) => <li key={g}>{g}</li>)}
          </ul>
        </>
      )}
    </div>
  );
};*/

export default Detail;
