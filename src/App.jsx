import style from "./App.module.css";

function App() {
  return (
    <>
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
      <div className={style.container}>
        <aside className={style.lateralMenu}>
          <div className={style.widget}>
            <h3>Ingresar</h3>
            <form action="">
              <label htmlFor="">Usuario: </label>
              <input type="text" />

              <label htmlFor="">Constraseña: </label>
              <input type="password" />

              <input type="submit" value="Ingresar" />
            </form>
              <a href="#"> Alumnos</a>
              <a href="#"> Profesores</a>
              <a href="#"> Calificaciones</a>
          </div>
          <div className={style.widget}>
            <h3> Aula vitual 1</h3>
            <form action="">
              <label htmlFor="">Nombre de asuario: </label>
              <input type="text" />

              <label htmlFor="">Constraseña: </label>
              <input type="password" />

              <input type="submit" value="Ingresar" />
            </form>
          </div>
          <div className={style.widget}>
            <h3>Aula vitual 2</h3>
            <form action="">
              <label htmlFor="">Nombre de asuario: </label>
              <input type="text" />

              <label htmlFor="">Constraseña: </label>
              <input type="password" />

              <input type="submit" value="Ingresar" />
            </form>
          </div>
          <div className={style.widget}>
            <h3>Enlaces de interes</h3>
            <ul>
              <li>
              <a href="https://www.bing.com/search?pglt=41&q=udemy&cvid=c9592551c5f94542a0302dfe1ab2273f&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDzSAQc4MzBqMGoxqAIAsAIA&FORM=ANSPA1&PC=DCTS">Udemy</a>
              </li>
              <li>
              <a href="https://www.soyhenry.com/webfullstack?utm_source=google&utm_medium=cpc&utm_campaign=GADS_PMAX_ARG&utm_content=fs&gad_source=1&gclid=Cj0KCQjwqpSwBhClARIsADlZ_TkfvYB1kRuXF88EWqfUXawrcqvxMKBN34rflEhaJdZ0RMH_oD7UrU0aAiWeEALw_wcB"> Bootcamp Henry</a>
              </li>
              <li>
              <a href="https://www.youtube.com/@midulive"> Canal midudev</a>
              </li>
            </ul>
          
          </div>
        </aside>
      </div>
      </>
  );
}

export default App;
