import styles from './InfoStrip.module.scss'

export default function InfoStrip() {
  return (
    <section className={styles.infoSection}>
      <div className={styles.infoCopy}>
        <p className={styles.subtitle}>Perfect for every celebration</p>
        <h2>Make every gathering memorable with homemade hospitality.</h2>
        <p>
          Whether you are hosting a kitty party, birthday, anniversary or a small
          house event, our kitchen delivers tasty, trusted food with personal care.
        </p>
      </div>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <strong>100%</strong>
          <p>Homemade food</p>
        </div>
        <div className={styles.statCard}>
          <strong>Fresh</strong>
          <p>Ingredients every day</p>
        </div>
        <div className={styles.statCard}>
          <strong>Trusted</strong>
          <p>Service you can count on</p>
        </div>
      </div>
    </section>
  )
}
