import "../src/styles/main.scss";
import styles from "./app.module.scss";
import HomePage from "./pages/homepage/HomePage";
import { useState } from "react";

function App() {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const toggleShowFilter = () => {
    setShowFilter((prev) => {
      if (!prev) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
      return !prev;
    });
  };

  return (
    <div className={`${styles.container}`}>
      <HomePage showFilter={showFilter} toggleShowFilter={toggleShowFilter} />
    </div>
  );
}

export default App;
