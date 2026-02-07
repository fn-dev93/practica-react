import { useState, useEffect } from "react";

// Custom hook to get cat image based on the fact
export function useCatImg({ fact }) {
  const [imageUrl, setImageUrl] = useState("");

  // Get cat image from API when fact changes
  useEffect(() => {
    if (!fact) return;

    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`,
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);

  return imageUrl;
}
