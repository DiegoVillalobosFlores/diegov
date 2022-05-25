import styles from './Feedback.module.scss'

export default function Feedback() {
  return (
    <div className={styles.root}>
      <label className={styles.label}>Please let me know what you think, your opinion matters to me!</label>
      <div>
        <textarea/>
      </div>
      <div>
        <input type={"button"} value={'Submit'}/>
      </div>
    </div>
  )
}
