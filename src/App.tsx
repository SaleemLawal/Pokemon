import "../src/styles/main.scss";
import styles from "./app.module.scss";
import HomePage from "./pages/homepage/HomePage";

function App() {
  return (
    <div className={styles.container}>
      <HomePage />
    </div>
  );
}

export default App;
