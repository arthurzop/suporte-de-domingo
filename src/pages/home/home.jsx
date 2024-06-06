import style from "./home.module.css";

export default function HomePage() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.nav}>
          <p>CONTATO</p>
          <p>CONTATO</p>
          <p>CONTATO</p>
          <p>CONTATO</p>
        </nav>
        <h1 className={style.title}>
          SUPORTE <br /> DE DOMINGO
        </h1>
      </header>
    </>
  );
}
