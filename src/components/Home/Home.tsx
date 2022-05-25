import styles from './Home.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <img className={styles.dog} src={'/dog.gif'}/>
      <div className={styles.congratulationsContainer}>
        <img className={styles.congratulations} src={'/congratulations.gif'}/>
        <h1 className={styles.title}>
          Welcome to my page!
        </h1>
      </div>
      <h2 className={`${styles.h2} ${styles.github}`}>
        <a className={styles.link} href={'https://github.com/DiegoVillalobosFlores'}>Github</a>
      </h2>
      <div className={styles.carContainer}>
        <img className={styles.car} src={'/car.gif'}/>
      </div>
      <a href={'/feedback'} className={styles.clippy}>
        <img src={'/clippy.gif'}/>
      </a>
    </div>
  )
}