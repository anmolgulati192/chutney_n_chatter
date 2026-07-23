import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import InfoStrip from './components/InfoStrip'
import Menu from './components/Menu'
import Footer from './components/Footer'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.appShell}>
      <Header />
      <Hero />
      <Features />
      <InfoStrip />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
