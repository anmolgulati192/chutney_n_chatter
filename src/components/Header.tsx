import logo from '../assets/logo.svg'
import styles from './Header.module.scss'

const whatsappLink =
  'https://wa.me/?text=Hi%20Chutney%20%26%20Chatter%2C%20I%20would%20like%20to%20place%20an%20order.'
const instagramLink = 'https://www.instagram.com/chutney_n_chatter'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img className={styles.logo} src={logo} alt="Chutney & Chatter logo" />
        <div>
          <p className={styles.title}>Chutney & Chatter</p>
          <p className={styles.location}>Jabalpur, Madhya Pradesh</p>
        </div>
      </div>

      <div className={styles.actions}>
        <a
          className={styles.instagram}
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
        >
          @chutney_n_chatter
        </a>
        <a
          className={styles.whatsapp}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          Order on WhatsApp
        </a>
      </div>
    </header>
  )
}
