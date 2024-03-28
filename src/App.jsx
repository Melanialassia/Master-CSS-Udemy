import style from "./App.module.css";

function App() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.logo}>
          <img src="public/logo.png" alt="logo" />
        </div>
        <h1>Master en CSS</h1>
      </header>
    </div>
  );
}

export default App;
