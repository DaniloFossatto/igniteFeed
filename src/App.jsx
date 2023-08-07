import { Header } from "./components/Header"
import "./global.css"

import styles from './App.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

function App() {
  return (
    <div>
    <Header />
    <div className={styles.wrapper}>

    <aside>
      <Sidebar/>
    </aside>
    <main>
      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis eveniet, consequatur minima, odio, explicabo rem quas cum iusto aliquam illo nesciunt? Optio expedita itaque odio consequuntur a delectus accusamus. Magni?"
      />
      <Post 
        author="Danilo Fossatto"
        content="Um novo post"
      />
    </main>

    </div>
    </div>
  )}

export default App

