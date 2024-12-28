import "../src/styles/main.scss";
import styles from "./app.module.scss";
import HomePage from "./pages/homepage/HomePage";
import { useState } from "react";

function App() {
  const [showFilter, setShowFilter] = useState<boolean>(true);

  return (
    <div className={`${styles.container}`}>
      <HomePage showFilter={showFilter} setShowFilter={setShowFilter} />
    </div>
  );
}

export default App;
