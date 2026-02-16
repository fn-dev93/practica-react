import { useId } from "react";
import { useFilters } from "../hooks/useFilters";
import "./Filters.css";

export function Filters() {
  const { filters, setFilters } = useFilters();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        minPrice: event.target.value,
      };
    });
  };

  const handleSelect = (event) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        category: event.target.value,
      };
    });
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}>Price</label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleSelect}>
          <option value="all">All</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Smartphones</option>
        </select>
      </div>
    </section>
  );
}
