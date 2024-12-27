import SearchBar from "../searchBar/SearchBar";

import styles from "./header.module.scss";

import Logo from "../../assets/images/Pokedex-logo.svg";
import { SearchBarProps } from "../../utils/types";

export default function Header({ searchTerm, setSearchTerm, handleSearch }: SearchBarProps) {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.header__logo} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
    </div>
  );
}
