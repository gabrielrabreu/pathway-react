import React, { useEffect, useState } from "react";
import { SearchCheckIcon } from "lucide-react";

interface MultiselectFilterProps {
  placeholder: string;
  onQueryChange: (query: string) => void;
}

export interface MultiselectFilterComponent
  extends React.FC<MultiselectFilterProps> {}

const MultiselectFilter: MultiselectFilterComponent = ({
  placeholder,
  onQueryChange,
}) => {
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    onQueryChange(query);
  }, [query]);

  return (
    <div className="flex items-center sticky px-2 top-0 bg-white">
      <SearchCheckIcon size={18} className="text-gray-500" />
      <input
        className="placeholder:text-gray-500 w-full p-2 outline-none"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder={placeholder}
        data-testid="multiselect-filter"
      />
    </div>
  );
};

export default MultiselectFilter;
