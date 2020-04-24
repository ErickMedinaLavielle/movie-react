import React from "react";
import UseFetch from "../hooks/useFetch";
import { URL_API, API } from "../utils/constans";
import SliderMovies from "../components/SliderMovies";
import useFetch from "../hooks/useFetch";
import MovieList from "../components/MovieList";
import { Row, Col } from "antd";
import Footer from "../components/Footer";

export default function Home() {
  const newMovies = useFetch(
    `${URL_API}/movie/now_playing?api_key=${API}&language=en-ES&page=1`
  );
  const popularMovies = useFetch(
    `${URL_API}/movie/popular?api_key=${API}&language=en-ES&page=1`
  );

  const topRatedMovies = useFetch(
    `${URL_API}/movie/top_rated?api_key=${API}&language=en-ES&page=1`
  );
  return (
    <>
      <SliderMovies movies={newMovies}></SliderMovies>
      <Row>
        <Col span={12}>
          <MovieList
            title="Películas populares"
            movies={popularMovies}
          ></MovieList>
        </Col>
        <Col span={12}>
          <MovieList
            title="Top mejores películas puntuadas"
            movies={topRatedMovies}
          ></MovieList>
        </Col>
      </Row>
      <Footer></Footer>
    </>
  );
}
