import { useState } from "react"
import { useParams } from "react-router-dom"
import { Loader } from "../components/UI/Loader"
import { MyButton } from "../components/UI/MyButton"
import { MyInput } from "../components/UI/MyInput"
import { MyTextarea } from "../components/UI/MyTextarea"
import { postApi } from "../services/PostService"
import styles from "../styles/PostPage.module.css"
import { Comment } from "../components/Comment"

export const PostPage = () => {
    const {id} = useParams()
    const {data: postResponce, isLoading: postIsLoading} = postApi.useGetPostQuery(id || '')
    const {data: commentsResponse, isLoading: commentsIsLoading} = postApi.useGetCommentsQuery(id || '')
    const [commentsVisible, setCommentsVisible] = useState(false)

    const [userName, setUserName] = useState('')
    const [userComment, setUserComment] = useState('')
    const [createComment] = postApi.useCreateCommentMutation()
    const [areInputsFilled, setAreInputsFilled] = useState(true)

    async function addComment() {
        if (!userName || !userComment) {
            setAreInputsFilled(false)
            return
          } else {
            setAreInputsFilled(true)
            const comment = {
            text: userComment,
            user: userName,
            article: id
            }
            await createComment(comment)
            setUserName('')
            setUserComment('')
        }        
    }

    return (
        <div className={styles.container}>
            {postIsLoading ? <Loader /> :
                <div>
                    <h2 className={styles.title}>{postResponce?.title}</h2>
                    <p className={styles.body}>{postResponce?.text}</p>
                    <MyButton text={commentsVisible ? "Скрыть комментарии"  : "Показать комментарии"} click={() => setCommentsVisible(prev => !prev)}/>
                </div>
            }
            {commentsVisible && 
            <div>
                {commentsIsLoading ? 
                <Loader /> :
                <div>
                    {commentsResponse && commentsResponse.map(el => (
                        <Comment text={el.text} user={el.user} key={el.id}/>
                    ))}
                    <div>
                        {!areInputsFilled &&<p style={{color: "red"}}>Заполните все поля</p>}
                        <MyInput value={userName} change={(value) => setUserName(value)} placeholder='Ваше имя' />
                        <MyTextarea value={userComment} change={(value) => setUserComment(value)} placeholder='Комментарий' />
                        <MyButton text="Добавить комментарий" click={addComment}/>
                    </div>
                </div>
                }
            </div>
            }
        </div>
    )
}