import SearchBar from "../searchBar/SearchBar";

import styles from "./header.module.scss";

import Logo from "../../assets/images/Pokedex-logo.svg";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt="Logo" className={styles.header__logo} />
      <SearchBar />
    </div>
  );
}
