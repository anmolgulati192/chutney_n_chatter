import styles from './Features.module.scss'

const features = [
  {
    title: 'Authentic South Indian',
    description: 'Fresh dosas, idli, vada and homemade chutneys prepared daily.',
    icon: '🥥',
  },
  {
    title: 'Rajasthani & Jain Style',
    description: 'Pure spices and regional favourites for special menus.',
    icon: '🌿',
  },
  {
    title: 'Custom menus',
    description: 'Tailored food selections for birthdays and private events.',
    icon: '📝',
  },
  {
    title: 'On-time delivery',
    description: 'Pickup and order coordination that keeps your meal fresh.',
    icon: '⏱️',
  },
]

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.headerText}>
        <p className={styles.subtitle}>What we serve</p>
        <h2>Homemade flavours made with care and trust.</h2>
      </div>

      <div className={styles.featureGrid}>
        {features.map((item) => (
          <article key={item.title} className={styles.featureCard}>
            <div className={styles.featureIcon}>{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
