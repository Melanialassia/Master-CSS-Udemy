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
      <nav className={style.menu}>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Contenido</a>
          </li>
          <li>
            <a href="#">Requerimientos</a>
          </li>
          <li>
            <a href="#">Lenguajes</a>
            <ul>
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Frameworks</a>
            <ul>
              <li>
                <a href="#">LESS</a>
              </li>
              <li>
                <a href="#">SASS</a>
              </li>
              <li>
                <a href="#">Bootstap 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Proyectos</a>
          </li>
          <li>
            <a href="#">Instructor</a>
          </li>
          <li>
            <a href="#">Reseñas</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
