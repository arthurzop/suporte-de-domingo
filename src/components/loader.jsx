import style from "./loader.module.css";

export default function Loader() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.loader}>
          <p>hello </p>
          <div className={style.words}>
            <span className={style.word}></span>
            <span className={style.word}>world</span>
            <span className={style.word}>mundo</span>
            <span className={style.word}>世界</span>
            <span className={style.word}>🌍</span>
          </div>
          <p>!</p>
        </div>
      </div>
    </div>

  );
}
