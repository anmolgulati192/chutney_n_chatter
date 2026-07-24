import Carousel from './Carousel'
import styles from './Hero.module.scss'
import { InstagramIcon, WhatsAppIcon } from './Icons'

const whatsappLink =
  'https://wa.me/+919691004754?text=Hi%20Chutney%20%26%20Chatter%2C%20I%20would%20like%20to%20place%20an%20order.'
const instagramLink = 'https://www.instagram.com/chutney_n_chatter'

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.copyBlock}>
        <span className={styles.ribbon}>Homemade catering for every occasion</span>
        <h1>
          Fresh homemade meals for small gatherings, parties and celebrations.
        </h1>
        <p>
          Chutney & Chatter brings delicious South Indian, North Indian,
          Rajasthani and Jain home kitchen food to Jabalpur events with
          hygienic preparation and friendly ordering through WhatsApp.
        </p>
        <div className={styles.ctaGroup}>
          <a
            className={`${styles.primaryButton} ${styles.buttonWithIcon}`}
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Book via WhatsApp
          </a>
          <a
            className={`${styles.secondaryButton} ${styles.buttonWithIcon}`}
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
            Visit Instagram
          </a>
        </div>
      </div>

      <div className={styles.visualBlock}>
        <Carousel />
        <div className={styles.heroCard}>
          <span className={styles.heroChip}>100% hygienic & homemade</span>
          <div className={styles.heroStats}>
            <div>
              <strong>Starting from ₹250*</strong>
              <p>Per person package</p>
              <p className={styles.termsNote}>* Pricing may vary by menu choice</p>
            </div>
            <div>
              <strong>Starter • Main • Dessert</strong>
              <p>Tea or coffee optional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
