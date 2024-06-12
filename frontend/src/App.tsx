import "./App.css";
import Header from "./components/Header";
import RecentAds from "./components/RecentAds";
import styles from "./styles/Layout.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles["main-content"]}>
        <RecentAds />
      </main>
    </>
  );
}

export default App;
