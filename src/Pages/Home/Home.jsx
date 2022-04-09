import React, { useEffect, useState } from "react";
import "./Home.scss";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Card from "./components/Card";
import SkeletonCard from "./components/SkeletonCard";

export default function Home() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [searchedFilm, setSearchedFilm] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const fetchFilms = async () => {
    try {
      setIsLoading(true);
      const fetchingFilms = await fetch(
        "https://ghibliapi.herokuapp.com/films"
      );
      const result = await fetchingFilms.json();
      setFilms(result);
      setSearchedFilm(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchFilms();
  }, []);

  const filterSearchedAnime = (query) => {
    if (query.length === 0) {
      return films;
    } else {
      return films.filter((f) => {
        if (f.title.toString().toLowerCase().includes(query)) {
          return f;
        }
      });
    }
  };

  useEffect(() => {
    setSearchedFilm(filterSearchedAnime(query));
  }, [query]);

  // const handleSearch = () => {
  //   console.log(query, filterSearchedAnime(query));
  //   setSearchedFilm(filterSearchedAnime(query));
  // };

  return (
    <div className="Home">
      <div className="HomeTop">
        <Input value={query} onChange={handleQueryChange} />
        {/* <Button onClick={handleSearch} /> */}
      </div>
      {error && <div className="HomeMid">Something went wrong</div>}
      {!isLoading && searchedFilm.length === 0 && (
        <div className="HomeMid">
          <h1>Try with different keyword or check your internet connection</h1>
        </div>
      )}
      <div className="HomeBottom">
        {isLoading && (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
        {!isLoading && searchedFilm.map((s) => <Card key={s.id} data={s} />)}
      </div>
    </div>
  );
}
