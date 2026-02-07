import { useCatImg } from "./hooks/useCatImg";
import { useCatFact } from "./hooks/useCatFact";
import "./App.css";

export function App() {
  const { fact, refreshFact } = useCatFact();
  const imageUrl = useCatImg({ fact });

  const handleClick = () => {
    refreshFact();
  };

  return (
    <main>
      <h1>Catch the cat!</h1>
      <button onClick={handleClick}>Get random cat fact</button>
      {/* Conditional rendering */}
      {fact && <p>{fact}</p>}
      <section>
        {imageUrl && <img src={imageUrl} alt="Cat saying the fact" />}
      </section>
    </main>
  );
}
