import { IPost } from "../models/IPost"
import styles from "../styles/PostItem.module.css"
import {Link} from "react-router-dom"
import { useActions } from "../hooks/actions"
import { MyButton } from "./UI/MyButton"

export const PostItem:React.FC<IPost> = ({title, date, id}) => {
    const {removePost} = useActions()

    function handleDelete() {
        removePost(id) 
    }

    return (
        <div className={styles.card}>
            <p className={styles.date}>{date.split('T')[0]}</p>
            <Link to={`/posts/${id}`} className={styles.link}>{title}</Link>            
            <MyButton text="Удалить" click={handleDelete} /> 
        </div>
    )
}