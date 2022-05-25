import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        Welcome to my page!
      </h1>
      <h2 className={`${styles.h2} ${styles.github}`}>
        <a className={styles.link} href={'https://github.com/DiegoVillalobosFlores'}>Github</a>
      </h2>
      <img className={styles.clippy} src={'/clippy.gif'}/>
      <img className={styles.dog} src={'/dog.gif'}/>
    </div>
  )
}