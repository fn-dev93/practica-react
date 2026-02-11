import { useState, useEffect, useRef } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
        isFirstInput.current = search === "";
        return;
    }

    if (search === "") {
      setError("No se puede buscar una película sin un término de búsqueda");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError(
        "No se puede buscar una película con un término de búsqueda que solo contenga números",
      );
      return;
    }

    if (search.length < 3) {
      setError("El término de búsqueda debe tener al menos 3 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
