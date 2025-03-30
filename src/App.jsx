import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

/*
const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      //비동기 함수 선언 for 비동기 작업 ex) API호출
      const response = await fetch(
        //await 키워드를 사용하여 비동기 작업이 완료될 때까지 기다림.
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.7&sort_by=year`
      ); //fetch 함수가 완료될 때까지 기다렸다가 그 결과를 response에 저장.
      const json = await response.json();
      //response.json()을 호출해서 JSON 데이터를 파싱하고, 그 결과를 json에 저장.
      // 이렇게 축약 가능!
      // const json = await (
      //   await fetch (`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
      // ).json();
      

      setMovies(json.data.movies); // 상태 업데이트 for 렌더링
      setLoading(false); //로딩 상태 해제
    };
    fetchMovies(); //선언한 비동기 함수 직접 호출. 이 방식으로 useEffect 안에서 비동기 작업을 안전하게 수행 가능.
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </>
      )}
    </div>
  );
};
*/
