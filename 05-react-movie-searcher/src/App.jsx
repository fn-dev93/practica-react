import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { useCallback, useState } from "react";
import  debounce  from "just-debounce-it";

export function App() {
  const { search, setSearch, error } = useSearch();
  const [sort, setSort] = useState(false);

  const {
    movies,
    getMovies,
    loading,
    error: moviesError,
  } = useMovies({ search, sort });

  const handleDebounce = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [],
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    // const { query } = Object.fromEntries(new FormData(event.target));
    getMovies({ search });
  };

  const handleOnChange = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
    handleDebounce(newValue);
  };

  const handleSort = (event) => {
    setSort(event.target.checked);
  };

  return (
    <div className="page">
      <header>
        <h1>React Movie Searcher</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            style={{
              border: "1p solid transparent",
              borderColor: error ? "red" : "transparent",
            }}
            onChange={handleOnChange}
            value={search}
            name="query"
            type="text"
            placeholder="Avengers, star wars, The matrix..."
          />
          <button type="submit">Search</button>
          <label>
            <input type="checkbox" onChange={handleSort} />
            Sort by title
          </label>
        </form>
      </header>

      <main>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
        {moviesError && <p style={{ color: "red" }}>{moviesError}</p>}
      </main>
    </div>
  );
}
