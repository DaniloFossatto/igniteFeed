import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment({content}){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/96136272?v=4"/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Danilo Fossatto</strong>
                            <time title='06 de agosto às 08:13h' dateTime='2023-08-06 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'><Trash size={24}/></button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button><ThumbsUp />
                    Aplaudir <span>20</span></button>
                </footer>
            </div>
        </div>
    )
}