import logo from '../assets/logo.svg'
import styles from './Header.module.scss'
import { InstagramIcon, WhatsAppIcon } from './Icons'

const whatsappLink =
  'https://wa.me/+919691004754?text=Hi%20Chutney%20%26%20Chatter%2C%20I%20would%20like%20to%20place%20an%20order.'
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
          className={`${styles.actionLink} ${styles.instagram}`}
          href={instagramLink}
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
          @chutney_n_chatter
        </a>
        <a
          className={`${styles.actionLink} ${styles.whatsapp}`}
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon />
          Order on WhatsApp
        </a>
      </div>
    </header>
  )
}
