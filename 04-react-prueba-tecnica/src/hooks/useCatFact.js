import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

// Custom hook to get cat fact
export function useCatFact() {
  const [fact, setFact] = useState("");

  const refreshFact = () => {
    getRandomFact().then(setFact);
  };

  // Get fact from API when component mounts
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
