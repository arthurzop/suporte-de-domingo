import style from "./home.module.css";
import Image from "next/image";
import Logo from '../../assets/images/Group.svg'
import Button from '../../components/button/button'

export default function HomePage() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.logoContainer}>
          <Image src={Logo} className={style.logo} />
          <h1 className={style.title}>
            sup <span className={style.titleDetail}>de domingo</span>
          </h1>
        </div>
        <div className={style.subHeader}>
          <nav className={style.navBar}>
            <p className={style.navItem}>contato</p>
            <p className={style.navItem}>contato</p>
            <p className={style.navItem}>contato</p>
          </nav>
        </div>
      </header>
      <main className={style.main}>
        <section className={style.hero}>
          <h1 className={style.heroTitle}>money for here, there and everywhere</h1>
          <h2 className={style.heroSubtitle}>money for here, there and everywhere</h2>
          <div className={style.buttonContainer}>
            <Button label='lorem' color='#f8f9fa' bgcolor='#333333' />
            <Button label='lorem' color='#f8f9fa' bgcolor='#0013be' />
          </div>
        </section>
      </main>
    </div>
  );
}
