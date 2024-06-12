import { RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import styles from "./styles/Layout.module.css";
import router from "./router/router";

function App() {
  return (
    <>
      <Header />
      <main className={styles["main-content"]}>
        <RouterProvider router={router} />
      </main>
    </>
  );
}

export default App;
