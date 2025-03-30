import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

//📌props.name 직접 사용 대신, 구조분해할당 통해 {name}으로 바로 사용 가능. 대신 props는 object이므로 {}사용.
const Movie = ({ id, coverImg, rating, title, year, genres }) => {
  // 최대 2개의 장르를 가져옵니다.
  const genreList = genres?.slice(0, 2).join(", ");
  // slice(0, 2): 배열의 처음 2개 요소만 가져옵니다.
  // join(", "): 가져온 장르를 쉼표로 구분된 문자열로 만듭니다.

  /* return (
    <div className={styles.movieCard}>
      <img src={coverImg} alt={title} className={styles.movieImage} />

      <div className={styles.movieInfo}>
        <h3 className={styles.rating}>⭐ {rating}</h3>
        <h1 className={styles.title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h1>
        <h2 className={styles.details}>
          {year} · {genreList}
        </h2>
      </div>
    </div>
  );
};*/

  return (
    <div
      className={styles.movieCard}
      style={{ backgroundImage: `url(${coverImg})` }}
    >
      <div className={styles.movieOverlay}>
        <div className={styles.movieInfo}>
          <h3 className={styles.rating}>⭐ {rating}</h3>
          <h1 className={styles.title}>
            <Link
              to={`/movie/${id}`}
              style={{ color: "white", textDecoration: "none" }}
            >
              {title}
            </Link>
          </h1>
          <h2 className={styles.details}>
            {year} · {genreList}
          </h2>
        </div>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, //string을 가진 array
  //PropTypes.arrayOf()
  //React의 PropTypes 라이브러리에서 제공하는 메서드로, 특정 타입의 요소들을 가진 배열을 검증할 때 사용.
  //인자로 들어가는 타입은 배열의 각 요소의 타입을 지정.
};

export default Movie;
