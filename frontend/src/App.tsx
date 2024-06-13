import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import styles from "./styles/App.module.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles["main-content"]}>
        <Outlet />
      </main>
    </>
  );
}

export default App;
