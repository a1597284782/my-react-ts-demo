import robots from './mockdata/robots.json'
import Robot from './components/Robot'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map((r) => (
          <Robot id={r.id} email={r.email} name={r.name} />
        ))}
      </div>
    </div>
  )
}

export default App
