import { Header } from "./components/Header"
import "./global.css"

import styles from './App.module.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/96136272?v=4",
      name: "Danilo Fossatto",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-07 14:17:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/2254731?v=4",
      name: "Diego Fernandes",
      role: "CTO @Rockeatseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-08-10 14:17:00'),
  }
]




function App() {
  return (
    <div>
    <Header />
    <div className={styles.wrapper}>

    <aside>
      <Sidebar/>
    </aside>
    <main>
      {posts.map(post =>{
        return (<Post 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />)
      })}
    </main>

    </div>
    </div>
  )}

export default App

