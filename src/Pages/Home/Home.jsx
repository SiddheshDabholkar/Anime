import React, { useEffect, useState } from "react";
import "./Home.scss";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Card from "./components/Card";

export default function Home() {
  const [query, setQuery] = useState("");
  const [films, setFilms] = useState([]);
  const [error, setError] = useState("");
  const [searchedFilm, setSearchedFilm] = useState([]);

  console.log("films", films);
  console.log("searchedFilm", searchedFilm);

  const fetchFilms = async () => {
    try {
      const fetchingFilms = await fetch(
        "https://ghibliapi.herokuapp.com/films"
      );
      const result = await fetchingFilms.json();
      setFilms(result);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    console.log("bruh i am running");
    fetchFilms();
  }, []);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const filterSearchedAnime = (query) => {
    return films.filter((f) => {
      if (f.title.toString().toLowerCase().includes(query)) {
        return f;
      }
    });
  };

  const handleSearch = () => {
    setSearchedFilm(filterSearchedAnime(query));
  };

  return (
    <div className="Home">
      <div className="HomeTop">
        <Input value={query} onChange={handleQueryChange} />
        <Button onClick={handleSearch} />
      </div>
      <div className="HomeBottom">
        {searchedFilm.map((s) => (
          <Card key={s.id} data={s} />
        ))}
      </div>
    </div>
  );
}
