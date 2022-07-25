import { Header } from './components/Header'
import './global.css'

import styles from './App.module.css'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Nat"
            content="Maravilhosa"
          />
          <Post 
            author="Fértil"
            content="Musa"
          />
        </main>
      </div>
    </div>
  )
}

export default App
