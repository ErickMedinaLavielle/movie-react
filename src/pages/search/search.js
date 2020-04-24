import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog";
import Footer from "../../components/Footer";
import { URL_API, API } from "../../utils/constans";

import "./search.scss";

function Search(props) {
  const { location, history } = props;
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search);
      const { s } = searchValue.query;
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
      );
      const movies = await response.json();
      setMovieList(movies);
      setSearchValue(s);
      console.log(movieList);
    })();
  }, [location.search]);

  const onChangeSearch = e => {
    const urlParams = queryString.parse(location.search);
    console.log(urlParams);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu pelicula</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList}></MovieCatalog>
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer></Footer>
      </Col>
    </Row>
  );
}

export default withRouter(Search);
