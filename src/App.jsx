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
              <label htmlFor="">Usuario</label>
              <input type="text" />

              <label htmlFor="">Constraseña</label>
              <input type="password" />

              <input type="submit" value="Ingresar" />
            </form>
            <a href="#"> Alumnos</a>
            <a href="#"> Profesores</a>
            <a href="#"> Calificaciones</a>
          </div>
          <div className={style.widget}>
            <h3 className={style.blue}> Aula virtual 1</h3>
            <form action="">
              <label htmlFor="">Nombre de asuario </label>
              <input type="text" />

              <label htmlFor="">Constraseña </label>
              <input type="password" />

              <input type="reset" value="Ingresar" />
            </form>
          </div>
          <div className={style.widget}>
            <h3 className={style.red}>Aula virtual 2</h3>
            <form action="">
              <label htmlFor="">Nombre de asuario</label>
              <input type="text" />

              <label htmlFor="">Constraseña</label>
              <input type="password" />

              <input type="reset" value="Ingresar" />
            </form>
          </div>
          <div className={style.widget}>
            <h3>Enlaces de interes</h3>
            <ul>
              <li>
                <a href="https://www.udemy.com/">Udemy</a>
              </li>
              <li>
                <a href="https://www.soyhenry.com"> Bootcamp Henry</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@midulive"> Canal midudev</a>
              </li>
            </ul>
          </div>
        </aside>
        <div className={style.sections}>
          <section>
            <span>
              <img
                className={style.left}
                src="public/scotch.png"
                alt="sticker"
              />
              <img
                className={style.right}
                src="public/scotch.png"
                alt="sticker"
              />
            </span>
            <h2 className={`${style.title} ${style.red}`}>
              Noticia de Front-end
            </h2>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
          </section>
          <section>
            <span>
              <img
                className={style.left}
                src="public/scotch.png"
                alt="sticker"
              />
              <img
                className={style.right}
                src="public/scotch.png"
                alt="sticker"
              />
            </span>
            <h2 className={`${style.title} ${style.blue}`}>
              Noticia de Back-end
            </h2>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
          </section>
          <section>
            <span>
              <img
                className={style.left}
                src="public/scotch.png"
                alt="sticker"
              />
              <img
                className={style.right}
                src="public/scotch.png"
                alt="sticker"
              />
            </span>
            <h2 className={`${style.title} ${style.orange}`}>
              Noticia de instructor
            </h2>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
            <article>
              <span className={style.icon}>a</span>
              <p>
                <a href="#">Titulo de entrada</a>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                finibus dui sapien, in rutrum sem tempor ac. Nunc tristique,
                justo et malesuada euismod, dui lectus aliquet orci, hendrerit
                bibendum diam neque at felis.
              </p>
              <span className={style.date}>
                [28-03-2024. Melani Alassia WEB]
              </span>
            </article>
          </section>
        </div>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
