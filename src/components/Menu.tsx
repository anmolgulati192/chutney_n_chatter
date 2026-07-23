import styles from './Menu.module.scss'

const menuItems = [
  {
    title: 'Starters',
    description: 'Tasty snacks, crispy pakoras, and chat items with home-style spice.',
  },
  {
    title: 'Main course',
    description: 'Rice, pulao, dal, curries, roti and thali preparations for every palate.',
  },
  {
    title: 'Desserts',
    description: 'Classic homemade sweets and seasonal mithai to finish the meal.',
  },
  {
    title: 'Tea / Coffee',
    description: 'Optional hot beverages for a comforting end to your event menu.',
  },
]

export default function Menu() {
  return (
    <section className={styles.menuSection}>
      <div className={styles.menuHeader}>
        <p className={styles.subtitle}>Menu highlights</p>
        <h2>Flavours from our home kitchen</h2>
      </div>
      <div className={styles.menuGrid}>
        {menuItems.map((item) => (
          <article key={item.title} className={styles.menuCard}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
