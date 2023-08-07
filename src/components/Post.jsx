import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { Comment } from './comment'
export function Post(props){
    console.log(props)
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://avatars.githubusercontent.com/u/96136272?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Danilo Fossatto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
 
                <time title='06 de agosto às 08:13h' dateTime='2023-08-06 08:13:30'>Publicado há 1h</time>
            </header>

        <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href=""> jane.design/doctorcare</a></p>

       <p>
          <a href=""> #novoprojeto</a>{" "}
          <a href=''>#nlw</a>{" "}
          <a href=''>#rocketseat</a>
        </p>
        </div>
        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea placeholder='Deixe um comentário'></textarea>
            <footer>
                <button type='submit'>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment/>
            <Comment/>
            <Comment/>
        </div>
        </article>
    )
}