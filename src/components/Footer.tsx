import styles from './Footer.module.scss'
import { WhatsAppIcon } from './Icons'

const whatsappLink =
  'https://wa.me/+919691004754?text=Hi%20Chutney%20%26%20Chatter%2C%20I%20want%20to%20order%20food.'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <strong>Chutney & Chatter</strong>
        <p>
          Homemade home kitchen catering in Jabalpur with fresh flavours, hygienic
          service and easy ordering over WhatsApp.
        </p>
      </div>
      <a
        className={`${styles.whatsappButton} ${styles.buttonWithIcon}`}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        Message on WhatsApp
      </a>
    </footer>
  )
}
