import { useState } from "react";

function useFilter(items, filterKey) {
  const [filter, setFilter] = useState("");

  const filteredItems = items.filter((item) =>
    item[filterKey]?.toLowerCase().includes(filter.toLowerCase())
  );

  return { filter, setFilter, filteredItems };
}

export default useFilter;
