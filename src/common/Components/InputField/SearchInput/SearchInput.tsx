import React, { useState } from "react";
import styles from "./SearchInput.module.scss";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
  iconSrc: string; // Path to the search icon
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", onSearch, iconSrc }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <img src={iconSrc} alt="Search Icon" className={styles.searchIcon} onClick={handleSearch} />
    </div>
  );
};

export default SearchInput;
